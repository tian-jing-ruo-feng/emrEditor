import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { DocumentPageSettings } from "../types/emr";

export const useEmrStore = defineStore('emr', () => {
  /** 文档页面设置 */
  const pageSetting = ref<DocumentPageSettings>()
  const leftsideSetting = computed(() => [
    {
      title: '页面设置',
      name: 'pageSetting',
      content: pageSetting.value,
    },
    {
      title: '工具面板设置',
      name: 'toolbarPanel',
      content: ''
    }
  ])

  /** 设置页面设置 */
  const setPageSetting = (setting: DocumentPageSettings) => {
    pageSetting.value = setting
  }


  return {
    pageSetting,
    leftsideSetting,
    setPageSetting,
  }
}, {
  persist: true
})