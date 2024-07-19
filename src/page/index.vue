<template>
  <CommonHead />
  <div class="container">
    <router-view></router-view>
  </div>
  <CommonFoot />
</template>

<script setup>
import CommonHead from "@/components/CommonHead.vue";
import CommonFoot from "@/components/CommonFoot.vue";
</script>

<style>
.container {
  margin-top: 100px;
  flex: 1;
  margin-bottom: 150px;
  overflow: scroll;
}
</style>
