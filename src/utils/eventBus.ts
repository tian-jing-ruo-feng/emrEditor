import mitt from 'mitt'

export const EVENT_SAVE_AS_NAVIGATION = 'saveAsNavigation'

/** 保存为导航节点 */
const emitter = mitt()

export default emitter