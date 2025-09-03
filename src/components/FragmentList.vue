<script setup lang="ts">
  import { ref } from 'vue'
  import { useEmrStore } from '../store/emr'
  import { storeToRefs } from 'pinia'
  import 'highlight.js/styles/atom-one-dark.css'
  import 'highlight.js/lib/common'
  import hljsVuePlugin from '@highlightjs/vue-plugin'

  const HljsVuePluginComponent = hljsVuePlugin.component
  const emrStore = useEmrStore()
  const { fragments } = storeToRefs(emrStore)
  const activeName = ref('1')
  const openPreview = ref(false)
</script>

<template>
  <el-collapse v-model="activeName" accordion @change="openPreview = false">
    <el-collapse-item :name="ind" v-for="(fragment, ind) in fragments" :key="fragment.name + ind">
      <template #title>
        <div>
          <span style="font-weight: bold">{{ fragment.name }}</span>
          <el-tag type="primary" size="small" style="margin-left: 10px">{{ fragment.type }}</el-tag>
        </div>
      </template>
      <div class="content-review">
        <!-- html 预览按钮 -->
        <el-button
          v-if="fragment.type === 'HTML'"
          @click="openPreview = !openPreview"
          type="primary"
          icon="TurnOff"
          size="small"
          style="margin-bottom: 10px"
        >
          {{ !openPreview ? '预览' : '关闭预览' }}
        </el-button>
      </div>
      <!-- 内容展示 -->
      <HljsVuePluginComponent
        v-show="!openPreview"
        :language="fragment.type.toLowerCase()"
        :code="fragment.content"
      ></HljsVuePluginComponent>
      <!-- html 内容预览 -->
      <iframe v-if="openPreview" :srcdoc="fragment.content" width="100%" height="500px"></iframe>
    </el-collapse-item>
  </el-collapse>
</template>
