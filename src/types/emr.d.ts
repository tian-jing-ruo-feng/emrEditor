// 装订线位置枚举
export type GutterStyle = 'Top' | 'Left' | 'Right'
// 文档格式
export type DocumentFormat = 'xml' | 'json' | 'rtf' | 'html' | 'text'

export type WriterEventArgs = {
  ElementHashCode: number
  ElementID: string | number | null
  ElementName: string | null
  ElementTypeName: string | null
  WriterControl: EMRElement
}

// 文档页面设置接口
export interface DocumentPageSettings {
  /** 纸张名称 - 页面纸张名称，常用的纸张名称在下面的表中有描述 */
  PaperKind: string

  /** 纸张高度 - 在PaperKind设置成Custom，用户可以修改，否则不允许修改（单位：1/100英寸） */
  PaperHeight: number

  /** 纸张宽度 - 在PaperKind设置成Custom，用户可以修改，否则不允许修改（单位：1/100英寸） */
  PaperWidth: number

  /** 打印方向 - false:纵向打印、true:横向打印 */
  Landscape: boolean

  /** 左边距 - 文档正文与页面最左边的边距（单位：1/100英寸） */
  LeftMargin: number

  /** 右边距 - 文档正文与页面最右边的边距（单位：1/100英寸） */
  RightMargin: number

  /** 上边距 - 文档正文与页面最上边的边距（单位：1/100英寸） */
  TopMargin: number

  /** 下边距 - 文档正文与页面最下边的边距（单位：1/100英寸） */
  BottomMargin: number

  /** 页眉位置 - 页眉处与页面最上边的边距（单位：1/100英寸） */
  HeaderDistance: number

  /** 页脚位置 - 页脚处与页面最下边的边距（单位：1/100英寸） */
  FooterDistance: number

  /** 显示装订线 - false:不显示、true:显示 */
  ShowGutterLine: boolean

  /** 装订线位置 - 装订线显示的位置与页面的距离（单位：厘米） */
  GutterPosition: number

  /** 双面打印切换装订线 - false:不切换、true:切换 */
  SwapGutter: boolean

  /** 装订线位置 - Top:上方、Left:左方、Right:右方 */
  GutterStyle: GutterStyle

  /** 左边距 - 文档正文与页面最左边的边距（单位：厘米） */
  LeftMarginInCM: number

  /** 右边距 - 文档正文与页面最右边的边距（单位：厘米） */
  RightMarginInCM: number

  /** 上边距 - 文档正文与页面最上边的边距（单位：厘米） */
  TopMarginInCM: number

  /** 下边距 - 文档正文与页面最下边的边距（单位：厘米） */
  BottomMarginInCM: number

  /** 纸张高度 - 在PaperKind设置成Custom，用户可以修改，否则不允许修改（单位：厘米） */
  PaperHeightInCM: number

  /** 纸张宽度 - 在PaperKind设置成Custom，用户可以修改，否则不允许修改（单位：厘米） */
  PaperWidthInCM: number

  /** 首页页眉页脚不同 - false:不启用、true:启用 */
  HeaderFooterDifferentFirstPage: boolean

  /** 隐藏页码 - "1,3"值表示单独隐藏文档中的第一页和第三页页码值 */
  PageIndexsForHideHeaderFooter: string

  /** 打印背景图片的页码 - "1,3"值表示单独隐藏文档中的第一页和第三页页码值 */
  PageIndexsForPrintBackgroundImage: string

  /** 显示背景图片的页码 - "1,3"值表示单独隐藏文档中的第一页和第三页页码值 */
  PageIndexsForShowBackgroundImage: string
}

// 扩展 HTMLElement 类型，添加编辑器相关方法
declare global {
  interface EMRElement extends HTMLElement {
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
