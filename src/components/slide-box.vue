<template>
  <div class="slidebox">
    <div class="slidebox__overlay"></div>
    <img class="slidebox__image noselect" src="" ref="img" />
    <div class="slidebox__spinner" ref="spinner"></div>
    <div class="slidebox__status" ref="status"></div>
    <div class="slidebox__close-button" ref="closeButton">+</div>
  </div>
</template>

<script>

export default {
  name: 'slide-box',

  props: {
    displayField: {
      type: String,
      default: null
    }
  },

  created() {
    this.middleX = window.innerWidth >> 1;
    this.spinnerTimeoutID = null;
  },

  mounted() {
    this.img = this.$refs.img;

    console.log(this.img)
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
          unescape(this.data.items[this.data.current - 1][this.displayField]):
          unescape(this.data.items[this.data.current - 1]);

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
      this.data.current += step;

      if (this.data.current < 1) {
        this.data.current = this.data.total;
      }

      if (this.data.current > this.data.total) {
        this.data.current = 1;
      }

      this.status.textContent = `${this.data.current} / ${this.data.total}`;

      return this.data.current - 1;
    },

    open(startFrom = 1) {
      document.body.classList.add('noscroll');

      this.data.current = startFrom > this.data.total ? 1 : parseInt(startFrom);
      this.updateStatus();

      this.loadImage();
      this.el.style.display = 'flex';

      this.bindEvents();
    },

    close(e) {
      e.stopPropagation();
      document.body.classList.remove('noscroll');
      this.el.style.display = 'none';
      this.triggerEvent('close', this.data.current);
    }
  }
}
</script>

<style lang="scss" scoped>

.slidebox {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  //display: flex;

  &__overlay {
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.75;
  }

  &__image {
    max-width: 100vw;
    max-height: 96vh;
    z-index: 1;
  }

  &__spinner {
    border-left: 3px solid #fff;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 50%;
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    animation: spin .5s linear infinite;
  }

  /*
   *  Status
   */
  &__status {
    font: .75rem verdana;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translate(-50%, 0);
    padding: 4px 8px;
    z-index: 1;
  }

  /*
   *  Close button
   */
  &__close-button {
    font: 2rem verdana;
    color: #ccc;
    position: absolute;
    right: 16px;
    top: 16px;
    transform: rotate(45deg);
    cursor: pointer;
  }

  &__close-button:hover {
    color: #fff;
  }
}

/*
 *  Next
 */
.slide-out-next {
  animation: slide-out-next .2s forwards;
}

.slide-in-next {
  animation: slide-in-next .3s forwards;
}

@keyframes slide-out-next {
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(-80px, 0); }
}

@keyframes slide-in-next {
  0% { opacity: 0; transform: translate(80px, 0); }
  100% { opacity: 1; transform: translate(0, 0); }
}


/*
 *  Prev
 */

.slide-out-prev {
  animation: slide-out-prev .2s forwards;
}

.slide-in-prev {
  animation: slide-in-prev .3s forwards;
}

@keyframes slide-out-prev {
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(80px, 0); }
}

@keyframes slide-in-prev {
  0% { opacity: 0; transform: translate(-80px, 0); }
  100% { opacity: 1; transform: translate(0, 0); }
}


/*
 *  Scale-next
 */
.scale-out-next {
  animation: scale-out-next .4s forwards;
}

.scale-in-next {
  animation: scale-in-next .5s forwards;
}

@keyframes scale-out-next {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.1); }
}

@keyframes scale-in-next {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

/*
 *  Spinner
 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  51% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>