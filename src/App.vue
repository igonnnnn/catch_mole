<template>
  <div id="app">
    <router-view />
    <audio
      id="appAudio"
      ref="appAudio"
      src="./assets/audio/background.mp3"
      autoplay
      loop="loop"
      :muted="mute ? 'muted' : ''"
    />
    <button class="btn-audio" :class="mute ? 'mute' : ''" @click="audioClick" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { mute: false }
  },
  mounted() {
    (this.$refs.appAudio as Vue & { volume: number }).volume = 0.2;
  },
  methods: {
    audioClick() {
      if (!this.mute) {
        (this.$refs.appAudio as Vue & { volume: number }).volume = 0;
      } else {
        (this.$refs.appAudio as Vue & { volume: number }).volume = 0.2;
      }
      this.mute = !this.mute;
    }
  }
});
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
.btn-audio {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: none;
  background-image: url("./assets/images/play.png");
  cursor: pointer;
  z-index: 9999;
}
.mute {
  background-image: url("./assets/images/mute.png");
}
</style>
