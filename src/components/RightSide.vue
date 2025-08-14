<template>
  <div class="px-[10px]">
    <el-card>
      <!-- 操作按钮区域 -->
      <div class="flex gap-3 mb-4">
        <el-button type="primary" @click="showLoginDialog">用户登录</el-button>
        <el-button type="success" @click="getUser">获取用户</el-button>
        <el-button type="info" @click="showUserInfo">查看用户信息</el-button>
      </div>

      <!-- 用户信息展示 -->
      <el-descriptions v-if="userInfo" :column="1" title="当前用户信息" border>
        <el-descriptions-item v-for="(item, key) in UserDetailCommentMap" :key="item">
          <template #label>
            <div class="cell-item">{{ item }}</div>
          </template>
          {{ userInfo[key] }}
        </el-descriptions-item>
      </el-descriptions>

      <!-- 空状态提示 -->
      <el-empty v-else description="暂无用户信息" />
    </el-card>

    <!-- 用户登录弹窗 -->
    <UserLogin
      v-model:visible="loginDialogVisible"
      :initial-data="defaultUserData"
      @submit="handleLoginSubmit"
      @cancel="handleLoginCancel"
    ></UserLogin>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useEmrStore } from '../store/emr'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import UserLogin from './UserLogin.vue'
  import type { UserDetail, UserParameter } from '../types/user'

  const emrStore = useEmrStore()
  const { emrEditorInstance } = storeToRefs(emrStore)

  // 弹窗显示状态
  const loginDialogVisible = ref(false)

  // 默认用户数据
  const defaultUserData: UserParameter = {
    ID: 'userid',
    Name: 'zhansan',
    ClientName: 'KDD',
    PermissionLevel: 1,
    Description: 'description',
  }

  /**
   * UserDetail 接口属性注释映射
   */
  const UserDetailCommentMap: Record<keyof UserDetail, string> = {
    Index: '索引位置',
    ID: '用户ID',
    Name: '用户姓名',
    Name2: '用户姓名2（可为空）',
    SaveTimeString: '保存时间字符串',
    SavedTime: '保存时间',
    _LoginTime: '登录时间',
    DisplaySavedTime: '显示保存时间',
    PermissionLevel: '权限等级',
    Description: '描述信息',
    ClientName: '客户端名称',
    Tag: '标签（可为空）',
    CheckedValue: '选中值',
    IsEmptySaveTime: '是否为空保存时间',
  }

  const userInfo = ref<UserDetail>()

  // 显示登录弹窗
  const showLoginDialog = () => {
    loginDialogVisible.value = true
  }

  // 处理登录提交
  const handleLoginSubmit = (userData: UserParameter) => {
    console.log('登录数据:', userData)
    // 调用原有的登录逻辑
    const loginResult = emrEditorInstance.value?.userLoginByUserLoginInfo(userData, true)
    if (loginResult) {
      ElMessage.success('登录成功')
      // 登录成功后获取用户信息
      getUser()
    }
  }

  // 处理登录取消
  const handleLoginCancel = () => {
    ElMessage.info('已取消登录')
  }

  // 显示用户信息
  const showUserInfo = () => {
    if (userInfo.value) {
      ElMessage.info('当前已显示用户信息')
    } else {
      ElMessage.warning('请先登录或获取用户信息')
    }
  }

  function getUser() {
    const user = emrEditorInstance.value?.clt?.CurrentUser
    userInfo.value = user
  }
</script>

<style lang="scss" scoped>
  .cell-item {
    font-weight: 500;
  }

  .flex {
    display: flex;
  }

  .gap-3 {
    gap: 12px;
  }

  .mb-4 {
    margin-bottom: 16px;
  }
</style>
