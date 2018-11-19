<template>
<!-- 文件入口 -->
  <div id="app">
    <router-view></router-view>
    <toast></toast>
  </div>
</template>

<script>
import Toast from "base/toast/toast";
// import {menuUtils} from '@/assets/js/menuUtils'
export default {
  name: "App",
  components: {
    Toast
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="sass" scoped>
  #app
    width: 100%
    height: 100%
    overflow: auto
</style>
