export interface IFragment {
  /** 片段名称 */
  name: string;
  /** 片段类型 */
  type: 'XML' | 'TEXT' | 'HTML' | 'JSON';
  /** 片段内容 */
  content: string
}