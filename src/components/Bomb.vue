<template>
  <div class="bomb show" :class="className" @click="click"/>
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
  name: 'Bomb',
  data() {
    return {
      isShow: this.show,
      hit: false
    }
  },
  computed: {
    className(): Record<string, unknown> {
      return {
        'show': this.show,
        'hit' : this.hit
      }
    }
  },
  methods: {
    click() {
      if (!this.hit) {
        this.hit = true;
        this.$emit("");
      }
    }
  },
})
</script>
<style lang="scss" scoped>
@keyframes bombAnimation {
  0% {
    visibility: visible;
    z-index: 9999;
  }
  50% {
    height: 60%;
  }
  100% {
    visibility: none;
  }
}
.bomb {
  background-image: url("../assets/mole.png");
  height: 0%;
  background-size: cover;
  background-repeat: no-repeat;
  visibility: hidden;
  position: absolute;
  left: 25%;
  bottom: 50%;
  width: 50%;
  visibility: none;
  animation-name: bombAnimation;
  &:hover {
    cursor: url("../assets/hammer.png");
  }
}
.hit {
  background-image: url("../assets/mole_after_hit.png");
}
.show {
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-play-state: running;
  animation-fill-mode: backwards;
}
</style>
