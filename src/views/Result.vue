<template>
  <div>
    <div>
      <h3>최종점수</h3>
      <h3>{{$store.getters.score}} 점</h3>
    </div>
    <div>
      <button @click="restart">다시하기</button>
      <button @click="ready">처음으로</button>
    </div>
    <div>
      랭킹
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      total_score: 0,
      col: 0,
      mole: 0,
    }
  },
  methods: {
    restart() {
      this.$store.dispatch("setting");
      this.$router.push("/main");
    },
    ready() {
      this.$router.push("/");
    }
  },
})

</script>
