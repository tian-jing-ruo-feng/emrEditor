<script setup lang="ts">
  import { ref, useTemplateRef } from 'vue'
  import type { IFragment } from '../types/fragment'
  import type { FormInstance, FormRules } from 'element-plus'
  import { useEmrStore } from '../store/emr'
  import { storeToRefs } from 'pinia'

  const emrStore = useEmrStore()
  const { emrEditorInstance } = storeToRefs(emrStore)
  const { setFragments } = emrStore
  const visible = ref(false)
  const fragmentContent = ref<string>('')
  const types = [
    {
      label: 'XML',
      value: 'XML',
    },
    {
      label: 'TEXT',
      value: 'TEXT',
    },
    {
      label: 'HTML',
      value: 'HTML',
    },
    {
      label: 'JSON',
      value: 'JSON',
    },
  ]
  const fromRef = useTemplateRef<FormInstance>('form')
  const formModel = ref<Pick<IFragment, 'name' | 'type'>>({
    name: '',
    type: 'HTML',
  })
  const rules: FormRules = {
    name: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入名称',
      },
    ],
    type: [
      {
        required: true,
        trigger: 'blur',
        message: '请选择保存类型',
      },
    ],
  }

  function setFragmentContent(str: string) {
    fragmentContent.value = str
  }
  /** 打开对话框 */
  function openDialog() {
    visible.value = true
    resetForm()
  }

  function resetForm() {
    fromRef.value?.resetFields()
  }

  function confirm() {
    if (fromRef.value) {
      fromRef.value.validate(validate => {
        if (validate) {
          const content =
            emrEditorInstance.value?.ctl?.DocumentSelection(formModel.value.type) ?? ''
          setFragments({
            content,
            ...formModel.value,
          })
          visible.value = false
        }
      })
    }
  }

  defineExpose({
    openDialog,
    setFragmentContent,
  })
</script>

<template>
  <el-dialog v-model="visible" title="保存片段" width="65vw" align-center>
    <div class="dialog-body">
      <el-form :model="formModel" :rules="rules" ref="form" label-position="top">
        <el-form-item label="名称" prop="name">
          <el-input v-model="formModel.name" clearable />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="formModel.type" clearable style="width: 100%">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <el-alert title="片段内容👇" type="primary" :closable="false"></el-alert>
      <iframe :srcdoc="fragmentContent" width="100%" class="content-view"></iframe>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .dialog-body {
    height: 65vh;
    display: flex;
    flex-direction: column;
    .content-view {
      flex: 1;
      border: 1px solid #ccc;
      background-color: #303133;
    }
  }
</style>
