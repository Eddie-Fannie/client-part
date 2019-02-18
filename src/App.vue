<template>
  <div id="app">
    <ui-header></ui-header>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import UiHeader from './components/common/UiHeader'
export default {
  name: 'App',
  components: {
    UiHeader
  }
}
</script>

<style lang="less">
*{
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>
