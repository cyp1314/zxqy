<template>
  <Header />
  <div style="margin-top: 10%;">
    <div class=" not-found">
      <h1>404 - 页面未找到</h1>
      <p style="margin-top: 1%;">抱歉，您访问的页面不存在。</p>
    </div>
  </div>
  <Footer style="position: absolute;bottom: 0;" />
</template>

<script lang="ts" setup>
import { Header, Footer } from '@/layout/index'
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
  font-size: 24px;


}
</style>
