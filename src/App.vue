<template>
  <div class="app-container">
    <!-- 顶部工具栏 -->
    <header class="app-header">
      <div class="header-left">
        <div class="brand">
          <span class="brand-mark">E</span>
          <span class="title">{{ pkg.title }}</span>
          <span class="badge">BETA</span>
        </div>
      </div>
      <div class="header-right">
        <nav class="toolbar">
          <div class="group">
            <el-button size="small" @click="openStructure">文档结构</el-button>
            <el-button size="small" type="primary" @click="openUser">用户管理</el-button>
          </div>
        </nav>
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
        <LoadingSkeleton v-if="isLoading"></LoadingSkeleton>
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
            <DocumentSetting class="h-full" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="用户管理" name="user">
          <div class="panel-content">
            <UserManagement class="h-full" />
          </div>
        </el-tab-pane>
        <!-- TODO: -->
        <el-tab-pane label="数据源" name="datasource">
          <div class="panel-content">数据源</div>
        </el-tab-pane>
        <el-tab-pane label="模板" name="template">
          <div class="panel-content">模板</div>
        </el-tab-pane>
        <el-tab-pane label="病程" name="subDocument">
          <div class="panel-content">病程</div>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useEmrStore } from './store/emr'
  import DocumentSetting from './components/DocumentSetting.vue'
  import UserManagement from './components/UserManagement.vue'
  import EMREditor from './utils/emr'
  import LoadingSkeleton from './components/LoadingSkeleton.vue'
  import pkg from '../package.json'
  /** mock数据👇 */
  import { xmlContent } from './mocks/constants'
  import { str2 } from './mocks/subDoc'
  import { navigatedoc } from './mocks/navigateDoc'
  import { usePanel } from './utils/panel.ts'
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
  const isLoading = ref(false)

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
      /** 自定义panel菜单栏 */
      usePanel(rootElement)

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
      isLoading.value = false
    })

    emrEditorInstance.documentContentChangeEvent()
    isLoading.value = true
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
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    padding: 0 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.65),
      rgba(56, 189, 248, 0.65),
      rgba(16, 185, 129, 0.65)
    );
    backdrop-filter: blur(12px) saturate(160%);
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.15) inset,
      0 6px 20px rgba(16, 24, 40, 0.12);
    isolation: isolate;

    .header-left {
      display: flex;
      align-items: center;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .brand-mark {
      width: 22px;
      height: 22px;
      border-radius: 6px;
      background: linear-gradient(135deg, #7c3aed, #22d3ee);
      color: #fff;
      font-weight: 700;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.5px;
      box-shadow: 0 2px 10px rgba(34, 211, 238, 0.45);
      user-select: none;
    }

    .title {
      font-weight: 600;
      font-size: 14px;
      color: #0f172a;
    }

    .badge {
      padding: 2px 6px;
      border-radius: 999px;
      font-size: 12px;
      color: #0ea5e9;
      background: rgba(236, 245, 255, 0.7);
      border: 1px solid rgba(217, 236, 255, 0.8);
      line-height: 1;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    .header-right {
      display: flex;
      align-items: center;
    }

    .toolbar {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .group {
      display: flex;
      align-items: center;
      padding: 2px;
      border: 1px solid rgba(255, 255, 255, 0.45);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(6px) saturate(150%);
      -webkit-backdrop-filter: blur(6px) saturate(150%);
      box-shadow:
        0 1px 0 rgba(255, 255, 255, 0.25) inset,
        0 8px 20px rgba(16, 24, 40, 0.08);

      :deep(.el-button) {
        height: 28px;
        border: none;
        background: transparent;
        color: #1f2937;

        &:hover {
          background: rgba(255, 255, 255, 0.55);
          color: #0f172a;
        }
      }

      :deep(.el-button.is-disabled) {
        color: #c0c4cc;
      }

      :deep(.el-button + .el-button) {
        margin-left: 4px;
      }

      :deep(.el-button--primary) {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(56, 189, 248, 0.22));
        color: #0ea5e9;

        &:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.32), rgba(56, 189, 248, 0.32));
          color: #0284c7;
        }
      }
    }
  }

  @supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
    .app-header {
      background: linear-gradient(135deg, #6366f1, #38bdf8, #10b981);
    }
    .app-header .group {
      background: rgba(255, 255, 255, 0.7);
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
