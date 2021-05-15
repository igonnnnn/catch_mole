<template>
  <div>
    <div>
      <h3>최종점수</h3>
      <h3>{{total_score}} 점</h3>
    </div>
    <div>
      <button>다시하기</button>
	  <button>처음으로</button>
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
  },
})

</script>
