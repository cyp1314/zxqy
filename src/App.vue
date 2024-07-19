<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
