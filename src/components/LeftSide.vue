<template>
  <el-scrollbar height="100vh">
    <TransitionGroup name="list" tag="ul">
      <li
        class="border-b border-[#ccc]"
        v-for="(setting, index) in settings"
        :title="setting.title"
        :name="setting.name"
        :key="setting.name"
      >
        <h2
          class="h-[30px] leading-[30px] bg-[var(--el-color-primary-light-3)] px-[4px] cursor-pointer relative"
          @click="toggleCollapse(index, !setting.active)"
        >
          {{ setting.title }}
          <span class="icon-wrapper inline-block absolute right-[12px]">
            <el-icon class="align-middle" v-if="setting.active">
              <ArrowUpBold></ArrowUpBold>
            </el-icon>
            <el-icon class="align-middle" v-else><ArrowDownBold></ArrowDownBold></el-icon>
          </span>
        </h2>
        <Transition>
          <div v-if="setting.active">
            <json-viewer :value="setting.content" copyable sort theme="light"></json-viewer>
          </div>
        </Transition>
      </li>
    </TransitionGroup>
  </el-scrollbar>
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

  watchEffect(() => {
    settings.value = leftsideSetting.value.map((item, ind) => {
      return {
        ...item,
        // active: ind === 0 ? true : false,
        active: false,
      }
    })
  })

  function toggleCollapse(index: number, active: boolean) {
    settings.value[index].active = active
  }
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
