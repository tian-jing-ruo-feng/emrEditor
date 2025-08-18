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
const DC_TOOBAR_MENULIST_LI_HASCHILDREN = 'DC-toolBar-menuList-li-hasChild'
const DC_TOOLBAR_PANEL_TOOLBAR_SELECTOR = '.DC-toolBar-panel-toolsbar'
/** 二级菜单列表 */
const DC_CHILDMENU = '#dc_childMenu'
const DC_TOOLBAR_GROUP_SELECTOR = '.toolbar-group'
const DC_TOOLBAR_BOX_SELECTOR = '.toolbar-box'
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
    label: '父级',
    icon: '',
    onClick() {},
    children: [
      {
        label: '子级1',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info('子级1点击事件')
        },
      },
      {
        label: '子级2',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info('子级2点击事件')
        },
      },
      {
        label: '子级3',
        icon: '',
        onClick(ctl: EMRElement) {
          consola.info('子级3点击事件')
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
      fileButton.addEventListener('click', (e: Event) => {
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
