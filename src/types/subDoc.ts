/**
 * DCMriter 结构化文本编辑器病程选项
 */
export interface SubDocOptions {
  /**
   * 是否加载 base64 格式的内容
   * @note 当在打印机内空件中需要加载 base64 数据时，该参数需要严格按照大小写进行传递
   */
  UseBase64?: boolean

  /**
   * 需要加载的病程内容的格式
   */
  fileformat?: boolean

  /**
   * 需要加载的病程内容的数组
   */
  Files: unknown[]

  /**
   * 病程记录对象的数组信息
   */
  Options: SubDocRecord[]
}

/**
 * 病程记录对象
 */
export interface SubDocRecord {
  /**
   * 病程的编号
   */
  ID: string

  /**
   * 病程的指示文本
   */
  ToolTip?: string

  /**
   * 病程的标题
   */
  Title?: string

  /**
   * 是否强制换页
   */
  NewPage?: boolean

  /**
   * 是否只读
   */
  ReadOnly?: boolean

  /**
   * 是否启用权限
   */
  EnablePermission?: boolean

  /**
   * 自定义属性信息
   */
  Attributes?: Record<string, unknown>

  /**
   * 数据源绑定对象
   */
  Parameters?: Record<string, unknown>

  /**
   * 绑定的 XML 信息
   */
  DataBindingXML?: string

  /**
   * 标题层级
   */
  TitleLevel?: number

  /**
   * 当前端设置保存病程页面页脚的时候，将页面页脚字符串存在病程的自定义属性内
   */
  loadoriginheaderfooter?: boolean

  /**
   * 设置子文档内的表格列表进行缩放适应主文档宽度
   */
  autofittablewidth?: boolean

  /**
   * 自定义的样式
   */
  CSSStyle?: string

  /** 表示将插入的位置 */
  afterElement?: boolean
}

export interface InsertSubDocumentsParma {
  /** 病程选项 */
  options: SubDocOptions
  /** 引用对象，为空表示在文档的最后追加,一般可使用GetElementByIdExt的返回值 */
  afterElement?: object
  /** 控制在指定病程前面还是后面进行插入病程，默认值为true，或者不传第三个参数，在指定病程后面进行插入，该参数设置成false,在指定病程前面进行插入   */
  isafter?: boolean
}
