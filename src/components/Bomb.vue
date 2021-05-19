<template>
  <div class="bomb" :class="className" @click="click" />
</template>

<script lang="ts">
import Vue from "vue";
import ItemMixin from "../mixin/ItemMixin";

export default Vue.extend({
  mixins: [ItemMixin],
  name: "Bomb",
});
</script>

<style lang="scss" scoped>
@keyframes bombAnimation {
  0% {
    visibility: visible;
    z-index: 2000;
  }
  50% {
    height: 60%;
    animation-play-state: paused;
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
  background-image: url("../assets/images/bomb.png");
  height: 0%;
  background-size: cover;
  left: 33%;
  background-repeat: no-repeat;
  visibility: hidden;
  position: absolute;
  bottom: 10%;
  width: 50%;
  &:hover {
    cursor: pointer;
  }
}
.hit {
  height: 60%;
  animation-name: hideAnimation;
  animation-duration: 0.5s;
  background-image: url("../assets/images/after_bomb.png");
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
