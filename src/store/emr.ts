import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { DocumentPageSettings } from '../types/pageSetting'
import type { dataSourceItem } from '../types/dataSource'
import type { IMenuSetting } from '../types/contextMenu'
import EMREditor from '../utils/emr'
import type { IFragment } from '../types/fragment'

export const useEmrStore = defineStore(
  'emr',
  () => {
    const emrEditorInstance = ref<EMREditor>()
    /** 文档页面设置 */
    const pageSetting = ref<DocumentPageSettings>()
    const commandList = ref<string[]>([])
    const documentDataSource = ref<dataSourceItem[]>([])
    const bindingDataSources = ref<string>('')
    const bindingDocumentDataSource = ref<{ [key: string]: unknown }>({})
    const contextMenuEventInfo = ref<IMenuSetting>()
    const navigateStrings = ref<[string, string][]>([])
    /** 片段 */
    const fragments = ref<IFragment[]>([])

    /** 左侧栏目设置 */
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
      {
        title: '文档数据源名称列表',
        name: 'bindingDataSources',
        content: bindingDataSources.value,
      },
      {
        title: '文档绑定数据源数据【Object】',
        name: 'bindingDocumentDataSource',
        content: bindingDocumentDataSource.value,
      },
      {
        title: '数据源绑定的信息【JSON】',
        name: 'documentDataSource',
        content: documentDataSource.value,
      },
    ])

    /** 设置emr 实例 */
    const setEmrEditorInstance = (emrInstance: EMREditor) => {
      emrEditorInstance.value = emrInstance
    }

    /** 设置页面设置 */
    const setPageSetting = (setting: DocumentPageSettings) => {
      pageSetting.value = setting
    }

    /** 设置命令列表 */
    const setCommandList = (commands: string[]) => {
      commandList.value = commands
    }

    /** 设置文档数据源 */
    const setDocumentDataSource = (dataSource: dataSourceItem[]) => {
      documentDataSource.value = dataSource
    }

    /** 设置文档数据源绑定名称 */
    const setBindingDataSources = (dataSources: string) => {
      bindingDataSources.value = dataSources
    }

    /** 设置文档绑定数据源数据 */
    const setBindingdDocumentDataSource = (dataSource: { [key: string]: unknown }) => {
      bindingDocumentDataSource.value = dataSource
    }

    /** 设置右键菜单事件信息 */
    const setContextMenuEventInfo = (info: IMenuSetting) => {
      contextMenuEventInfo.value = info
    }

    /** 设置导航节点信息  */
    const setNavigateStrings = (strings: [string, string][]) => {
      navigateStrings.value = strings
    }

    /** 设置片段信息 */
    const setFragments = (fragment: IFragment) => {
      fragments.value.push(fragment)
    }


    return {
      emrEditorInstance,
      pageSetting,
      leftsideSetting,
      contextMenuEventInfo,
      bindingDocumentDataSource,
      navigateStrings,
      fragments,
      setEmrEditorInstance,
      setPageSetting,
      setCommandList,
      setDocumentDataSource,
      setBindingDataSources,
      setBindingdDocumentDataSource,
      setContextMenuEventInfo,
      setNavigateStrings,
      setFragments
    }
  },
  {
    persist: true,
  },
)
