<template>
  <div class="mole" :class="className" @click="click" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    show: { type: Boolean, required: true, default: false },
    pause: { type: Boolean, required: true, default: false },
    fast: { type: Boolean, required: true, default: false },
  },
  name: "Mole",
  data() {
    return {
      isShow: this.show,
      hit: false,
    };
  },
  computed: {
    className(): Record<string, unknown> {
      return {
        show: this.show && !this.hit,
        pause: this.pause,
        fast: this.fast,
        hit: this.hit,
      };
    },
  },
  beforeUpdate() {
    if (!this.show) {
      if (this.hit) this.hit = false;
    }
  },
  methods: {
    click() {
      if (!this.hit) {
        this.hit = true;
        this.$emit("onclick");
      }
    }
  },
})
</script>
<style lang="scss" scoped>
@keyframes bombAnimation {
  0% {
    visibility: visible;
    z-index: 100;
  }
  50% {
    height: 100%;
  }
  100% {
  }
}
@keyframes hideAnimation {
  0% {
    visibility: visible;
    z-index: 100;
    height: 50%;
  }
  100% {
    height: 0%;
  }
}
.mole {
  background-image: url("../assets/mole.png");
  height: 0%;
  background-size: 100%;
  background-repeat: no-repeat;
  visibility: hidden;
  position: absolute;
  bottom: 10%;
  width: 100%;
  &:hover {
    cursor: url("../assets/hammer.png");
  }
}
.hit {
  height: 100%;
  animation-name: hideAnimation;
  animation-duration: 0.5s;
  background-image: url("../assets/mole_after_hit.png");
}
.show {
  animation-name: bombAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
  animation-fill-mode: backwards;
}
.pause {
  animation-play-state: paused !important;
}
.fast {
  animation-duration: 1s;
}
</style>
