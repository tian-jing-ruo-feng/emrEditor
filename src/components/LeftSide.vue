<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="(setting, index) in settings"
      :title="setting.title"
      :name="setting.name"
      :key="'collapse-item-setting-' + index"
    >
      <template #title>
        <h2>
          {{ setting.title }}
        </h2>
      </template>
      <json-viewer
        :value="setting.content"
        :expanded="true"
        :expandDepth="4"
        copyable
        sort
        theme="light"
      ></json-viewer>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
  import { useEmrStore } from '../store/emr'
  import { storeToRefs } from 'pinia'
  import { ref, watchEffect } from 'vue'
  import { JsonViewer } from 'vue3-json-viewer'
  import 'vue3-json-viewer/dist/vue3-json-viewer.css'

  const emrStore = useEmrStore()
  const { leftsideSetting } = storeToRefs(emrStore)
  const settings = ref()
  const activeNames = ref<string[]>([])

  watchEffect(() => {
    settings.value = leftsideSetting.value
  })
</script>

<style lang="scss" scoped></style>
