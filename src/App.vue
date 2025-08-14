<template>
  <div class="app-container">
    <!-- 顶部工具栏 -->
    <header class="app-header">
      <div class="header-left">
        <span class="title">EMR 编辑器</span>
      </div>
      <div class="header-right">
        <el-button size="small" @click="openStructure">文档结构</el-button>
        <el-button size="small" type="primary" @click="openUser">用户管理</el-button>
      </div>
    </header>

    <!-- 中间编辑器 -->
    <main class="app-main">
      <div
        ref="ctl"
        id="myWriterControl"
        dctype="WriterControlForWASM"
        RuleVisible="true"
        registercode="0566987B1B6CD6DECCBEE8CE4CDEAD577FCF5A30201BE7553AFD47C841548F0C0CA6212C10F259E9AF13820AF8E4A17CCBF7612FFFF1A779EBF962627BCAF7ECB906FA8C96694D242208ED9CECD19A907F6820C142920C54553B32B4FE661F78E553F9D3CCE077B455FA558F71D78FE816"
      >
        正在加载...
      </div>
    </main>

    <!-- 底部抽屉：文档结构 / 用户管理 -->
    <el-drawer
      v-model="drawerVisible"
      direction="ltr"
      :with-header="false"
      size="50vw"
      :modal="true"
      :close-on-click-modal="true"
    >
      <el-tabs v-model="activeTab">
        <el-tab-pane label="文档结构" name="structure">
          <div class="panel-content">
            <LeftSide class="h-full" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户管理" name="user">
          <div class="panel-content">
            <RightSide class="h-full" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useEmrStore } from './store/emr'
  import LeftSide from './components/LeftSide.vue'
  import RightSide from './components/RightSide.vue'
  import EMREditor from './utils/emr'
  /** mock数据👇 */
  import { xmlContent } from './mocks/constants'
  import { str2 } from './mocks/subDoc'
  import { navigatedoc } from './mocks/navigateDoc'
  /** mock数据👆 */

  const emrStore = useEmrStore()
  const {
    setPageSetting,
    setCommandList,
    setDocumentDataSource,
    setBindingDataSources,
    setBindingdDocumentDataSource,
    setEmrEditorInstance,
  } = emrStore
  const ctl = ref<EMRElement | null>(null)
  const emrControl = ref<EMREditor>()

  // 抽屉与标签
  const drawerVisible = ref(false)
  const activeTab = ref<'structure' | 'user'>('structure')

  const openStructure = () => {
    activeTab.value = 'structure'
    drawerVisible.value = true
  }
  const openUser = () => {
    activeTab.value = 'user'
    drawerVisible.value = true
  }

  onMounted(() => {
    const emrEditorInstance = new EMREditor(ctl.value)
    emrControl.value = emrEditorInstance
    setEmrEditorInstance(emrEditorInstance)

    emrEditorInstance.dcwriterInitSuccessEvent((rootElement: EMRElement) => {
      emrEditorInstance.documentLoadEvent(rootElement)
      emrEditorInstance.eventShowContextMenuEvent(rootElement)

      const pgSetting = rootElement.GetDocumentPageSettings()
      setPageSetting(pgSetting)

      emrEditorInstance.loadDocument(xmlContent, 'xml')

      const commands = emrEditorInstance.getCommandNameList()
      setCommandList(commands?.split(',') || [])

      const dataSource = emrEditorInstance.getDataSourceBindingDescriptionsJSON()
      setDocumentDataSource(dataSource ?? [])

      const bindingDataSources = emrEditorInstance.getBindingDataSources()
      setBindingDataSources(bindingDataSources ?? '')

      const documentDataSource = bindingDataSources?.split(',').reduce(
        (pre, curr) => {
          const bindingData = emrEditorInstance.getDataWithDataSources(null, curr) as {
            [key: string]: unknown
          }
          const isBinded = bindingData![curr] ? true : false
          if (isBinded) {
            pre[curr] = bindingData[curr]
            console.info(bindingData, `👈数据源名称：[${curr}] 绑定了数据`)
          } else {
            pre[curr] = undefined
            console.log(`👉数据源名称：[${curr}] 未绑定数据`)
          }
          return pre
        },
        {} as { [key: string]: unknown },
      )
      setBindingdDocumentDataSource(documentDataSource ?? {})
    })

    emrEditorInstance.documentContentChangeEvent()
    emrEditorInstance.initDCWriter()
  })
</script>

<style lang="scss" scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f6f7fb;
  }

  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    border-bottom: 1px solid #e4e7ed;
    background: #fff;

    .title {
      font-weight: 600;
      font-size: 16px;
      color: #303133;
    }
  }

  .app-main {
    flex: 1;
    min-height: 0;
    background: #fff;
  }

  #myWriterControl {
    width: 100%;
    height: 100%;

    &:deep(.DC-toolBar-panel) {
      .DC-toolBar-panel-menu {
        border-left: 1px solid #e4e7ed;
        border-right: 1px solid #e4e7ed;
        border-top: 1px solid #e4e7ed;
        background: #fafafa;
      }
    }
  }

  .panel-content {
    height: 100%;
    padding: 8px 12px;
    box-sizing: border-box;
  }
</style>
