<template>
  <div class="gallery-page">
    <grid-flow :items="items" :spacing="8" @click="onGridClick" />
    <slide-box ref="slidebox" />
  </div>
</template>

<script>

import gridFlow from '@/components/grid-flow.vue';
import slideBox from '@/components/slide-box.vue';
import { mapState } from 'vuex';

export default {
  name: 'gallery',

  data() {
    return {}
  },

  components: {
    gridFlow,
    slideBox
  },

  computed: {
    ...mapState(['items']),
  },

  methods: {
    onGridClick(target) {
      console.log('onGridClick', target, target.dataset.position)
      const position = target.dataset.position;

      this.$refs.slidebox.open(position);
    }
  }
}
</script>