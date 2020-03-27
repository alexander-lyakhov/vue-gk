<template>
  <div id="app">
    <router-view/>
    <slide-box />
  </div>
</template>

<script>
import slideBox from '@/components/slide-box.vue';

export default {
  name: 'App',

  components: {
    slideBox
  }
}

</script>

<style lang="scss" scoped>
</style>
