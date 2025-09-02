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
  /** 属性选项 */
  const propertyOption = {
    label: '属性',
    exec: () => {
      myWriterControl.DCExecuteCommand('ElementProperties', true, null);
    },
  }
  /** 基础选项 */
  const baseOptions = [
    {
      label: '撤销(Ctrl+Z)',
      exec: () => {
        console.log('撤销(Ctrl+Z)')
        myWriterControl.DCExecuteCommand('Undo', false, null);
      },
    },
    {
      label: '重做(Ctrl+Y)',
      exec: () => {
        console.log('重做(Ctrl+Y)')
        myWriterControl.DCExecuteCommand('Redo', false, null);
      },
    },
    {
      label: '复制(Ctrl+C)',
      exec: () => {
        console.log('复制(Ctrl+C)')
        myWriterControl.DCExecuteCommand('Copy', false, null);
      },
    },
    {
      label: '粘贴(Ctrl+V)',
      exec: () => {
        myWriterControl.DCExecuteCommand('Paste', false, null);
      },
    },
    {
      label: '剪切(Ctrl+X)',
      exec: () => {
        myWriterControl.DCExecuteCommand('Cut', false, null);
      },
    },
    {
      label: '纯文本复制',
      exec: () => {
        myWriterControl.DCExecuteCommand('CopyAsText', false, null);
      },
    },
    {
      label: '纯文本粘贴',
      exec: () => {
        console.log('纯文本粘贴')
        myWriterControl.DCExecuteCommand('PasteAsText', false, null);
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

  /** 普通文档 */
  if (elementType === DocumentElementType.XTextElement) {
    const insertOptions =
    {
      label: '插入',
      exec: () => { },
      subMenu: [
        {
          label: '插入片段',
          exec: () => {
            consola.info('插入片段')
            myWriterControl.InsertXmlString(fragment)
          },
        },
        {
          label: '插入注释',
          exec: () => {
            consola.info('插入注释')
            const { Name: author } = myWriterControl.CurrentUser || {}
            const opts = {
              BackColor: '#cccccc',
              ForeColor: "#FF0000",//字体颜色
              Superscript: false, //顺序标记是否显示 (20220324)  
              Text: "",
              author,
            }
            myWriterControl.DCExecuteCommand('insertComment', true, opts)
          },
        }
      ]
    }
    options.push(insertOptions)
  }

  /** 注释文本 */
  if (elementType === DocumentElementType.DocumentComment) {
    options.push({
      label: '删除注释',
      exec: () => {
        consola.info('删除注释')
        const currentcomment = myWriterControl.GetCurrentComment()
        if (currentcomment) {
          const { IndexByList: index } = currentcomment
          myWriterControl.DeleteComment(index)
        }

      }
    })
  }

  /** 保存为片段 */
  if (myWriterControl.SelectionLength) {
    options.push({
      label: '保存为片段',
      exec: () => {
        /** 保存为xml格式 */
        const res = myWriterControl.DocumentSelection('XML')
        consola.info('保存片段结果\n', res)
      }
    }, {
      label: '保存为导航节点',
      exec: () => {
        myWriterControl.ExecuteCommand("TitleLevel", false, 0);
      }
    })
  }

  if (elementType === DocumentElementType.XTextTableCellElement) {//单元格
    const tableOptions = [
      {
        label: '表格属性',
        exec: () => {
          // //非只读模式下可以打开属性对话框
          // if (myWriterControl.Readonly === false) {
          myWriterControl.DCExecuteCommand("tableproperties", true, null);
          // }

        },
      },
      {
        label: '表格单元格',
        exec: () => { },
        subMenu: [
          {
            label: '单元格属性',
            exec: () => {
              // //非只读模式下可以打开属性对话框
              // if (myWriterControl.Readonly === false) {
              myWriterControl.DCExecuteCommand("tablecellproperties", true, null);
              // }
            },
          },
          splitLine,
          {
            label: '合并单元格',
            exec: () => {
              if (myWriterControl.Readonly === false) {
                myWriterControl.DCExecuteCommand("Table_MergeCell", false, null);
              };
            },
          },
          {
            label: '拆分单元格',
            exec: () => {
              if (myWriterControl.Readonly === false) {
                myWriterControl.DCExecuteCommand("Table_SplitCellExt", true, null);
              };
            },
          },
          '-',
          {
            label: '设置单元格网格线',
            exec: () => {
              // //非只读模式下可以打开属性对话框
              // if (myWriterControl.Readonly === false) {
              console.log('设置单元格网格线');
              const cell = myWriterControl.CurrentTableCell();
              if (cell != null) {
                const settings = {
                  AlignToGridLine: "True", //文本行对齐到网格线
                  ColorValue: "#000000",  //网格线颜色
                  GridSpanInCM: 1,  //网格线之间的宽度
                  LineStyle: "Solid", //网格线样式
                  LineWidth: 1,  //网格线宽度
                  Printable: "True", //打印预览是否显示
                  Visible: "True", //网格是否显示
                };
                myWriterControl.cellGridlineDialog(settings, myWriterControl);
              }
              // };

            },
          },
          {
            label: '设置单元格斜分线',
            exec: () => {
              // //非只读模式下可以打开属性对话框
              // if (myWriterControl.Readonly === false) {
              console.log('设置单元格斜分线');
              const cell = myWriterControl.CurrentTableCell();
              if (cell != null) {
                myWriterControl.cellDiagonalLineDialog(cell, myWriterControl);
              };
              // }
            },
          },
          {
            label: '设置单元格边框',
            exec: () => {
              // //非只读模式下可以打开属性对话框
              // if (myWriterControl.Readonly === false) {
              myWriterControl.borderShadingcellDialog();
              // };
            },
          },
        ]
      },
      {
        label: '表格行列',
        exec: () => { },
        subMenu: [
          {
            label: '表格行属性',
            exec: () => {
              // //非只读模式下可以打开属性对话框
              // if (myWriterControl.Readonly === false) {
              myWriterControl.DCExecuteCommand("tablerowproperties", true, null);
              // }
            },
          },
          splitLine,
          {
            label: '删除表格行',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_DeleteRow", false, null);
            },
          },
          {
            label: '删除表格列',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_DeleteColumn", false, null);
            },
          },
          {
            label: '在上面插入行',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_InsertRowUp", false, null);
            },
          },
          {
            label: '在下面插入行',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_InsertRowDown", false, null);
            },
          },
          {
            label: '在左侧插入列',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_InsertColumnLeft", false, null);
            },
          },
          {
            label: '在右侧插入列',
            exec: () => {
              myWriterControl.DCExecuteCommand("Table_InsertColumnRight", false, null);
            },
          },
        ]
      },

      {
        label: '设置表格边框',
        exec: () => {
          // //非只读模式下可以打开属性对话框
          // if (myWriterControl.Readonly === false) {
          myWriterControl.bordersShadingDialog();
          // };
        },
      },

    ];

    options.push(...tableOptions);
  }

  options.unshift(...baseOptions)
  options.push(propertyOption)
  /** 测试命令 */
  // options.push({
  //   label: '获取标题列表',
  //   exec: () => {
  //     myWriterControl.ExecuteCommand("TitleLevel", false, 0);
  //     const result = myWriterControl.GetNavigateNodesString()
  //     console.log(result, '<<<<<< GetNavigateNodesString')
  //   }
  // })
  options = insertBetween(options, splitLine)
  return options
}

/** 生成菜单 */
export function ContextMenu(options: TMenuOption[], menuObj: IMenuSetting, rootElement: EMRElement) {
  if (options != null && Array.isArray(options)) {
    if (menuObj) {
      //获取到包裹元素
      let pageContainer = rootElement.querySelector('[dctype=page-container]')!
      //判断是否为打印预览
      if (rootElement.IsPrintPreview()) {
        pageContainer = rootElement.querySelector('[dctype=page-printpreview]')!
      }
      //判断是否存在dcContextMenu的元素
      let hasContextMenu = pageContainer!.querySelector(DC_CONTEXT_MENU_ID_SELECTOR)! as HTMLElement
      if (!hasContextMenu) {
        const meunDiv = document.createElement('div')
        meunDiv.setAttribute('id', 'dcContextMenu')
        pageContainer.appendChild(meunDiv)
        meunDiv.innerHTML = `<div class="dcMenu-line"></div>`
        hasContextMenu = meunDiv
        //判断是否有css
        const dcHead = document.head
        //判断是否存在对应的css
        const hasContextMenuCss = dcHead.querySelector(`#${CONTEXT_MENU_CSS_ID}`)
        if (!hasContextMenuCss) {
          const newCssString = `
                    ${DC_CONTEXT_MENU_ID_SELECTOR}{
                        position: absolute;
                        margin: 0;
                        padding: 2px;
                        border-width: 1px;
                        border-style: solid;
                        background-color: #fafafa;
                        border-color: #ddd;
                        color: #444;
                        box-shadow: rgb(204, 204, 204) 2px 2px 3px;
                        min-width: 144px;
                        /* left: 8px;
                        top: 481.672px; 
                        overflow: hidden;*/
                        z-index: 110008;
                        display: none;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} div.dcMenu-item:hover{
                        color: rgb(0, 0, 0);
                        border-color: rgb(183,210,255);
                        background: rgb(234,242,255);
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-line{
                        position: absolute;
                        left: 26px;
                        top: 0;
                        height: 100%;
                        font-size: 1px;
                        border-left: 1px solid #ccc;
                        border-right: 1px solid #fff;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-item{
                        position: relative;
                        white-space: nowrap;
                        cursor: pointer;
                        margin: 0px;
                        padding: 0px;
                        font-size: 12px;
                        overflow: hidden;
                        border-width: 1px;
                        border-style: solid;
                        border-color: transparent;
                        box-sizing: content-box;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-item .dcMenu-text{
                        float: left;
                        padding-left: 28px;
                        padding-right: 20px;
                        font-size: 12px;
                    }

                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-icon{
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        left: 2px;
                        top: 50%;
                        margin-top: -8px;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-sep{
                        margin: 3px 0px 3px 25px;
                        font-size: 1px;
                        border-top: 1px solid #ccc;
                        border-bottom: 1px solid #fff;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .secondaryMenu{
                        position: absolute;
                        z-index: 110011;
                        margin: 0;
                        padding: 2px;
                        border-width: 1px;
                        border-style: solid;
                        border-color: #ddd;
                        min-width: 144px;
                        overflow: hidden;
                        display: none;
                        background-color: #fafafa;
                    }
                    ${DC_CONTEXT_MENU_ID_SELECTOR} .dcMenu-rightarrow {
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        right: 0;
                        top: 50%;
                        margin-top: -8px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAZ0lEQVR42u2VMQ7AMAgD+f9XeYBHd+mA2IqrJFJ8EkMGrNiCJMIYY86Eh2otDYA7dNgq2/kLEEzwhxDGGrURQxGlN97gUUrxQCU9DM33ALjYQA0vlRGCcPEUjGxdgasfQX+DxphreAA2tk8BzQnbmgAAAABJRU5ErkJggg==) no-repeat -32px center;
                    }`
          const ContextMenuCss = document.createElement('style')
          ContextMenuCss.setAttribute('id', CONTEXT_MENU_CSS_ID)
          dcHead.appendChild(ContextMenuCss)
          ContextMenuCss.innerHTML = newCssString

          //页面滚动
          pageContainer.addEventListener('scroll', function () {
            const hasContextMenu = rootElement.querySelector(DC_CONTEXT_MENU_ID_SELECTOR)
            if (hasContextMenu) {
              hasContextMenu.remove()
            }
          })
          //丢失焦点
          window.addEventListener('blur', function () {
            const hasContextMenu = rootElement.querySelector(DC_CONTEXT_MENU_ID_SELECTOR)
            if (hasContextMenu) {
              hasContextMenu.remove()
            }
          })
        }
      } else {
        //存在时，清空所有item和sep的元素
        const allItem = hasContextMenu.querySelectorAll('.dcMenu-item, .dcMenu-sep')! as NodeListOf<HTMLElement>
        for (let i = 0; i < allItem.length; i++) {
          allItem[i].remove()
        }
      }
      var containerHeight = 0
      if (Array.isArray(options) && options.length > 0) {
        //根据options显示元素
        for (let option = 0; option < options.length; option++) {
          if (typeof options[option] == 'object') {
            let thisItem = insertItem(options[option], hasContextMenu, true)!
            //判断是否存在subMenu，如果需要更多可以使用递归调用
            const subMenu = (options[option] as TMenuOptionSetting).subMenu
            if (subMenu?.length) {
              let secondaryMenu = document.createElement('div')
              secondaryMenu.setAttribute('class', 'secondaryMenu')
              secondaryMenu.innerHTML = `<div class="dcMenu-line"></div>`
              hasContextMenu.appendChild(secondaryMenu)
              for (let meun = 0; meun < subMenu.length; meun++) {
                insertItem(subMenu[meun], secondaryMenu, false)
              }
              const rightItem = document.createElement('div')
              rightItem.setAttribute('class', 'dcMenu-rightarrow')
              thisItem.appendChild(rightItem)
              //添加事件
              thisItem.addEventListener('mouseenter', function (e) {
                //找到下一个子元素
                const target = e.target! as HTMLElement
                const targetEle = target.nextElementSibling! as HTMLElement
                targetEle.style.top = target.offsetTop + 'px'
                targetEle.style.left = target.offsetLeft + target.offsetWidth + 'px'
                targetEle.style.display = 'block'
              })
              thisItem.addEventListener('mouseleave', function (e) {
                const target = e.target! as HTMLElement
                const targetEle = target.nextElementSibling! as HTMLElement
                targetEle.style.display = 'none'
              })
              secondaryMenu.addEventListener('mouseenter', function (e) {
                const target = e.target! as HTMLElement
                const targetEle = target.previousElementSibling! as HTMLElement
                target.style.top = targetEle.offsetTop + 'px'
                target.style.left = targetEle.offsetLeft + targetEle.offsetWidth + 'px'
                target.style.display = 'block'
              })
              secondaryMenu.addEventListener('mouseleave', function (e) {
                const target = e.target! as HTMLElement
                target.style.display = 'none'
              })
            }
          } else if (typeof options[option] == 'string' && options[option] === '-') {
            const sepEle = document.createElement('div')
            sepEle.setAttribute('class', 'dcMenu-sep')
            hasContextMenu.appendChild(sepEle)
            containerHeight += 8
          }
        }
        const pageElement = menuObj.PageElement
        //计算展示的高度
        const minHeight = pageContainer.scrollTop
        const maxHeight = minHeight + pageContainer.clientHeight
        containerHeight = containerHeight ? containerHeight + 6 : 0
        hasContextMenu.style.height = containerHeight + 'px'
        hasContextMenu.style.left = pageElement.offsetLeft + menuObj.X + 'px'
        const cursorTop = pageElement.offsetTop + menuObj.Y
        const menuLastHeight = cursorTop + containerHeight
        //计算最下方的距离是否够显示全
        if (menuLastHeight > maxHeight) {
          //显示不全
          const topHasSpacing = -minHeight
          //判断上边是否存在足够的距离
          if (topHasSpacing > containerHeight) {
            //距离足够
            hasContextMenu.style.top = cursorTop - containerHeight + 'px'
          } else {
            //距离不够
            if (maxHeight - cursorTop > cursorTop - minHeight) {
              //下方的距离大于上方
              hasContextMenu.style.top = cursorTop + 'px'
            } else {
              //上方的距离大于下方
              hasContextMenu.style.top = cursorTop - containerHeight + 'px'
            }
          }
        } else {
          //显示全
          hasContextMenu.style.top = cursorTop + 'px'
        }
        hasContextMenu.style.display = 'block'
      }
    }
  }

  //插入内部的item项
  function insertItem(options: TMenuOption, hasContextMenu: HTMLElement, needHeight: boolean) {
    if (typeof options == 'object') {
      const itemEle = document.createElement('div')
      itemEle.setAttribute('class', 'dcMenu-item')
      itemEle.style.cssText = 'height: 22px;line-height: 22px'
      hasContextMenu.appendChild(itemEle)
      itemEle.innerHTML = `
                <div class="dcMenu-text" style="height: 22px; line-height: 22px;">${options.label}</div>
                <div class="dcMenu-icon"></div>
            `
      itemEle.addEventListener('mousedown', function (e) {
        e.stopPropagation()
        e.preventDefault()
      })
      //itemEle.onclick
      itemEle.addEventListener('click', function () {
        // 右键菜单的点击事件不管是否成功，都需要删除右键菜单【DUWRITER5_0-2943】
        options.exec()
        let ContextMenuParentNode
        if (hasContextMenu.className == 'secondaryMenu') {
          // 二级菜单需要删除一级菜单
          ContextMenuParentNode = hasContextMenu.parentNode
        }
        hasContextMenu.remove()
        if (ContextMenuParentNode) {
          (ContextMenuParentNode as unknown as Element).remove()
        }
      })
      if (needHeight) {
        containerHeight += 24
      }
      return itemEle
    } else if (typeof options == 'string' && options == '-') {
      var sepEle = document.createElement('div')
      sepEle.setAttribute('class', 'dcMenu-sep')
      hasContextMenu.appendChild(sepEle)
      if (needHeight) {
        containerHeight += 24
      }
      return sepEle
    }
  }
}

