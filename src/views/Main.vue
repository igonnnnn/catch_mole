<template>
  <div class="main">
    <header class="top">
      <div>남은시간 : {{ $store.getters.time }} 초</div>
      <div>점수 : {{ $store.getters.score }} 점</div>
    </header>
    <main class="middle">
      <board
        :row="$store.getters.row"
        :col="$store.getters.col"
        :start="$store.getters.start"
        :pause="$store.getters.pause"
        :data="$store.getters.data"
        :fast="$store.getters.config === 1000"
        @count="count"
      />
    </main>
    <footer class="bottom">
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
    </footer>
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
      this.$store.dispatch("count", cnt);
    }
  },
})
</script>
<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  display: block;
  position: relative;
  & .top {
    width: 100%;
    height: 8%;
    display: flex;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
    & div {
      width: 50%;
    }
  }
  & .middle {
    height: 84%;
  }
  & .bottom {
    position: inherit;
    height: 8%;
    & div {
      width: 100%;
      & button {
        position: relative;
        margin-top: 5px;
        background-color: lightgray;
        font-weight: bold;
        border: none;
        width: 25vw;
        height: 5vh;
        &:hover {
          background-color: grey;
          color: white;
        }
      }
      & :only-child {
        position: absolute;
        left: 35vw !important;
      }
      & :first-child {
        position: absolute;
        left: 25vw;
      }
      & :last-child {
        position: absolute;
        left: 55vw;
      }
    }
  }
}
</style>
