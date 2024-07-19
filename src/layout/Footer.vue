<template>
  <div class="layout-footer">
    <div class="container">
      <div class="left">
        <img :width="70" :src="imgs.bl_1">
        <img :width="70" :src="imgs.bl_2">
        <img :width="80" :src="imgs.bl_3">
      </div>
      <div class="center">
        <div>
          <span>{{ info.kbdw.label }} : {{ info.kbdw.value }}</span>
          <span>{{ info.zbdw.label }} : {{ info.zbdw.value }}</span>
        </div>
        <div>
          <span>{{ info.dz.label }} : {{ info.dz.value }}</span>
          <span>{{ info.yzbm.label }} : {{ info.yzbm.value }}</span>
          <span>{{ info.lxdh.label }} : {{ info.lxdh.value }}</span>
        </div>
        <div>
          <span>{{ info.icp.label }} : {{ info.icp.value }}</span>
          <span>{{ info.xgwab.label }} : {{ info.xgwab.value }}</span>
        </div>
        <div>
          <span>{{ info.bqsy.label }} : {{ info.bqsy.value }}</span>
        </div>
      </div>
      <div class="right">
        <img :height="84" :src="imgs.br_1">
        <img :height="84" :src="imgs.br_2">
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import bl_1 from '@/assets/images/layout/footer/dzjg.png'


const imgs = {
  bl_1,

}

const info = reactive({
  kbdw: {
    label: '开办单位',
    value: '新疆维吾尔自治区公安厅'
  },
  zbdw: {
    label: '主办单位',
    value: '新疆维吾尔自治区公安厅警令部'
  },
  dz: {
    label: '地址',
    value: '乌鲁木齐市黄河路58号'
  },
  yzbm: {
    label: '邮政编码',
    value: '830000'
  },
  lxdh: {
    label: '联系电话',
    value: '0991-5587131'
  },
  icp: {
    label: '新ICP备',
    value: '10201703号'
  },
  wzbsm: {
    label: '网站标识码',
    value: '6500000019'
  },
  xgwab: {
    label: '新公网安备',
    value: '65010302000742'
  },
  bqsy: {
    label: '版权所有',
    value: '新疆维吾尔自治区公安厅'
  }
})
</script>

<style lang="scss" scoped>
.layout-footer {
  width: 100%;
  height: 10%;
  min-height: 120px;
  background-color: $color-primary;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .container {
    width: 60%;
    min-width: 750px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      img {
        margin-right: 40px;
      }

      & > img:last-child {
        margin-right: 0;
      }
    }

    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 12px;

      div {
        span {
          margin-right: 10px;
        }

        & > span:last-child {
          margin-right: 0;
          
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      img {
        margin-right: 40px;
      }

      & > img:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>