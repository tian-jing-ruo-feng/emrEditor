<template>
  <div class="loading-skeleton-overlay">
    <div class="panel">
      <el-skeleton animated>
        <template #template>
          <el-skeleton-item variant="text" style="width: 60%; height: 20px; margin-bottom: 12px" />
          <el-skeleton-item variant="text" style="width: 40%; height: 16px; margin-bottom: 20px" />
          <el-skeleton-item variant="rect" style="width: 100%; height: 180px" />
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .loading-skeleton-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .panel {
    width: min(1080px, 90%);
    padding: 24px;
    border-radius: 12px;
    background: #fff;
    box-shadow:
      0 8px 30px rgba(16, 24, 40, 0.12),
      0 2px 6px rgba(16, 24, 40, 0.08);
    box-sizing: border-box;
  }
</style>
