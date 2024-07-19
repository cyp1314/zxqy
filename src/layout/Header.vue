<template>
  <div style="height: 160px;width: 100vw;display: flex;align-items: center;flex-direction: column;">
    <div style="width: 100%;height: 38px;border-bottom: 1px solid #f1f1f1;display: flex;align-items: center;">
      <div
        style="width: 1200px;margin: 0 auto;height: 38px;display: flex;display: flex;align-items: center;font-size: 14px;justify-content: space-between;">
        <span>欢迎来到</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <span>{{ store.xjgaName ? store.xjgaName : store.cName }}</span>
            <el-icon class="el-icon--right">
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="person">个人中心</el-dropdown-item>
              <el-dropdown-item command="loginout">退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

    <div style="height: 80px;width: 100%;width: 1200px;margin: 0 auto;">
      <img src="@/assets/images/layout/header/page_logo.png" />
    </div>
    <div style="height: 42px;width: 100%;width: 1200px;margin: 0 auto;">
      <div style="display: flex;align-items: center;justify-content: space-between;height: 100%;margin-top: 18px;
    font-size: 18px;
    padding: 4px 0;
    justify-content: space-between;">
        <a href="https://zwfw.xinjiang.gov.cn/" class="active"><span>首页</span></a>
        <a href="https://zwfw.xinjiang.gov.cn/xjzwfw2021/personal.html"><span>个人服务</span></a>
        <a href="https://zwfw.xinjiang.gov.cn/xjzwfw2021/personalfaren.html"><span>法人服务</span></a>
        <a href="https://zwfw.xinjiang.gov.cn/newAppraise/review.html"><span>好差评</span></a>
        <a href="https://zwfw.wlmq.gov.cn/icity/convenience/index"><span>效能监督</span></a>
        <a href="https://zwfw.xinjiang.gov.cn/xjzwfw2021/xjzzgs/license_publicity.html"><span>证照公示</span></a>
        <a href="http://222.82.239.231/login.do?method=beginlogin"><span>公共资源</span></a>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/index'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { CaretBottom } from '@element-plus/icons-vue'
import Cookies from "js-cookie"
const route = useRoute()
const router = useRouter()
const store = useUserStore()
const handleCommand = (command: string | number | object) => {
  if (command == 'person') {
    window.open('https://zwfw.xinjiang.gov.cn/xinjiangzwfwnew/my_dothing.html?status=0&childrenpage=bjzx', '_self')
  } else if (command == 'loginout') {
    Cookies.remove('taskcode')
    Cookies.remove('commonareacode')
    Cookies.remove('lctoken')
    window.open('https://zwfw.xinjiang.gov.cn/xjwwrz/rest/oauth2/logout?redirect_uri=http://zwfw.xinjiang.gov.cn', '_self')
  }
}

</script>
<style lang="scss" scoped>
a {
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: #000;
}

a:hover {
  color: #4c7bf4;
}

.layout-header {
  width: 100%;
  height: 10%;
  min-height: 120px;
  background-image: url('@/assets/images/layout/header/content_top_bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 60%;
    min-width: 750px;
    display: flex;
    justify-content: space-between;

    .options {
      &::v-deep(.el-dropdown) {
        margin-top: 10px;

        .el-dropdown-link {
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 6px;
          color: #FFF;
          display: flex;
          align-items: center;
          outline: none;
        }
      }
    }
  }
}
</style>