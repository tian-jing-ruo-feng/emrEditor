import mitt from 'mitt'

/** 保存为导航节点 */
export const EVENT_SAVE_AS_NAVIGATION = 'saveAsNavigation'
/** 保存片段 */
export const EVENT_SAVE_AS_FRAGMENT = 'saveAsFragment'

const emitter = mitt()

export default emitter