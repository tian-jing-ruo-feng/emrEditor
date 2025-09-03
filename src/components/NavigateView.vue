<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useEmrStore } from '../store/emr'

  const emrStore = useEmrStore()
  const { navigateStrings, emrEditorInstance } = storeToRefs(emrStore)

  const navigateByNodeID = (activeIndex: string) => {
    emrEditorInstance.value?.ctl?.NavigateByNodeID(activeIndex)
  }
</script>

<template>
  <el-card class="navigate-view">
    <el-menu default-active="1" @select="navigateByNodeID" style="border-right: none; width: 100%">
      <el-menu-item :index="item[0] + ''" v-for="item in navigateStrings" :key="item[0]">
        <span style="margin-right: 10px">{{ item[0] + '.' }}</span>
        <span>{{ item[1] }}</span>
      </el-menu-item>
    </el-menu>
  </el-card>
</template>

<style lang="scss" scoped>
  .navigate-view {
    position: fixed;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
