<template>
  <div class="slidebox">
    <div class="slidebox__overlay"></div>
    <img class="slidebox__image noselect" src="" ref="img" />
    <div class="slidebox__spinner" ref="spinner"></div>
    <div class="slidebox__status" ref="status">{{current}} / {{total}}</div>
    <div class="slidebox__close-button" ref="closeButton">+</div>
  </div>
</template>

<style lang="sass?outputStyle=expanded" scoped src="./styles.scss"></style>

<script>

import { NEXT, PREV } from './animations.js';

export default {
  name: 'slide-box',

  props: {
    items: {
      type: Array,
      default: []
    },

    displayField: {
      type: String,
      default: null
    },
  },

  data() {
    return {
      current: 0
    }
  },

  created() {
    this.middleX = window.innerWidth >> 1;
    this.spinnerTimeoutID = null;
  },

  mounted() {
    this.img = this.$refs.img;
    this.spinner = this.$refs.spinner;
    this.closeButton = this.$refs.closeButton;

    console.log(this.img)
  },

  beforeDestroy() {
    this.unbindEvents();
  },

  watch: {
    isOpen(value) {
      value && this.open();
    }
  },

  computed: {
    total() {
      return this.items.length;
    }
  },

  methods: {
    bindEvents() {
      window.addEventListener('click', this.clickHandler);
      document.body.addEventListener('keydown', this.keydownHandler);
      this.closeButton.addEventListener('click', this.close);
    },

    unbindEvents() {
      window.removeEventListener('click', this.clickHandler);
      document.body.removeEventListener('keydown', this.keydownHandler);
      this.closeButton.removeEventListener('click', this.close);
    },

    clickHandler(e) {
      e.clientX < this.middleX ?
        this.prev():
        this.next();
    },

    keydownHandler(e) {
      e.code === 'ArrowLeft' && this.prev();
      e.code === 'ArrowRight' && this.next();
      e.code === 'Escape' && this.close(e);
    },

    showSpinner() {
      this.spinnerTimeoutID = setTimeout(
        () => this.spinner.style.display = 'block', 250
      )
    },

    hideSpinner() {
      clearTimeout(this.spinnerTimeoutID);
      this.spinner.style.display = 'none';
    },

    prev(className) {
      this.updateStatus(-1);
      this.startAnimation(PREV.OUT)
        .then(() => this.loadImage())
        .then(() => this.endAnimation(PREV.OUT, PREV.IN))
    },

    next(className) {
      this.updateStatus(1);
      this.startAnimation(NEXT.OUT)
        .then(() => this.loadImage())
        .then(() => this.endAnimation(NEXT.OUT, NEXT.IN))
    },

    loadImage() {
      return new Promise(resolve => {
        delete this.img.onload;
        this.img.onload = (e) => resolve(e.target);

        let src = this.displayField ?
          unescape(this.items[this.current - 1][this.displayField]):
          unescape(this.items[this.current - 1]);

        this.img.src = src;
      })
    },

    startAnimation(from) {
      this.unbindEvents();
      return this.play(from)
    },

    endAnimation(from, to) {
      this.img.classList.remove(from);

      return this.play(to).then(target => {
        this.hideSpinner();
        this.bindEvents();
        this.img.classList.remove(to)

        return target;
      });
    },

    play(className) {
      this.img.classList.add(className);

      return new Promise(resolve => {
        this.onAnimationEndHandler = this.onAnimationEnd.bind(this, resolve);
        this.img.addEventListener('animationend', this.onAnimationEndHandler);
      })
    },

    onAnimationEnd(resolve, e) {
      e.target.removeEventListener('animationend', this.onAnimationEndHandler);
      resolve(e.target);
    },

    updateStatus(step = 0) {
      this.current += step;

      if (this.current < 1) {
        this.current = this.total;
      }

      if (this.current > this.total) {
        this.current = 1;
      }

      return this.current - 1;
    },

    open(startFrom = 1) {
      document.body.style.overflow = 'hidden';

      this.current = startFrom > this.total ? 1 : parseInt(startFrom);
      this.updateStatus();
      this.loadImage();
      this.$el.style.display = 'flex';

      this.bindEvents();
    },

    close(e) {
      e.stopPropagation();
      document.body.style.overflow = 'visible';
      this.$el.style.display = 'none';
      this.$emit('close', this.current);
    }
  }
}
</script>