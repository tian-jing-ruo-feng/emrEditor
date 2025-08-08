<template>
  <div class="app-wrapper">
    <el-card class="left-side">
      <LeftSide class="h-screen"></LeftSide>
    </el-card>
    <div ref="ctl" id="myWriterControl" dctype="WriterControlForWASM" RuleVisible="true">
      正在加载...
    </div>
    <el-card class="right-side">
      <h2>编辑器打印内容</h2>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useEmrStore } from './store/emr'
  import LeftSide from './components/LeftSide.vue'
  import EMREditor from './utils/emr'
  import { xmlContent } from './mocks/constants'

  const emrStore = useEmrStore()
  const {
    setPageSetting,
    setCommandList,
    setDocumentDataSource,
    setBindingDataSources,
    setBindingdDocumentDataSource,
  } = emrStore
  const ctl = ref<EMRElement | null>(null)
  const emrControl = ref<EMREditor>()

  onMounted(() => {
    /** 实例化编辑器 */
    const emrEditorInstance = new EMREditor(ctl.value)
    emrControl.value = emrEditorInstance
    /** 全局事件监听处理，必须前置 */
    emrEditorInstance.dcwriterInitSuccessEvent((rootElement: EMRElement) => {
      /** 文档加载完成事件 */
      emrEditorInstance.documentLoadEvent(rootElement)
      emrEditorInstance.eventShowContextMenuEvent(rootElement)

      /** 获取页面设置信息 */
      const pgSetting = rootElement.GetDocumentPageSettings()
      setPageSetting(pgSetting)

      /** 加载指定文档 */
      emrEditorInstance.loadDocument(xmlContent, 'xml')

      // console.log(emrEditorInstance.SaveDocumentToString(), 'save formart json')
      /** 获取命令列表数据 */
      const commands = emrEditorInstance.getCommandNameList()
      setCommandList(commands?.split(',') || [])

      /** 获取数据源，json格式 */
      const dataSource = emrEditorInstance.getDataSourceBindingDescriptionsJSON()
      setDocumentDataSource(dataSource ?? [])

      /** 获取文档绑定数据源头名称列表 */
      const bindingDataSources = emrEditorInstance.getBindingDataSources()
      setBindingDataSources(bindingDataSources ?? '')

      /** 获取指定数据源名称数据 */
      const documentDataSource = bindingDataSources?.split(',').reduce(
        (pre, curr) => {
          // 获取指定数据源名称的数据，并赋值到 pre 对象
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

    /** 初始化编辑器 */
    emrEditorInstance.initDCWriter()
  })
</script>

<style lang="scss" scoped>
  .app-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #myWriterControl {
    width: 50%;
    height: 100%;

    /** 工具面板 */
    &:deep(.DC-toolBar-panel) {
      /** 菜单栏 */
      .DC-toolBar-panel-menu {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        button {
        }
      }
      /** 菜单栏列表 */
      .DC-toolBar-panel-menuList {
        ul {
          li {
            div {
            }
            div {
            }
          }
        }
      }
      /** 快捷工具栏 */
      .DC-toolBar-panel-toolsbar {
        .toolbar-group {
          .toobar-box {
          }
        }
      }
    }
  }
  .left-side,
  .right-side {
    width: 25%;
    height: 100%;
    &:deep(.el-card__body) {
      padding: 0;
    }
  }
</style>
