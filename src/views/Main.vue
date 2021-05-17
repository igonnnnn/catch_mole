<template>
  <div>
    <div>
      <span>남은시간 : {{ $store.getters.time }} 초</span> |
      <span>점수 : {{ $store.getters.score }} 점</span>
    </div>
    <board
      :row="3"
      :col="3"
      :start="isStart"
      :pause="isPaused"
      @hit="hit"
    />
    <div v-if="!isStart">
      <button type="button" @click="start">{{ "시작하기" }}</button>
    </div>
    <div v-else>
      <button v-if="!isPaused" type="button" @click="pause">{{ "일시정지" }}</button>
      <button v-else type="button" @click="resume">{{ "재개하기" }}</button>
      <button type="button" @click="stop">{{ "그만하기" }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Board from "@/components/Board.vue";
export default Vue.extend({
  components: { Board },
  data() {
    return {
      isStart: false,
      isPaused: false,
    };
  },
  mounted() {
    console.log(this)
  },
  methods: {
    start() {
      console.log("start");
      this.isStart = true;
      this.$store.dispatch("startTimer");
    },
    pause() {
      this.isPaused = true;
      this.$store.dispatch("stopTimer");
    },
    resume() {
      this.$store.dispatch("resumeTimer");
      this.isPaused = false;
    },
    stop() {
      console.log("stop");
    },
    hit(type: string) {
      console.log("hit");
    }
  },
})

</script>
