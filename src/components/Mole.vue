<template>
  <div class="mole" :class="className">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  name: 'Mole',
  data() {
    return {
      isShow: this.show
    }
  },
  computed: {
    className(): Record<string, unknown> {
      return {
        'show': this.show
      }
    }
  },
  mounted() {
    console.log(this.show)
  },
  methods: {
  },
})
</script>
<style lang="scss" scoped>
@keyframes bombAnimation {
  0% {
    visibility: visible;
    bottom: 0vh;
    opacity: 1;
  }
  50% {
    bottom: 100%;
    opacity: 1;
  }
  100% {
    bottom: 0vh;
    opacity: 1;
  }
}
.mole {
  visibility: hidden;
  position: absolute;
  width: 100%;
  bottom: 0vh;
  opacity: 0;
  animation-name: bombAnimation;
}
.hit {
  img {

  }
}
.show {
  background-image: url("../assets/mole.png");
  background-size: 100%;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
  animation-fill-mode: backwards;
}
</style>
