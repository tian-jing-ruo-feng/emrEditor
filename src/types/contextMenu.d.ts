import type { DocumentElementTypeEnum } from './enum'

export interface TMenuOptionSetting {
  label: string
  exec: () => void
}

/** 右键菜单项设置类型 */
export type TMenuOption = string | '-' | TMenuOptionSetting

/** 右键菜单信息 */
export interface IMenuSetting {
  /** 结构化元素类型 */
  ElementType: DocumentElementTypeEnum
  PageElement: HTMLCanvasElement
  /** 快捷菜单名称 */
  TypeName: string
  X: number
  Y: number
}

/** 右键快捷菜单事件参数类型 */
export type ContextMenuParams = [eventSender: EMRElement, args: IMenuSetting]
