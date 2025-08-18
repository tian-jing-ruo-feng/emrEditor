import { createConsola } from 'consola'

/** TODO: 自定义 consola 实例 */
export const logger = createConsola({
  level: 3,
  formatOptions: {
    columns: 80,
    colors: false,
    compact: false,
    date: false,
  },
})
