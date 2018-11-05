<template>
  <div class="header">
    <router-view></router-view>
    <index-home />
  </div>
</template>

<script>
import Home from './components/home/Home.vue';
export default {
  components: {
    'index-home': Home
  }
}
</script>

<style>

</style>
