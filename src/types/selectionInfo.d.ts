export interface SelectionInfo {
  /** 结束位置的序号 */
  AbsEndIndex: number;
  /** 开始位置的序号 */
  AbsStartIndex: number;
  /** 选择的单元格数组对象 */
  Cells: any[]; // 可根据具体单元格类型进一步定义
  /** 选择内容的长度 */
  Length: number;
  /** 选择内容的类型，一般包含 cell 和 Content */
  Mode: string;
  /** 选择内容的段落数组对象 */
  SelectionParagraphFlags: number;
  /** 开始位置的序号 */
  StartIndex: number;
  /** 选择内容的文本信息 */
  Text: string;
  /** 选择内容的 XML 文本信息 */
  XMLText: string;
}