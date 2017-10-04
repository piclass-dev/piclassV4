<template>
  <div id="app">
    <!--<topBar></topBar>
    <leftBlock></leftBlock>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import topBar from './components/topBar.vue'
// import leftBlock from './components/pages/leftBlock.vue'
export default {
  name: 'app',
  components: {
    // 'topBar': topBar,
    // 'leftBlock': leftBlock
  }
}

</script>

<style>
</style>
