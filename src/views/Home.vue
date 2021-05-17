<template>
  <div>
    <div>
      {{"메인이미지"}}
    </div>
    <div>
      <span>열</span>
      <input
        type="number"
        id="iptCol"
        ref="iptCol"
        :value="$store.getters.col"
        @change="inputChange"
      />
      <span>행</span>
      <input
        type="number"
        id="iptRow"
        ref="iptRow"
        :value="$store.getters.row"
        @change="inputChange"
      />
      <span>두더지</span>
      <input
        type="number"
        id="iptMole"
        ref="iptMole"
        :value="$store.getters.mole"
        @change="inputChange"
      />
      <button type="button" @click="start">시작</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mounted() {
    this.$store.dispatch("init");
  },
  methods: {
    validation() {
      if (this.$store.getters.col < 2 || this.$store.getters.col > 7) {
        alert("열의 값은 2이상 7이하로 입력해주세요.");
        this.$refs.iptCol.focus();
        return false;
      }
      if (this.$store.getters.row < 2 || this.$store.getters.row > 7) {
        alert("행의 값은 2이상 7이하로 입력해주세요.");
        this.$refs.iptRow.focus();
        return false;
      }
      if (this.$store.getters.mole < 1) {
        alert("두더지의 값은 최소 1 이상으로 입력해주세요.");
        this.$refs.iptMole.focus();
        return false;
      } else {
        if (this.$store.getters.mole > (this.$store.getters.row * this.$store.getters.col / 2)) {
          alert("두더지의 값은 " +  Math.floor(this.$store.getters.row * this.$store.getters.col / 2).toString() + "이하로 입력해주세요.");
          this.$refs.iptMole.focus();
          return false;
        }
      }
      return true;
    },
    inputChange(e: any) {
      switch (e.target.id) {
        case "iptCol":
          this.$store.commit("SET_COL", parseInt(e.target.value));
          break;
        case "iptRow":
          this.$store.commit("SET_ROW", parseInt(e.target.value));
          break;
        case "iptMole":
          this.$store.commit("SET_MOLE", parseInt(e.target.value));
          break;
        default:
          break;
      }
    },
    start() {
      if (this.validation()) {
        console.log("start");
      }
    }
  },
})
</script>
<style scoped lang="scss">

</style>
