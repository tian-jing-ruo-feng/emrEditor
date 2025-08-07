import type { IFielddAttributeDialog } from './fieldAttrituteDialog'
import type { DocumentElementType } from './fieldElement'
import type { DocumentPageSettings } from './pageSetting'
import type { MedicalExpressionType, MedicalExpressionData } from './medical'

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
