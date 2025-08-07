import type {
  ContextMenuParams,
  DocumentFormat,
  WriterEventArgs,
  IMenuSetting,
  TMenuOption,
  TMenuOptionSetting,
} from '../types/emr'

class EMREditor {
  /** DCWriter 控件对象 */
  clt: EMRElement | null = null

  constructor(ctl: EMRElement | null) {
    this.clt = ctl
  }

  /** 编辑器初始化成功事件 */
  dcwriterInitSuccessEvent(callback: (ctl: EMRElement) => void) {
    window.WriterControl_OnLoad = (rootElement: EMRElement) => {
      if (!rootElement) {
        console.warn('WriterControl_OnLoad: rootElement 不存在')
        return
      }
      console.log('WriterControl_OnLoad', rootElement.id + '编辑器加载完成')
      /** 设置内置工具栏 */
      rootElement.SetToolBarVisibility(true)
      callback(rootElement)
    }
  }

  /** 文档加载完成事件 */
  documentLoadEvent(rootElement: EMRElement) {
    rootElement.DocumentLoad = function (eventSender: EMRElement, args: WriterEventArgs) {
      console.log(eventSender, args, '文件加载完毕')
      // eventSender.RefreshDocument()
      // eventSender.RefreshInnerView()
    }
  }

  /** 内容改变事件 */
  documentContentChangeEvent(callback?: (ctl: EMRElement) => void) {
    window.WriterControl_DocumentContentChanged = (
      rootElement: EMRElement,
      args: { WriterControl: EMRElement },
    ) => {
      if (callback) {
        callback(rootElement)
      }
    }
  }

  /** 右键菜单事件 */
  eventShowContextMenuEvent(rootElement: EMRElement) {
    rootElement.EventShowContextMenu = function (...[eventSender, args]: ContextMenuParams) {
      let myWriterControl = eventSender
      const typename = args.ElementType
      if (typename) {
        let options: TMenuOption[] = [
          {
            label: '撤销',
            exec: () => {
              myWriterControl.DCExecuteCommand('Undo', false, null)
            },
          },
          '-',
        ]
        if (typename === 'XTextTableCellElement') {
          //单元格
          let options2 = [
            '-',
            {
              label: '删除表格行',
              exec: () => {
                myWriterControl.DCExecuteCommand('Table_DeleteRow', false, null)
              },
            },
          ]
          options = options.concat(options2)
        } else {
        }
        ContextMenu(options, args, eventSender)
      }
    }

    function ContextMenu(options: TMenuOption[], menuObj: IMenuSetting, rootElement: EMRElement) {
      if (options != null && Array.isArray(options)) {
        if (menuObj) {
          //获取到包裹元素
          let pageContainer = rootElement.querySelector('[dctype=page-container]') as HTMLElement
          //判断是否存在dcContextMenu的元素
          let hasContextMenu = pageContainer.querySelector('#dcContextMenu') as HTMLElement
          if (!hasContextMenu) {
            let meunDiv = document.createElement('div')
            meunDiv.setAttribute('id', 'dcContextMenu')
            pageContainer.appendChild(meunDiv)
            meunDiv.innerHTML = `<div class="dcMenu-line"></div>`
            hasContextMenu = meunDiv
            //判断是否有css
            let dcHead = document.head
            //判断是否存在对应的css
            let hasContextMenuCss = dcHead.querySelector('#ContextMenuCss')
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
              ContextMenuCss.setAttribute('id', 'ContextMenuCss')
              dcHead.appendChild(ContextMenuCss)
              ContextMenuCss.innerHTML = newCssString
              //页面滚动
              pageContainer.addEventListener('scroll', function () {
                let hasContextMenu = rootElement.querySelector('#dcContextMenu') as HTMLElement
                if (hasContextMenu) {
                  hasContextMenu.remove()
                }
              })
              //鼠标按下
              document.body.addEventListener('mousedown', function () {
                let hasContextMenu = rootElement.querySelector('#dcContextMenu') as HTMLElement
                if (hasContextMenu) {
                  hasContextMenu.remove()
                }
              })
              //丢失焦点
              window.addEventListener('blur', function () {
                let hasContextMenu = rootElement.querySelector('#dcContextMenu') as HTMLElement
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
                  ;(options[Number(indStr)] as TMenuOptionSetting).exec()
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
  }

  /** 加载指定类型的病历模板文档 */
  loadDocument(
    ...args: [
      strData: string,
      strFormat?: DocumentFormat,
      specifyLoadPart?: string,
      errorCallback?: () => void,
    ]
  ) {
    console.log('文档加载中')
    this.clt?.LoadDocumentFromString(...args)
  }

  /** 初始化编辑器 */
  initDCWriter() {
    const ctl = this.clt
    if (ctl) {
      // 启动时就已经加载好js，直接调用window.CreateWriterControlForWASM，不然使用EventBeforeCreateControl事件等待js加载完成
      if (typeof window.CreateWriterControlForWASM != 'function') {
        ctl.EventBeforeCreateControl = function (rootElement: EMRElement) {
          if (!rootElement.AboutControl) {
            window.CreateWriterControlForWASM(rootElement)
          }
        }
      } else {
        if (!ctl.AboutControl) {
          window.CreateWriterControlForWASM(ctl)
        }
      }
    }
  }

  /** 设置内置工具栏 */
  setInnerToolBar() {
    this.clt?.SetToolBarVisibility(true)
  }

  /** 获取页面设置信息 */
  getPageSetting() {
    return this.clt?.GetDocumentPageSettings()
  }

  /** *保存返回指定类型的字符串病历文档 */
  SaveDocumentToString() {
    return this.clt?.SaveDocumentToString()
  }

  /**  */
  getCommandNameList() {
    return this.clt?.GetCommandNameList()
  }
}

export default EMREditor
