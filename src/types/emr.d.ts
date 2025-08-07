// 装订线位置枚举
export type GutterStyle = 'Top' | 'Left' | 'Right'
// 文档格式
export type DocumentFormat = 'xml' | 'json' | 'rtf' | 'html' | 'text'

export interface TMenuOptionSetting {
  label: string
  exec: () => void
}

/** 右键菜单项设置类型 */
export type TMenuOption = string | '-' | TMenuOptionSetting

/** 右键菜单信息 */
export interface IMenuSetting {
  /** 结构化元素类型 */
  ElementType: DocumentElementType
  PageElement: HTMLCanvasElement
  /** 快捷菜单名称 */
  TypeName: string
  X: number
  Y: number
}

/** 右键快捷菜单事件参数类型 */
export type ContextMenuParams = [eventSender: EMRElement, args: IMenuSetting]
// 输入域样式枚举
export type InnerEditStyle =
  | 'Text' // 普通文本输入
  | 'DropdownList' // 下拉列表
  | 'Time' // 时间输入
  | 'Date' // 日期输入
  | 'DateTime' // 日期时间输入
  | 'DateTimeWithoutSecond' // 不带秒的日期时间输入
  | 'Numeric' // 数值输入

// 基础元素接口
export interface BaseElement {
  /** 元素哈希码 */
  ElementHashCode?: number
  /** 元素ID */
  ElementID?: string | number | null
  /** 元素名称 */
  ElementName?: string | null
  /** 元素类型名称 */
  ElementType?: DocumentElementType
}

// 文本输入域元素
export interface XTextInputFieldElement extends BaseElement {
  ElementType: 'XTextInputFieldElement'
  /** 内部编辑样式 */
  InnerEditStyle: InnerEditStyle
  /** 是否为动态下拉列表 */
  DynamicListItems?: boolean
  /** 是否支持多选（用于下拉列表） */
  MultiSelect?: boolean
  /** 下拉列表项（静态下拉列表使用） */
  DropdownItems?: string[]
  /** 当前值 */
  Value?: string
  /** 占位符文本 */
  Placeholder?: string
  /** 是否只读 */
  ReadOnly?: boolean
  /** 是否必填 */
  Required?: boolean
  /** 数值范围（用于数值输入） */
  MinValue?: number
  MaxValue?: number
  /** 数值精度（用于数值输入） */
  DecimalPlaces?: number
}

// 单选框元素
export interface XTextRadioBoxElement extends BaseElement {
  ElementType: 'XTextRadioBoxElement'
  /** 是否选中 */
  Checked?: boolean
  /** 单选框组名 */
  GroupName?: string
  /** 显示文本 */
  Text?: string
  /** 值 */
  Value?: string
}

// 复选框元素
export interface XTextCheckBoxElement extends BaseElement {
  ElementType: 'XTextCheckBoxElement'
  /** 是否选中 */
  Checked?: boolean
  /** 显示文本 */
  Text?: string
  /** 值 */
  Value?: string
}

// 标签文本元素
export interface XTextLabelElement extends BaseElement {
  ElementType: 'XTextLabelElement'
  /** 标签文本内容 */
  Text?: string
  /** 字体大小 */
  FontSize?: number
  /** 字体名称 */
  FontName?: string
  /** 是否加粗 */
  Bold?: boolean
  /** 是否斜体 */
  Italic?: boolean
  /** 文本颜色 */
  TextColor?: string
}

// 条形码元素
export interface XTextNewBarcodeElement extends BaseElement {
  ElementType: 'XTextNewBarcodeElement'
  /** 条形码内容 */
  BarcodeText?: string
  /** 条形码类型 */
  BarcodeType?: string
  /** 条形码高度 */
  Height?: number
  /** 条形码宽度 */
  Width?: number
  /** 是否显示文本 */
  ShowText?: boolean
}

// 二维码元素
export interface XTextTDBarcodeElement extends BaseElement {
  ElementType: 'XTextTDBarcodeElement'
  /** 二维码内容 */
  QRCodeText?: string
  /** 二维码大小 */
  Size?: number
  /** 错误纠正级别 */
  ErrorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H'
  /** 是否显示文本 */
  ShowText?: boolean
}

// 分页符元素
export interface XTextPageBreakElement extends BaseElement {
  ElementType: 'XTextPageBreakElement'
  /** 分页符类型 */
  BreakType?: 'Page' | 'Column' | 'Section'
}

// 图片元素
export interface XTextImageElement extends BaseElement {
  ElementType: 'XTextImageElement'
  /** 图片源（base64或URL） */
  ImageSource?: string
  /** 图片宽度 */
  Width?: number
  /** 图片高度 */
  Height?: number
  /** 图片标题 */
  Title?: string
  /** 图片描述 */
  AltText?: string
  /** 是否保持宽高比 */
  MaintainAspectRatio?: boolean
}

// 按钮元素
export interface XTextButtonElement extends BaseElement {
  ElementType: 'XTextButtonElement'
  /** 按钮文本 */
  Text?: string
  /** 按钮类型 */
  ButtonType?: 'Button' | 'Submit' | 'Reset'
  /** 是否禁用 */
  Disabled?: boolean
  /** 按钮样式 */
  Style?: string
  /** 点击事件处理函数 */
  OnClick?: (event: Event) => void
}

// 水平线元素
export interface XTextHorizontalLineElement extends BaseElement {
  ElementType: 'XTextHorizontalLineElement'
  /** 线条宽度 */
  Width?: number
  /** 线条高度 */
  Height?: number
  /** 线条颜色 */
  Color?: string
  /** 线条样式 */
  Style?: 'Solid' | 'Dashed' | 'Dotted'
  /** 对齐方式 */
  Alignment?: 'Left' | 'Center' | 'Right'
}

// 页码元素
export interface XTextPageInfoElement extends BaseElement {
  ElementType: 'XTextPageInfoElement'
  /** 页码格式 */
  PageNumberFormat?: string
  /** 是否显示总页数 */
  ShowTotalPages?: boolean
  /** 页码前缀 */
  Prefix?: string
  /** 页码后缀 */
  Suffix?: string
  /** 起始页码 */
  StartPageNumber?: number
}

// 多媒体元素
export interface XTextMediaElement extends BaseElement {
  ElementType: 'XTextMediaElement'
  /** 媒体源URL */
  MediaSource?: string
  /** 媒体类型 */
  MediaType?: 'Audio' | 'Video'
  /** 媒体宽度 */
  Width?: number
  /** 媒体高度 */
  Height?: number
  /** 是否自动播放 */
  AutoPlay?: boolean
  /** 是否循环播放 */
  Loop?: boolean
  /** 是否显示控制器 */
  ShowControls?: boolean
}

// 导入医学类型定义
import type { MedicalExpressionType, MedicalExpressionData } from './medical'

// 医学表达式元素（包含多种医学图表）
export interface XTextNewMedicalExpressionElement extends BaseElement {
  ElementType: 'XTextNewMedicalExpressionElement'
  /** 医学表达式类型 */
  MedicalExpressionType?: MedicalExpressionType
  /** 表达式数据 */
  ExpressionData?: MedicalExpressionData
  /** 图表大小 */
  Size?: number
  /** 图表颜色 */
  Color?: string
  /** 图表标题 */
  Title?: string
  /** 是否可编辑 */
  Editable?: boolean
  /** 自定义样式 */
  CustomStyle?: string
}

/** 表格元素 */
export interface XTextTableCellElement extends BaseElement {
  ElementType: 'XTextTableCellElement'
}

// 所有元素类型的联合类型
export type DocumentElement =
  | XTextInputFieldElement
  | XTextRadioBoxElement
  | XTextCheckBoxElement
  | XTextLabelElement
  | XTextNewBarcodeElement
  | XTextTDBarcodeElement
  | XTextPageBreakElement
  | XTextImageElement
  | XTextButtonElement
  | XTextHorizontalLineElement
  | XTextPageInfoElement
  | XTextMediaElement
  | XTextNewMedicalExpressionElement
  | XTextTableCellElement

/** 文档结构化元素类型联合类型 */
export type DocumentElementType =
  | 'XTextInputFieldElement'
  | 'XTextRadioBoxElement'
  | 'XTextCheckBoxElement'
  | 'XTextLabelElement'
  | 'XTextNewBarcodeElement'
  | 'XTextTDBarcodeElement'
  | 'XTextPageBreakElement'
  | 'XTextImageElement'
  | 'XTextButtonElement'
  | 'XTextHorizontalLineElement'
  | 'XTextPageInfoElement'
  | 'XTextMediaElement'
  | 'XTextNewMedicalExpressionElement'
  | 'XTextTableCellElement'

export type WriterEventArgs = {
  ElementHashCode: number
  ElementID: string | number | null
  ElementName: string | null
  ElementType: string | null
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
