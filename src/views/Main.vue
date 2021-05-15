<template>
  <div>
    <div>
      <span>남은시간 : {{time}} 초</span>
	  <span>점수 : {{score}} 점</span>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {

  },
  data() {
    return {
      time: 0,
	  score: 0,
    }
  },
  methods: {
  },
})

</script>
