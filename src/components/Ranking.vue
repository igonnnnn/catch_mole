<template>
  <div class="ranking">
    <div class="title">{{ "Ranking" }}</div>
    <div class="ranking-header">
      <div class="no">{{ "No." }}</div>
      <div class="score">{{ "점수" }}</div>
      <div class="time">{{ "기록시간" }}</div>
    </div>
    <div v-for="n in 10" :key="'row_' + n" class="ranking-body">
      <div class="no">{{ n }}</div>
      <div class="score">{{ data[n - 1] !== undefined ? data[n - 1].score : "없음" }}</div>
      <div class="time">{{ data[n - 1] !== undefined ? data[n - 1].time : "없음" }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
  }
});
</script>
<style lang="scss" scoped>
.ranking {
  width: 100%;
  height: 100%;
  & div {
    width: 100%;
    display: flex;
    border-bottom: 1px solid black;
    font-size: 3vh;
    text-align: center;
    & div {
      display: block;
    }
    & .no {
      width: 12.5%;
    }
    & .score {
      width: 27.5%;
    }
    & .time {
      width: 60%;
    }
  }
  & .title {
    display: block;
    font-weight: bold;
    text-align: center;
  }
  & .ranking-header {
    font-weight: bold;
  }
}
</style>
