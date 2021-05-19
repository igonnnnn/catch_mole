<template>
  <div class="result">
    <header class="header">
      <span>최종점수 : {{ $store.getters.score }} 점</span>
    </header>
    <main class="main">
      <ranking :data="$store.getters.ranking" />
    </main>
    <footer class="footer">
      <button @click="restart">다시하기</button>
      <button @click="ready">처음으로</button>
    </footer>
    <content class="background" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Ranking from "@/components/Ranking.vue";
export default Vue.extend({
  components: { Ranking },
  methods: {
    restart() {
      this.$store.dispatch("setting");
      this.$router.push("/main");
    },
    ready() {
      this.$router.push("/");
    },
  },
})
</script>
<style lang="scss" scoped>
.result {
  position: relative;
  display: inline-block;
  width: 100vw;
  height: 100vh;
  & .header {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    height: 10%;
  }
  & .main {
    width: 100%;
    height: 80%;
  }
  & .footer {
    position: absolute;
    height: 10%;
    left: 30vw;
    bottom: 1vh;
    & button {
      width: 20vw;
      height: 5vh;
      background-color: lightgray;
      font-weight: bold;
      border: none;
      &:hover {
        background-color: grey;
        color: white;
      }
    }
    & :last-child {
      margin-left: 10px;
    }
  }
  &.background {

  }
}
</style>
