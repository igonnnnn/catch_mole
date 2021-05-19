<template>
  <div class="mole" :class="className" @click="click" />
</template>

<script lang="ts">
import Vue from "vue";
import ItemMixin from "../mixin/ItemMixin";
export default Vue.extend({
  mixins: [ItemMixin],
  name: "Mole",
});
</script>
<style lang="scss" scoped>
@keyframes moleAnimation {
  0% {
    visibility: visible;
    z-index: 2000;
  }
  50% {
    height: 100%;
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
  background-image: url("../assets/images/mole.png");
  height: 0%;
  background-size: 75%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  visibility: hidden;
  position: absolute;
  bottom: 10%;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
}
.hit {
  height: 100%;
  animation-name: hideAnimation;
  animation-duration: 0.5s;
  background-image: url("../assets/images/mole_after_hit.png");
}
.show {
  animation-name: moleAnimation;
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
