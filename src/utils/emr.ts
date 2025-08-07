import type { DocumentFormat, WriterEventArgs } from '../types/emr'

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
