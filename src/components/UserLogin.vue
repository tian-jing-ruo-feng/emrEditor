<template>
  <el-dialog
    v-model="dialogVisible"
    title="用户登录"
    width="600px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form
      ref="userFormRef"
      :model="userForm"
      :rules="userFormRules"
      label-width="120px"
      class="user-login-form"
    >
      <el-form-item label="用户编号" prop="ID">
        <el-input v-model="userForm.ID" placeholder="请输入用户编号" clearable />
      </el-form-item>

      <el-form-item label="用户姓名" prop="Name">
        <el-input v-model="userForm.Name" placeholder="请输入用户姓名" clearable />
      </el-form-item>
      <el-form-item label="权限等级" prop="PermissionLevel">
        <el-select
          v-model="userForm.PermissionLevel"
          placeholder="请选择权限等级"
          style="width: 100%"
        >
          <el-option label="1级 - 基础权限" :value="1" />
          <el-option label="2级 - 普通权限" :value="2" />
          <el-option label="3级 - 高级权限" :value="3" />
          <el-option label="4级 - 管理员权限" :value="4" />
          <el-option label="5级 - 超级管理员" :value="5" />
        </el-select>
      </el-form-item>

      <el-form-item label="客户端名称" prop="ClientName">
        <el-input v-model="userForm.ClientName" placeholder="请输入客户端名称" clearable />
      </el-form-item>

      <el-form-item label="描述信息" prop="Description">
        <el-input
          v-model="userForm.Description"
          type="textarea"
          :rows="3"
          placeholder="请输入描述信息"
          maxlength="200"
          show-word-limit
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
          确认登录
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref, reactive, defineProps, defineEmits, watch } from 'vue'
  import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
  import type { UserParameter } from '../types/user'

  // 定义组件属性
  interface Props {
    visible: boolean
    initialData?: Partial<UserParameter>
  }

  const props = withDefaults(defineProps<Props>(), {
    visible: false,
    initialData: () => ({}),
  })

  // 定义组件事件
  const emit = defineEmits<{
    'update:visible': [value: boolean]
    submit: [data: UserParameter]
    cancel: []
  }>()

  // 响应式数据
  const dialogVisible = ref(false)
  const userFormRef = ref<FormInstance>()
  const submitLoading = ref(false)

  // 表单数据
  const userForm = reactive<UserParameter>({
    ID: 'userid',
    Name: 'zhansan',
    ClientName: 'KDD',
    PermissionLevel: 1,
    Description: 'description',
  })

  // 表单验证规则
  const userFormRules: FormRules = {
    ID: [
      { required: true, message: '请输入用户编号', trigger: 'blur' },
      { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
    ],
    Name: [
      { required: true, message: '请输入用户姓名', trigger: 'blur' },
      { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' },
    ],
    PermissionLevel: [
      { required: true, message: '请选择权限等级', trigger: 'change' },
      { type: 'number', min: 1, max: 5, message: '权限等级必须在 1-5 之间', trigger: 'change' },
    ],
    Description: [{ max: 200, message: '描述信息不能超过200个字符', trigger: 'blur' }],
  }

  // 监听visible属性变化
  watch(
    () => props.visible,
    newVal => {
      dialogVisible.value = newVal
      if (newVal && props.initialData) {
        // 初始化表单数据
        Object.assign(userForm, {
          ID: 'userid',
          Name: 'zhansan',
          ClientName: 'KDD',
          PermissionLevel: 1,
          Description: 'description',
          ...props.initialData,
        })
      }
    },
  )

  // 监听弹窗显示状态变化
  watch(dialogVisible, newVal => {
    emit('update:visible', newVal)
  })

  // 提交表单
  const handleSubmit = async () => {
    if (!userFormRef.value) return

    try {
      await userFormRef.value.validate()
      submitLoading.value = true

      // 模拟提交延迟
      await new Promise(resolve => setTimeout(resolve, 1000))

      emit('submit', { ...userForm })
      handleClose()
    } catch (error) {
      ElMessage.error('表单验证失败，请检查输入')
    } finally {
      submitLoading.value = false
    }
  }

  // 重置表单
  const handleReset = () => {
    if (!userFormRef.value) return
    userFormRef.value.resetFields()

    // 重置为默认值
    Object.assign(userForm, {
      ID: 'userid',
      Name: 'zhansan',
      ClientName: 'KDD',
      PermissionLevel: 1,
      Description: 'description',
      ...props.initialData,
    })
  }

  // 取消操作
  const handleCancel = () => {
    emit('cancel')
    handleClose()
  }

  // 关闭弹窗
  const handleClose = () => {
    dialogVisible.value = false
  }

  // 暴露方法供父组件调用
  defineExpose({
    resetForm: handleReset,
    getFormData: () => ({ ...userForm }),
  })
</script>

<style lang="scss" scoped>
  .user-login-form {
    padding: 20px 0;

    .el-form-item {
      margin-bottom: 20px;
    }

    .el-input,
    .el-select {
      width: 100%;
    }
  }

  .dialog-footer {
    text-align: right;

    .el-button {
      margin-left: 10px;
    }
  }

  :deep(.el-dialog__body) {
    padding: 0 20px;
  }

  :deep(.el-dialog__footer) {
    padding: 20px;
    border-top: 1px solid #ebeef5;
  }
</style>
