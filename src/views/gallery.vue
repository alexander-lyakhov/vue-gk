<template>
  <grid-flow :items="items" :spacing="8" />
</template>

<script>

import gridFlow from '@/components/grid-flow.vue';
import { mapState } from 'vuex';

export default {
  name: 'gallery',

  components: {
    gridFlow
  },

  computed: {
    ...mapState(['items'])
  }
}
</script>