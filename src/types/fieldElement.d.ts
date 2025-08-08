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
// export type DocumentElementType =
//   | 'XTextInputFieldElement'
//   | 'XTextRadioBoxElement'
//   | 'XTextCheckBoxElement'
//   | 'XTextLabelElement'
//   | 'XTextNewBarcodeElement'
//   | 'XTextTDBarcodeElement'
//   | 'XTextPageBreakElement'
//   | 'XTextImageElement'
//   | 'XTextButtonElement'
//   | 'XTextHorizontalLineElement'
//   | 'XTextPageInfoElement'
//   | 'XTextMediaElement'
//   | 'XTextNewMedicalExpressionElement'
//   | 'XTextTableCellElement'
