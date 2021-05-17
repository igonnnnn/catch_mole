<template>
  <div class="bomb" :class="className" @click="click" />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    show: { type: Boolean, required: true, default: false },
    pause: { type: Boolean, required: true, default: false },
    fast: { type: Boolean, required: true, default: false },
  },
  name: "Bomb",
  data() {
    return { hit: false };
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
    },
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
    height: 60%;
    animation-play-state: paused;
  }
  100% {
    visibility: none;
    background-image: url("../assets/bomb.png");
  }
}
@keyframes hideAnimation {
  0% {
    visibility: visible;
    z-index: 100;
    height: 30%;
  }
  100% {
    height: 0%;
  }
}
.bomb {
  background-image: url("../assets/bomb.png");
  height: 0%;
  background-size: 50%;
  left: 33%;
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
  height: 60%;
  animation-name: hideAnimation;
  animation-duration: 0.5s;
  background-image: url("../assets/mole_after_hit.png");
}
.show {
  animation-name: bombAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
}
.pause {
  animation-name: bombAnimation;
  animation-play-state: paused !important;
}
.fast {
  animation-duration: 1s;
}
</style>
