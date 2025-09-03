import mitt from 'mitt'

/** 保存为导航节点 */
export const EVENT_SAVE_AS_NAVIGATION = 'saveAsNavigation'
const emitter = mitt()

// listen to an event
emitter.on('foo', e => console.log('foo', e))

// listen to all events
emitter.on('*', (type, e) => console.log(type, e))

// fire an event
emitter.emit('foo', { a: 'b' })

// clearing all events
emitter.all.clear()


export default emitter