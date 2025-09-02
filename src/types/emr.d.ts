import type { IFielddAttributeDialog } from './fieldAttrituteDialog'
import type { DocumentElementType, EventObject } from './fieldElement'
import type { DocumentPageSettings } from './pageSetting'
import type { MedicalExpressionType, MedicalExpressionData } from './medical'
import type { dataSourceItem } from './dataSource'
import type { UserDetail, UserRequestParams } from './user'
import type { SubDocOptions, InsertSubDocumentsParma } from './subDoc'
import type { SelectionInfo } from './selectionInfo'
import type { CommentInfo, CommentParams } from './comment'

// 文档格式
export type DocumentFormat = 'xml' | 'json' | 'rtf' | 'html' | 'text'

export type WriterEventArgs = {
  ElementHashCode: number
  ElementID: string | number | null
  ElementName: string | null
  ElementType: string | null
  WriterControl: EMRElement
}


// 扩展 HTMLElement 类型，添加编辑器相关方法
declare global {
  interface EMRElement extends HTMLElement, IFielddAttributeDialog {
    /** 是否只读 */
    Readonly: boolean;
    /** 选中内容数据信息 */
    Selection: SelectionInfo
    /** 选中文本 */
    SelectedText: string
    /** 选中文本长度 */
    SelectionLength: number
    /** 获取选择内容的开始位置信息 */
    SelectionStartPosition: number
    /** *判断是否处于打印预览模式 */
    IsPrintPreview(): boolean
    /** 获取当前单元格的引用对象
     * @returns {object} 单元格引用对象
     */
    CurrentTableCell(): object,
    /** 获取病程记录的编号 */
    CurrentSubDoc(): string
    /** 保存片段 */
    DocumentSelection(format: 'XML' | 'TEXT' | 'HTML' | 'JSON'): string
    /** 执行编辑器命令 */
    DCExecuteCommand(command: string, value: unknown, param: unknown): void

    /** 设置工具栏可见性 */
    SetToolBarVisibility(visible: boolean): boolean

    /** 获取文档页面设置 */
    GetDocumentPageSettings(): DocumentPageSettings

    /** 获取当前视图的视图缩放比率 */
    GetZoomRate(): number

    /** 设置编辑器缩放比率 */
    SetZoomRate(number): boolean

    /** 获取当前光标处批注信息 */
    GetCurrentComment(): CommentInfo

    /** 在当前位置处插入批注（选中内容设置批注） */
    NewComment(json: CommentParams): boolean

    /** 删除当前选中批注信息
     * @param {number} index 指定的批注在所有批注中的序号。从上到下，从0开始。
     */
    DeleteComment(index: number): boolean

    /** 编辑器控制对象信息，存在即代表已创建 */
    AboutControl?: boolean

    /** 编辑器控件创建前事件 */
    EventBeforeCreateControl?: (rootElement: EMRElement) => void

    /** 加载指定类型的病历模板文档 */
    LoadDocumentFromString: (
      strData: string,
      strFormat?: DocumentFormat,
      specifyLoadPart?: string,
      errorCallback?: () => void,
    ) => boolean

    /** 文档加载完成事件 */
    DocumentLoad: (eventSender, args) => void

    /** 页面刷新文档 */
    RefreshDocument(): void

    /** 内部刷新文档 */
    RefreshInnerView(): void

    /** 保存文档 */
    SaveDocumentToString(): void

    /** 获得所有支持的命令名称组成的字符串，各个名称之间用逗号分开 */
    GetCommandNameList(): string

    /** 右键菜单事件 */
    EventShowContextMenu(
      eventSender: EMRElement,
      args: {
        ElementType: DocumentElementType
        PageElement: HTMLCanvasElement
        TypeName: string
        X: number
        Y: number
      },
    ): void

    /** 元素属性对话框点击确定按钮回调函数 */
    EventDialogChangeProperties(ele: unknown): void

    /** 鼠标双击事件 */
    ondocumentdblclick(e: Event): void

    /** 动态下拉列表事件 */
    QueryListItems(sender: EMRElement, eventObject: EventObject): void

    /** 下拉列表搜索事件 */
    EventChangeSearchInputSpellCode(eventObject: EventObject): void

    /** 以json的方式返回文档的数据源绑定的信息 */
    GetDataSourceBindingDescriptionsJSON(): dataSourceItem[]

    /**
     * 获取文档中所有的数据源值
     * @returns 数据源名称字符串列表。各个名称之间用逗号分开
     * */
    GetBindingDataSources(): string

    /**
     * *新方式返回数据源绑定的结构化元素值
     * @param {String | null} parnetid 父容器编号(获取指定容器元素里面数据源名称绑定的内容，为空时，返回全文)
     * @param {String} datasourcename 数据源名称
     * @returns {object}
     * */
    getDataWithDataSources(parnetid: string | null, datasourcename: string): object

    /**
     * *新方式对结构化元素批量赋值
     * @param {null} parnetid 父容器id
     * @param {object} 需要绑定的结构化元素数据源内容
     * @returns {object}
     */
    setDataWithDataSources(parnetid: null, dataObj: object): object

    /** 根据用户登录信息执行用户登录操作 */
    UserLoginByUserLoginInfo(
      parameter: UserRequestParams['parameter'],
      updateUI: UserRequestParams['updateUI'],
    ): void

    /** 自身属性 */
    CurrentUser: UserDetail

    /** 在病程文档后批量追加病程记录文档 */
    AppendSubDocuments(options: SubDocOptions): boolean

    /** 在指定病程后追加多个病程记录 */
    InsertSubDocuments(
      options: InsertSubDocumentsParma['options'],
      afterElement?: InsertSubDocumentsParma['afterElement'],
      isafter?: InsertSubDocumentsParma['isafter'],
    ): boolean

    /**
     * 在指定病程处插入病程元素
     * @param {ID: string; title?: string} option
     * @param {Boolean} insertUp true:在上面插入；false:在下面插入
     */
    InsertSubDocuentAtCurrentPosition(
      option: { ID: string; Title?: string },
      insertUp: boolean,
    ): boolean

    /** 加载病程 */
    LoadSubDocumentFromString(option: {
      FileContentXML: string
      ID?: string
      Usebase64?: boolean
      ShowMaskUI?: boolean
    }): boolean

    /**
     * 插入片段 Xml格式的文档内容
     * @param {String} content
     * @returns boolean 插入是否成功
     */
    InsertXmlString(content: string): boolean
  }
}

// 扩展 Window 接口，添加编辑器加载回调
declare global {
  interface Window {
    /** 编辑器加载完成回调函数 */
    WriterControl_OnLoad: (rootElement: EMRElement) => void
    /** 创建编辑器控件的函数 */
    CreateWriterControlForWASM: (rootElement: EMRElement) => void
    /** 内容改变事件 */
    WriterControl_DocumentContentChanged: (
      rootElement: EMRElement,
      args: { WriterControl: EMRElement },
    ) => void
  }
}
