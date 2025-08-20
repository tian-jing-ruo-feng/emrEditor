import consola from 'consola'
import type { IMenuSetting, TMenuOption, TMenuOptionSetting } from '../../types/contextMenu'
import type { DocumentElementTypeEnum } from '../../types/enum'
import { DocumentElementType } from '../../utils/constant'
import { fragment } from '../../mocks/fragment'

const DC_CONTEXT_MENU_ID = 'dcContextMenu'
/** 右键菜单元素 id */
const DC_CONTEXT_MENU_ID_SELECTOR = `#${DC_CONTEXT_MENU_ID}`
/** 右键菜单样式 style 标签 id */
const CONTEXT_MENU_CSS_ID = 'ContextMenuCss'
const Field_Attribute_Dialog = {
  [DocumentElementType.XTextInputFieldElement]: (ctl: EMRElement) => ctl.InputFieldDialog(),
  [DocumentElementType.XTextRadioBoxElement]: (ctl: EMRElement) => ctl.CheckboxAndRadioDialog(),
  [DocumentElementType.XTextCheckBoxElement]: (ctl: EMRElement) => ctl.CheckboxAndRadioDialog(),
  [DocumentElementType.XTextLabelElement]: (ctl: EMRElement) => ctl.LabelDialog(),
  [DocumentElementType.XTextTableCellElement]: (ctl: EMRElement) => ctl.tableCellDialog(),
  [DocumentElementType.XTextNewBarcodeElement]: (ctl: EMRElement) => ctl.BarCodeDialog(),
  [DocumentElementType.XTextTDBarcodeElement]: (ctl: EMRElement) => ctl.QRCodeDialog(),
  [DocumentElementType.XTextImageElement]: (ctl: EMRElement) => ctl.ImageDialog(),
  [DocumentElementType.XTextButtonElement]: (ctl: EMRElement) => ctl.ButtonDialog(),
  [DocumentElementType.XTextHorizontalLineElement]: (ctl: EMRElement) => ctl.HorizontalLineDialog(),
  [DocumentElementType.XTextPageInfoElement]: (ctl: EMRElement) => ctl.PageNumberDialog(),
  [DocumentElementType.XTextElement]: (ctl: EMRElement) => ctl.FontSelectionDialog(),
}

export const insertBetween = <T>(arr: T[], separator: T): T[] => {
  return arr.flatMap((item, index) => (index < arr.length - 1 ? [item, separator] : [item]))
}

function genAttributeDialogByElementType(
  myWriterControl: EMRElement,
  elementType: DocumentElementTypeEnum,
) {
  if (Field_Attribute_Dialog[elementType]) {
    return Field_Attribute_Dialog[elementType](myWriterControl)
  }

  return
}

/** 配置菜单 */
export function genContextMenuOptions(
  myWriterControl: EMRElement,
  elementType: DocumentElementTypeEnum,
) {
  consola.info('右键元素类型👉', elementType)
  let options: TMenuOption[] = []
  const splitLine = '-'
  const baseOptions = [
    {
      label: '撤销',
      exec: () => {
        myWriterControl.DCExecuteCommand('Undo', false, null)
      },
    },
  ]
  /** 文档结构化元素菜单设置 */
  const FieldElementOptions = [
    {
      label: '属性',
      exec: () => {
        /** 测试：获取输入焦点所在病程记录的ID */
        const subdocId = myWriterControl.CurrentSubDoc()
        consola.info('病程id', subdocId)
        /** 生成各自结构化元素对应的属性对话框 */
        genAttributeDialogByElementType(myWriterControl, elementType)
      },
    },
  ]

  if (elementType === DocumentElementType.XTextElement) {
    // 普通文档
    options.push({
      label: '插入片段',
      exec: () => {
        consola.info('插入片段')
        myWriterControl.InsertXmlString(fragment)
      },
    })
  }

  options.push(...baseOptions, ...FieldElementOptions)
  options = insertBetween(options, splitLine)
  return options
}

/** 生成菜单 */
export function ContextMenu(
  options: TMenuOption[],
  menuObj: IMenuSetting,
  rootElement: EMRElement,
) {
  if (options != null && Array.isArray(options)) {
    if (menuObj) {
      //获取到包裹元素
      let pageContainer = rootElement.querySelector('[dctype=page-container]') as HTMLElement
      //判断是否存在dcContextMenu的元素
      let hasContextMenu = pageContainer.querySelector(DC_CONTEXT_MENU_ID_SELECTOR) as HTMLElement
      if (!hasContextMenu) {
        let meunDiv = document.createElement('div')
        meunDiv.setAttribute('id', DC_CONTEXT_MENU_ID)
        pageContainer.appendChild(meunDiv)
        meunDiv.innerHTML = `<div class="dcMenu-line"></div>`
        hasContextMenu = meunDiv
        //判断是否有css
        let dcHead = document.head
        //判断是否存在对应的css
        let hasContextMenuCss = dcHead.querySelector(`#${CONTEXT_MENU_CSS_ID}`)
        if (!hasContextMenuCss) {
          let newCssString = `
        #dcContextMenu{
            position: absolute;
            margin: 0;
            padding: 2px;
            border-width: 1px;
            border-style: solid;
            background-color: #fafafa;
            border-color: #ddd;
            color: #444;
            box-shadow: rgb(204, 204, 204) 2px 2px 3px;
            width: 144px;
            overflow: hidden;
            /* left: 8px;
            top: 481.672px; */
            z-index: 110008;
            display: none;
        }
        #dcContextMenu > div:hover{
            color: rgb(0, 0, 0);
            border-color: rgb(183,210,255);
            background: rgb(234,242,255);
        }
        #dcContextMenu .dcMenu-line{
            position: absolute;
            left: 26px;
            top: 0;
            height: 100%;
            font-size: 1px;
            border-left: 1px solid #ccc;
            border-right: 1px solid #fff;
        }
        #dcContextMenu .dcMenu-item{
            position: relative;
            white-space: nowrap;
            cursor: pointer;
            margin: 0px;
            padding: 0px;
            overflow: hidden;
            border-width: 1px;
            border-style: solid;
            border-color: transparent;
        }
        #dcContextMenu .dcMenu-item .dcMenu-text{
            float: left;
            padding-left: 28px;
            font-size: 12px;
        }
        #dcContextMenu .dcMenu-icon{
            position: absolute;
            width: 16px;
            height: 16px;
            left: 2px;
            top: 50%;
            margin-top: -8px;
        }
        #dcContextMenu .dcMenu-sep{
            margin: 3px 0px 3px 25px;
            font-size: 1px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #fff;
        }`
          let ContextMenuCss = document.createElement('style')
          ContextMenuCss.setAttribute('id', CONTEXT_MENU_CSS_ID)
          dcHead.appendChild(ContextMenuCss)
          ContextMenuCss.innerHTML = newCssString
          //页面滚动
          pageContainer.addEventListener('scroll', function () {
            let hasContextMenu = rootElement.querySelector(
              DC_CONTEXT_MENU_ID_SELECTOR,
            ) as HTMLElement
            if (hasContextMenu) {
              hasContextMenu.remove()
            }
          })
          //鼠标按下
          document.body.addEventListener('mousedown', function () {
            let hasContextMenu = rootElement.querySelector(
              DC_CONTEXT_MENU_ID_SELECTOR,
            ) as HTMLElement
            if (hasContextMenu) {
              hasContextMenu.remove()
            }
          })
          //丢失焦点
          window.addEventListener('blur', function () {
            let hasContextMenu = rootElement.querySelector(
              DC_CONTEXT_MENU_ID_SELECTOR,
            ) as HTMLElement
            if (hasContextMenu) {
              hasContextMenu.remove()
            }
          })
        }
      } else {
        //存在时，清空所有item和sep的元素
        let allItem = hasContextMenu.querySelectorAll('.dcMenu-item, .dcMenu-sep')
        for (let i = 0; i < allItem.length; i++) {
          allItem[i].remove()
        }
      }
      let containerHeight = 0
      if (Array.isArray(options) && options.length > 0) {
        //根据options显示元素
        for (let option = 0; option < options.length; option++) {
          if (typeof options[option] === 'object') {
            let itemEle = document.createElement('div')
            itemEle.setAttribute('class', 'dcMenu-item')
            itemEle.style.cssText = 'height: 30px;'
            hasContextMenu.appendChild(itemEle)
            const optionObj = options[option] as TMenuOptionSetting
            itemEle.innerHTML = `
                    <div class="dcMenu-text" style="height: 30px; line-height: 30px;">${optionObj.label}</div>
                    <div class="dcMenu-icon"></div>
                `
            // 修复：setAttribute 需要字符串类型
            itemEle.setAttribute('menuIndex', option.toString())
            itemEle.addEventListener('mousedown', function (e) {
              e.stopPropagation()
              e.preventDefault()
            })
            itemEle.addEventListener('click', function () {
              const indStr = itemEle.getAttribute('menuIndex') as string
                ; (options[Number(indStr)] as TMenuOptionSetting).exec()
              //将hasContextMenu元素隐藏
              hasContextMenu.remove()
            })
            containerHeight += 30
          } else if (typeof options[option] === 'string' && options[option] === '-') {
            let sepEle = document.createElement('div')
            sepEle.setAttribute('class', 'dcMenu-sep')
            hasContextMenu.appendChild(sepEle)
            containerHeight += 8
          }
        }
        let pageElement = menuObj.PageElement
        containerHeight = containerHeight ? containerHeight + 6 : 0
        hasContextMenu.style.height = containerHeight + 'px'
        hasContextMenu.style.left = pageElement.offsetLeft + menuObj.X + 'px'
        hasContextMenu.style.top = pageElement.offsetTop + menuObj.Y + 'px'
        hasContextMenu.style.display = 'block'
      }
    }
  }
}
