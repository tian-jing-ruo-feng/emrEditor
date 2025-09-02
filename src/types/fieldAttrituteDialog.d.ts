export interface IFielddAttributeDialog {
  /** 显示运行中的错误消息对话框。在编辑器运行中如果出现错误消息，系统自动捕获这些消息，并在对话框中显示 */
  ReportExceptionDialog(): void

  /** 显示文档的页面设置对话框 */
  DocumentSettingsDialog(): void

  /** 显示文档的装订线对话框 */
  DocumentGutterDialog(): void

  /** 显示文档的水印设置对话框 */
  WatermarkDialog(): void

  /** 显示当前单选框或复选框的属性对话框 */
  CheckboxAndRadioDialog(): void

  /** 输入域的属性对话框 */
  InputFieldDialog(): void

  /** 显示当前按钮元素的属性对话框 */
  ButtonDialog(): void

  /** 显示当前水平线元素的属性对话框 */
  HorizontalLineDialog(): void

  /** 显示当前页码元素的属性对话框 */
  PageNumberDialog(): void

  /** 显示当前标签元素的属性对话框 */
  LabelDialog(): void

  /** 显示当前二维码元素的属性对话框 */
  QRCodeDialog(): void

  /** 显示当前条形码元素的属性对话框 */
  BarCodeDialog(): void

  /** 显示当前字体格式的属性对话框 */
  FontSelectionDialog(): void

  /** 显示当前胎心图的属性对话框 */
  FetalHeartDialog(json: object = {}): void

  /** 显示当前标尺元素的属性对话框 */
  PainIndexDialog(json: object = {}): void

  /** 显示当前分数公式的属性对话框 */
  FractionDialog(): void

  /** 显示当前月经史公式的属性对话框 */
  FourValuesDialog(json: object = {}): void

  /** 显示当前单选框或复选框的属性对话框 */
  FourValues1Dialog(json: object = {}): void

  /** 显示当前单选框或复选框的属性对话框 */
  FourValues2Dialog(json: object = {}): void

  /** 显示当前单选框或复选框的属性对话框 */
  FourValues3Dialog(json: object = {}): void

  /** 显示当前光定位图公式的属性对话框 */
  LightPositioningDialog(json: object = {}): void

  /** 显示当前瞳孔图的属性对话框 */
  PupilDialog(json: object = {}): void

  /** 显示单元格边框设置对话框 */
  borderShadingcellDialog(): void

  /** 显示拆分当前单元格的对话框 */
  splitCellDialog(): void

  /** 显示当前批注信息对话框 */
  EditDocumentCommentsDialog(opts: unknown, ctl?: EMRElement): void

  /** 显示当前表单模式设置的对话框 */
  formModeDialog(): void

  /** 显示当前选择内容的内容保护设置对话框 */
  contentProtectedModeDialog(): void

  /** 显示当前段落的属性信息对话框 */
  paragraphDialog(): void

  /** 显示当前单元格属性对话框 */
  tableCellDialog(): void

  /** 显示当前表格行的属性对话框 */
  tableRowDialog(): void

  /** 显示当前单元格斜分线的设置对话框 */
  cellGridlineDialog(setting?: unknown, ctl?: EMRElement): void

  /** 显示当前标签元素的属性对话框 */
  cellDiagonalLineDialog(cell?: unknown, ctl?: EMRElement): void

  /** 设置表格边框对话框 */
  bordersShadingDialog(): void

  /** 显示编辑图片的对话框 */
  imgEditDialog(json: object = {}): void

  /** 显示当前图片元素的属性对话框 */
  ImageDialog(): void

  /** 显示用户登录信息设置对话框 */
  loginDialog(): void
}
