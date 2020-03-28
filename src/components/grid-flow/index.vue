<template>
  <div class="grid" @click="handleClick">
    <div class="grid__column grid__column-left"></div>
    <div class="grid__column grid__column-right"></div>
  </div>
</template>

<script>

export default {
  name: 'grid-fall',

  props: {
    items: {
      type: Array,
      default: []
    },

    spacing: {
      type: Number,
      default: 8
    }
  },

  mounted() {
    this.heights = [0, 0];
    this.columns = this.$el.children;

    this.columns[0].style.paddingRight = `${this.spacing >> 1}px`;
    this.columns[1].style.paddingLeft = `${this.spacing >> 1}px`;

    this.$el.style.padding = `${this.spacing}px ${this.spacing}px 0`;
    this.loadImage(0);
  },

  computed: {
    data() {
      return this.$props.items;
    }
  },

  methods: {
    handleClick(e) {
      console.log(e.target);

      if (!e.target.classList.contains('dummy')) {
        this.$emit('click', e.target);
      }
    },

    loadImage(index) {
      let img = document.createElement('img');
        img.className = 'grid__image transparent';
        img.src = unescape(this.data[index]);
        img.onload  = e => e.target.classList.remove('transparent');

      let interval = setInterval(() => {

        let w = img.naturalWidth;
        let h = img.naturalHeight;

        if (w && h) {
          clearInterval(interval);

          let scaledHight = Math.ceil((this.columns[0].offsetWidth - (this.spacing >> 1)) * h / w);

          let imageWrapper = this.createImgWrapper(scaledHight, index + 1)
            imageWrapper.appendChild(img);

          this.data[index + 1] ?
            this.loadImage(index + 1):
            this.createEmptyImgWrapper(index + 1);
        }
      }, 20);
    },

    createImgWrapper(height, position) {
      let destColumnIndex = +(this.heights[0] > this.heights[1]);
      let destColumn = this.columns[destColumnIndex];

      this.heights[destColumnIndex] += height;

      let imageWrapper = document.createElement('div');
        imageWrapper.className = 'img-wrapper';
        imageWrapper.style = `
          height: ${height}px;
          margin-bottom: ${this.spacing}px;
        `
        position && imageWrapper.setAttribute('data-position', position);

      destColumn.appendChild(imageWrapper);

      return imageWrapper;
    },

    createEmptyImgWrapper(position) {
      this.createImgWrapper(
        Math.abs(this.columns[0].offsetHeight - this.columns[1].offsetHeight) - this.spacing
      ).classList.add('dummy');
    },

    scrollTo(position = 1) {
      this.el.querySelector('[data-position="' + position + '"').scrollIntoView();
    }
  }
}
</script>

<style lang="scss" scoped>

.grid {
  background: #fff;
  width: 800px;
  margin: auto;
  overflow: hidden;

  &__column {
    width: 50%;
    float: left;
  }

  &::v-deep .img-wrapper {
    background: #546E7A;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;

    &:not(.dummy):before {
      content: attr(data-position);
      font-size: 1rem;
      color: #fff;
      background: #000;
      display: block;
      position: absolute;
      right: 4px;
      top: 4px;
      padding: 4px 8px;
      z-index: 1;
    }

    &:not(.dummy):after {
      content: '';
      background: #000;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
    }

    &.dummy:after {
      content: 'The End';
      font: bold 2rem arial;
      color: #B0BEC5;
      letter-spacing: .125rem;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  &::v-deep &__image {
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
    transition: opacity .5s;

    &.transparent {
      opacity: 0;
    }
  }
}

</style>