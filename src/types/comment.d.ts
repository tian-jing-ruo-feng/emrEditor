/** 注释信息 */
export interface CommentInfo {
  /** 批注的文本信息 */
  Text: string;
  /** 操作者名称 */
  Author: string;
  /** 操作者编号 */
  AuthorID: string;
  /** 批注显示的背景色 */
  BackColor: string;
  /** 批注显示的边框色 */
  BorderColor: string;
  /** 批注显示的前景色 */
  ForeColor: string;
  /** 批注的自定义属性信息 */
  Attributes: object[];
  /** 插入批注先后顺序索引值 */
  Index: number;
  /** 批注索引值用来修改批注和删除批注 */
  IndexByList: number;
}

/** 手动插入注释参数 */
export interface CommentParams {
  /** 批注文本内容 */
  Text?: string;
  /** 操作者名称 */
  Author?: string;
  /** 操作者编号 */
  AuthorID?: string;
  /** 批注显示的背景色 */
  BackColor?: string;
  /** 批注显示的前景色 */
  ForeColor?: string;
  /** 批注显示的边框色 */
  BorderColor?: string;
  /** 同 author，兼容性参数 */
  UserName?: string;
  /** 同 authorid，兼容性参数 */
  UserID?: string;
}