<template>
  <div>
    <div>
      {{"메인이미지"}}
    </div>
    <div>
      <span>열</span>
      <input type="text" :value="col" />
      <span>행</span>
      <input type="text" :value="row" />
      <span>두더지</span>
      <input type="text" :value="mole" />
      <button type="button">시작</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      row: 0,
      col: 0,
      mole: 0,
    }
  },
  methods: {
  },
})
</script>
<style scoped lang="scss">
</style>
