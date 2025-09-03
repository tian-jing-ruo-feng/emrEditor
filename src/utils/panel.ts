import { consola } from 'consola'

export type MenuConfig = {
  label: string
  icon: string
  onClick: (ctl: EMRElement) => void
  children?: MenuConfig[]
}


const DC_TOOLBAR_PANEL_SELECTOR = '.DC-toolBar-panel'
const DC_TOOLBAR_PANEL_MENU_SELECTOR = '.DC-toolBar-panel-menu'
const DC_TOOLBAR_PANEL_MENULIST_SELECTOR = '.DC-toolBar-panel-menuList'
// const DC_TOOBAR_MENULIST_LI_HASCHILDREN = 'DC-toolBar-menuList-li-hasChild'
// const DC_TOOLBAR_PANEL_TOOLBAR_SELECTOR = '.DC-toolBar-panel-toolsbar'
/** 二级菜单列表 */
const DC_CHILDMENU = '#dc_childMenu'
// const DC_TOOLBAR_GROUP_SELECTOR = '.toolbar-group'
// const DC_TOOLBAR_BOX_SELECTOR = '.toolbar-box'
/** 分割线样式 */
const MENU_ITEM_DIVIDED = 'menu_item__divided'
/** icons 字典 */
const SVG_Dictionary = {
  /** 新增 */
  'add-document':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m320 512V448h64v128h128v64H544v128h-64V640H352v-64z"></path></svg>',
  /** 保存 */
  'save-document':
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path></svg>',
  'mock-data':
    '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5245"><path d="M512 0c41.28 0 81.28 2.176 119.296 6.336l28.16 3.456 30.272 4.672c152.32 26.368 261.376 86.848 269.76 166.4l0.64 3.008V836.48l-0.192 4.096-0.64 3.84C946.56 951.744 750.336 1024 512 1024c-240.704 0-438.592-73.792-447.68-182.976L64 833.28V190.72l0.384-8.64C71.488 104.832 173.44 45.44 318.08 17.472l16.192-3.008 30.336-4.672C410.816 3.392 460.416 0 512 0z m0 595.776c-165.824 0-311.296-35.072-388.736-92.544v118.912l0.192 2.432c8.448 55.232 143.168 110.912 320.128 122.624l-16.64-16.64a32 32 0 0 1 40.832-49.024l4.48 3.712 113.088 113.152 203.648-203.648a32 32 0 0 1 48.96 40.832l-3.648 4.416L608 866.304a32 32 0 0 1-40.832 3.648l-4.48-3.648-56.448-56.512-21.952-0.256a995.776 995.776 0 0 1-179.2-19.712l-27.968-6.4c-63.552-15.872-116.608-38.4-153.92-66.048l0.064 118.912 0.192 2.368c9.536 62.208 178.944 124.928 388.544 124.928 209.92 0 379.52-62.912 388.544-125.184l0.384-5.184 0.064-330.176C823.68 560.64 678.016 595.84 512 595.84z m389.056-306.816c-55.04 40.96-144.576 70.464-251.328 84.16l-21.632 2.56-32.192 2.88a1130.624 1130.624 0 0 1-140.352 1.664l-27.456-1.664-32.192-2.88c-116.16-12.288-213.952-43.008-272.64-86.528v118.912l0.192 2.368C132.992 472.576 302.4 535.296 512 535.296c209.92 0 379.52-62.912 388.544-125.184l0.384-5.12 0.128-116.032zM512 60.48c-209.6 0-379.008 62.72-388.48 124.8l-0.448 6.4 0.192 1.344-0.064 0.896C128.64 256.896 299.712 321.28 512 321.28c215.808 0 388.928-66.496 388.928-130.432 0-63.872-173.12-130.368-388.928-130.368z" p-id="5246"></path></svg>'
}
/** 自定义菜单配置列表 */
const MenuListConfig: MenuConfig[] = [
  {
    label: '新建',
    icon: SVG_Dictionary['add-document'],
    onClick(ctl: EMRElement) {
      consola.info('新建')
      ctl.DCExecuteCommand('FileNew', false, false)
    },
  },
  {
    label: '保存',
    icon: SVG_Dictionary['save-document'],
    onClick(ctl: EMRElement) {
      consola.info('保存')
      // alert('保存')
      const saveStr = ctl.SaveDocumentToString()
      consola.info('保存字符串', saveStr)
    },
  },
  {
    label: 'mock数据源',
    icon: SVG_Dictionary['mock-data'],
    onClick(ctl: EMRElement) {
      const userInfo = {
        userName: '张三',
        userAge: 25,
        userSex: 0,
        fromWay: 'walk',
        fromWayName: '（步行）自行来院',
        dylist: '有下拉选项1,无下拉选项2'
      }
      /** 绑定数据到数据源 */
      ctl.setDataWithDataSources(null, { userInfo })
    },
  },
  {
    label: '父级',
    icon: '',
    onClick() { },
    children: [
      {
        label: '子级1',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info(ctl, '子级1点击事件')
        },
      },
      {
        label: '子级2',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info(ctl, '子级2点击事件')
        },
      },
      {
        label: '子级3',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info(ctl, '子级3点击事件')
        },
      },
    ],
  },
]

export const usePanel = (ctl: EMRElement) => {
  /** 菜单面板 */
  const panelMenuEle = ctl.querySelector(DC_TOOLBAR_PANEL_MENU_SELECTOR) as HTMLElement
  /** 模板菜单对用的功能列表 */
  const menulistEles = ctl.querySelector(DC_TOOLBAR_PANEL_MENULIST_SELECTOR) as HTMLElement
  if (panelMenuEle) {
    modifyFileMenuList(panelMenuEle, menulistEles, ctl)
  }
}

/**
 * 修改文件对用的菜单列表
 * @param {HTMLElement} panelMenuEle 菜单面板
 * @param {HTMLElement} menulistEles 模板菜单对用的功能列表
 * @returns void
 */
function modifyFileMenuList(panelMenuEle: HTMLElement, menulistEles: HTMLElement, ctl: EMRElement) {
  if (panelMenuEle) {
    /** 文件按钮 */
    const fileButton = panelMenuEle.children[0]
    if (fileButton) {
      /** 文件按钮下的菜单列表添加自定义按钮功能 */
      fileButton.addEventListener('click', () => {
        setTimeout(() => {
          /** 菜单列表 ul 元素 */
          const ulEle = menulistEles?.querySelector('ul')

          if (ulEle) {
            /** 菜单下第一个元素 */
            const firsLiEle = ulEle?.children[0]

            if (firsLiEle) {
              /** 第一个元素添加分割线 */
              firsLiEle.classList.add(MENU_ITEM_DIVIDED)
              /** 创建代码片段 */
              const fragment = createMenuList(MenuListConfig, ctl)
              attachFirstLevelMenuHoverHandlers(fragment, ctl, MenuListConfig)
              /** 插入第一个元素前边 */
              ulEle.insertBefore(fragment, firsLiEle)
            }
          }
        }, 0)
      })
    }
  }
}

/**
 * 一级菜单列表 mouseenter 事件处理
 * @param {DocumentFragment} fragment 文档片段
 * @param {EMRElement} ctl 编辑器元素
 * @param {MenuConfig[]} menuListConfig 菜单列表配置
 */
function attachFirstLevelMenuHoverHandlers(
  fragment: DocumentFragment,
  ctl: EMRElement,
  menuListConfig: MenuConfig[],
) {
  const children = [...fragment.childNodes]
  /** 一级菜单列表：没有二级菜单，则隐藏二级菜单面板 */
  children.forEach((li, ind) => {
    li.addEventListener('mouseenter', () => {
      let liListMenuDOM = ctl.querySelector(DC_CHILDMENU)
      const menu = menuListConfig[ind]
      if (!menu.children && liListMenuDOM) {
        liListMenuDOM.classList.remove('show')
        return
      } else if (!menu.children) {
        return
      }
    })
  })
}

/**
 * 生成li菜单元素
 * @param {MenuConfig} menu 菜单配置
 * @returns {HTMLLIElement}
 */
function createLiMenu(menu: MenuConfig, ctl: EMRElement) {
  const li = document.createElement('li') as HTMLLIElement
  li.innerHTML += `<div>${menu.icon}</div> ${menu.label}`
  li.onclick = () => menu.onClick(ctl)
  if (menu.children) {
    li.classList.add('DC-toolBar-menuList-li-hasChild')
    createSecondMenuList(menu.children, li, ctl)
  }
  li.classList.add(MENU_ITEM_DIVIDED)

  return li
}

function createSecondMenuList(menu: MenuConfig[], liDOM: HTMLLIElement, ctl: EMRElement) {
  liDOM.addEventListener('mouseenter', (e: Event) => {
    let liListMenuDOM = ctl.querySelector(DC_CHILDMENU) as HTMLElement
    if (liListMenuDOM) {
      const ulEle = liListMenuDOM?.querySelector('ul')

      if (ulEle) {
        showMenuList(liListMenuDOM)

        if (ulEle.children?.length) {
          ;[...ulEle.children].forEach(child => child.remove())
        }
        /** 创建代码片段 */
        const fragment = createMenuList(menu, ctl)
        ulEle.appendChild(fragment)

        /** 调整位置 */
        adjustPosition(e, liListMenuDOM, ctl)
      }
    } else {
      /** 创建菜单列表元素 */
      liListMenuDOM = ctl.ownerDocument.createElement('div')
      liListMenuDOM.id = DC_CHILDMENU.slice(1)
      liListMenuDOM.classList.add(DC_TOOLBAR_PANEL_MENULIST_SELECTOR.slice(1))
      let pannelDOM = ctl.querySelector(DC_TOOLBAR_PANEL_SELECTOR)
      if (pannelDOM) {
        pannelDOM.insertAdjacentElement('beforeend', liListMenuDOM)
      }
      showMenuList(liListMenuDOM)

      const ul = document.createElement('ul')
      /** 创建代码片段 */
      const fragment = createMenuList(menu, ctl)
      ul.appendChild(fragment)
      liListMenuDOM?.appendChild(ul)

      /** 调整位置 */
      adjustPosition(e, liListMenuDOM, ctl)
    }
  })
}

/** 展示二级菜单 */
function showMenuList(liListMenuDOM: HTMLElement) {
  liListMenuDOM.classList.add('show')
}

/**
 * 调整二级菜单位置
 * @param {Event} e 事件对象
 * @param {HTMLElement} liListMenuDOM 二级菜单元素
 * @param {EMRElement} ctl 编辑器元素
 * @returns void
 */
function adjustPosition(e: Event, liListMenuDOM: HTMLElement, ctl: EMRElement) {
  /** 调整位置 */
  const target = e.target as HTMLElement
  const offsetParent = target.offsetParent as HTMLElement
  liListMenuDOM.style.left = offsetParent.offsetLeft + offsetParent.offsetWidth + 'px'
  liListMenuDOM.style.top = offsetParent.offsetTop + target.offsetTop + 'px'
  liListMenuDOM.style.maxHeight = ctl.offsetHeight - (target.offsetTop + 30) + 'px'
}

/**
 * 生成菜单代码片段
 * @param menuListConfig
 * @returns {DocumentFragment}
 */
function createMenuList(menuListConfig: MenuConfig[], ctl: EMRElement) {
  const fragment = document.createDocumentFragment()
  menuListConfig.forEach(menu => {
    const li = createLiMenu(menu, ctl)

    fragment.appendChild(li)
  })

  return fragment
}
