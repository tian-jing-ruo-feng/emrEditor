/** 数据源类型定义 */
import type { DocumentElementTypeEnum } from './enum'

export interface dataSourceItem {
  /** 自动更新 */
  AutoUpdate: boolean
  /** 绑定路径 */
  BindingPath: string
  /** Text绑定路径 */
  BindingPathForText: string | null
  /** 数据源名称 */
  DataSource: string
  /** 元素的NativeHandle值 */
  Element: number
  /** 元素编号 */
  ElementID: string
  /** 结构化元素类型 */
  ElementType: DocumentElementTypeEnum
  /** 元素的输出格式值   */
  FormatString: string | null
  /** 是否只读 */
  Readonly: boolean
}
