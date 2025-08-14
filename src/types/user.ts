/**
 * 用户信息参数
 */
export interface UserParameter {
  /** 字符串类型的用户编号 */
  ID: string
  /** 字符串类型的用户名称 */
  Name: string
  /** 用户等级。数字越大,权限越大。默认情况下,高权限用户可以删除低权限用户输入的内容,而低权限的用户不允许删除高权限用户输入的内容。 */
  PermissionLevel: number
  /** 客户端电脑名称 */
  ClientName?: string
  /** 其他说明 */
  Description?: string
}

/**
 * 用户信息请求参数
 */
export interface UserRequestParams {
  /** 用户信息,参数如下 */
  parameter: UserParameter
  /** 是否刷新文档 */
  updateUI: boolean
}

/**
 * 用户详细信息接口
 */
export interface UserDetail {
  /** 索引位置 */
  Index: number
  /** 用户ID */
  ID: string
  /** 用户姓名 */
  Name: string
  /** 用户姓名2（可为空） */
  Name2: string | null
  /** 保存时间字符串 */
  SaveTimeString: string
  /** 保存时间 */
  SavedTime: string
  /** 登录时间 */
  _LoginTime: string
  /** 显示保存时间 */
  DisplaySavedTime: string
  /** 权限等级 */
  PermissionLevel: number
  /** 描述信息 */
  Description: string
  /** 客户端名称 */
  ClientName: string
  /** 标签（可为空） */
  Tag: string | null
  /** 选中值 */
  CheckedValue: boolean
  /** 是否为空保存时间 */
  IsEmptySaveTime: boolean
}


