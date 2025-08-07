import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { DocumentPageSettings } from '../types/emr'

export const useEmrStore = defineStore(
  'emr',
  () => {
    /** 文档页面设置 */
    const pageSetting = ref<DocumentPageSettings>()
    const commandList = ref<string[]>([])

    const leftsideSetting = computed(() => [
      {
        title: '页面设置',
        name: 'pageSetting',
        content: pageSetting.value,
      },
      {
        title: '工具面板设置',
        name: 'toolbarPanel',
        content: '',
      },
      {
        title: '命令列表',
        name: 'commandList',
        content: commandList.value,
      },
    ])

    /** 设置页面设置 */
    const setPageSetting = (setting: DocumentPageSettings) => {
      pageSetting.value = setting
    }

    /** 设置命令列表 */
    const setCommandList = (commands: string[]) => {
      commandList.value = commands
    }

    return {
      pageSetting,
      leftsideSetting,
      setPageSetting,
      setCommandList,
    }
  },
  {
    persist: true,
  },
)
