<template>
  <div>
    <div>
      <span>남은시간 : {{ $store.getters.time }} 초</span> |
      <span>점수 : {{ $store.getters.score }} 점</span>
    </div>
    <board
      :row="$store.getters.row"
      :col="$store.getters.col"
      :start="$store.getters.start"
      :pause="$store.getters.pause"
      :data="$store.getters.data"
      :fast="$store.getters.config === 1000"
      @count="count"
    />
    <div v-if="!$store.getters.start">
      <button type="button" @click="start">{{ "시작하기" }}</button>
    </div>
    <div v-else>
      <button v-if="!$store.getters.pause" type="button" @click="pause">
        {{ "일시정지" }}
      </button>
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
      this.$store.dispatch("startTimer");
    },
    pause() {
      this.$store.dispatch("pauseTimer");
    },
    resume() {
      this.$store.dispatch("resumeTimer");
    },
    stop() {
      this.$store.dispatch("stopTimer");
      this.$router.push("/");
    },
    count(cnt: number) {
      console.log("hit");
      console.log(cnt);
      this.$store.dispatch("count", cnt);
    }
  },
})
</script>
