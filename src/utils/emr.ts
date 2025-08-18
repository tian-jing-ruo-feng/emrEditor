import type { DocumentFormat, WriterEventArgs } from '../types/emr'
import { DocumentElementType } from './constant'
import type {
  IMenuSetting,
  TMenuOption,
  TMenuOptionSetting,
  ContextMenuParams,
} from '../types/contextMenu'
import { ContextMenu, genContextMenuOptions } from '../composabes/useContextMenu'
import type { UserRequestParams } from '../types/user'
import type { InsertSubDocumentsParma, SubDocOptions } from '../types/subDoc'

class EMREditor {
  /** DCWriter 控件对象 */
  ctl: EMRElement | null = null

  constructor(ctl: EMRElement | null) {
    this.ctl = ctl
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
      console.log(args, 'args context menu')
      const typename = args.ElementType
      console.log(typename, 'typeName')
      if (typename) {
        const options = genContextMenuOptions(myWriterControl, typename)
        ContextMenu(options, args, myWriterControl)
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
    this.ctl?.LoadDocumentFromString(...args)
  }

  /** 初始化编辑器 */
  initDCWriter() {
    const ctl = this.ctl
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
    this.ctl?.SetToolBarVisibility(true)
  }

  /** 获取页面设置信息 */
  getPageSetting() {
    return this.ctl?.GetDocumentPageSettings()
  }

  /** *保存返回指定类型的字符串病历文档 */
  SaveDocumentToString() {
    return this.ctl?.SaveDocumentToString()
  }

  /** 获取命令列表 */
  getCommandNameList() {
    return this.ctl?.GetCommandNameList()
  }

  /**
   * 获取文档中所有的数据源值
   * @returns 数据源名称字符串列表。各个名称之间用逗号分开
   * */
  getBindingDataSources() {
    return this.ctl?.GetBindingDataSources()
  }

  /** 以json的方式返回文档的数据源绑定的信息 */
  getDataSourceBindingDescriptionsJSON() {
    return this.ctl?.GetDataSourceBindingDescriptionsJSON()
  }

  /**
   * *新方式返回数据源绑定的结构化元素值
   * @param {String | null} parnetid 父容器编号(获取指定容器元素里面数据源名称绑定的内容，为空时，返回全文)
   * @param {String} datasourcename 数据源名称
   * */
  getDataWithDataSources(parnetid: string | null, datasourcename: string) {
    return this.ctl?.getDataWithDataSources(parnetid, datasourcename)
  }

  /** 用户登录弹窗 */
  loginDialog() {
    return this.ctl?.loginDialog()
  }

  /** 根据用户登录信息执行用户登录操作
   * @param parameter 用户信息
   * @param updateUI 是否刷新文档
   */
  userLoginByUserLoginInfo(
    parameter: UserRequestParams['parameter'],
    updateUI: UserRequestParams['updateUI'],
  ) {
    return this.ctl?.UserLoginByUserLoginInfo(parameter, updateUI)
  }

  /** **********************病程 Start👇********************** */
  /**
   * 在病程文档后批量追加病程记录文档
   * @param {SubDocOptions} options
   */
  appendSubDocuments(options: SubDocOptions) {
    return this.ctl?.AppendSubDocuments(options)
  }

  /**
   * 在指定病程后追加多个病程记录
   * @param {InsertSubDocumentsParma['options']} options
   */
  insertSubDocuments(
    options: InsertSubDocumentsParma['options'],
    afterElement?: InsertSubDocumentsParma['afterElement'],
    isafter?: InsertSubDocumentsParma['isafter'],
  ) {
    return this.ctl?.InsertSubDocuments(options, afterElement, isafter)
  }

  insertSubDocuentAtCurrentPosition(
    option: {
      ID: string
      Title?: string
    },
    insertUp: boolean,
  ) {
    return this.ctl?.InsertSubDocuentAtCurrentPosition(option, insertUp)
  }

  loadSubDocumentFromString(option: {
    FileContentXML: string
    ID?: string
    Usebase64?: boolean
    ShowMaskUI?: boolean
  }) {
    return this.ctl?.LoadSubDocumentFromString(option)
  }

  /** **********************病程 End  👆********************** */
}

export default EMREditor
