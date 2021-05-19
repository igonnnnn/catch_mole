<template>
  <div class="home">
    <header class="top">
      <h1>두더지 잡기</h1>
    </header>
    <main class="middle">
      <div>
        <label>열</label>:
        <input
          type="number"
          id="iptCol"
          ref="iptCol"
          :min="2"
          max="7"
          :value="$store.getters.col"
          @change="inputChange"
        />
      </div>
      <div>
        <label>행</label>:
        <input
          type="number"
          id="iptRow"
          ref="iptRow"
          :value="$store.getters.row"
          @change="inputChange"
        />
      </div>
      <div>
        <label>두더지</label>:
        <input
          type="number"
          id="iptMole"
          ref="iptMole"
          :value="$store.getters.mole"
          @change="inputChange"
        />
      </div>
      <button class="btn-start" type="button" @click="start">START</button>
    </main>
    <content class="background" />
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
        (this.$refs.iptCol as Vue & { focus: () => void }).focus();
        return false;
      }
      if (this.$store.getters.row < 2 || this.$store.getters.row > 7) {
        alert("행의 값은 2이상 7이하로 입력해주세요.");
        (this.$refs.iptRow as Vue & { focus: () => void }).focus();
        return false;
      }
      if (this.$store.getters.mole < 1) {
        alert("두더지의 값은 최소 1 이상으로 입력해주세요.");
        (this.$refs.iptMole as Vue & { focus: () => void }).focus();
        return false;
      } else {
        if (this.$store.getters.mole > (this.$store.getters.row * this.$store.getters.col / 2)) {
          alert("두더지의 값은 "+ Math.floor(this.$store.getters.row * this.$store.getters.col / 2).toString() + "이하로 입력해주세요.");
          (this.$refs.iptMole as Vue & { focus: () => void }).focus();
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
        this.$store.dispatch("setting").then(() => {
          this.$router.push("/main");
        });
      }
    }
  },
})
</script>
<style scoped lang="scss">
@keyframes background-animation {
  0% {
    background-position-y: 0%;
  }
  100% {
    background-position-y: 100%;
  }
}
.home {
  width: 99vw;
  height: 99vh;
  display: inline-block;
  position: relative;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: none;
  background-image: url("../assets/images/home_background.png");
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0.5;
  animation: background-animation;
  animation-duration: 3s;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.top {
  z-index: 100;
  position: absolute;
  width: 100%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 1vw;
  font-size: 100px;
  text-align: center;
  color: burlywood;
}
.middle {
  position: absolute;
  top: 55%;
  left: 25vw;
  width: 50%;
  z-index: 100;
  background-color: none;
  display: block;
  & div {
    font-size: 50px;
    font-weight: bold;
    width: 100%;
    display: inline-flex;
    border-bottom: 2px solid gray;
    & label {
      width: 50%;
      text-align: center;
    }
    & input {
      background: none;
      text-align: center;
      width: 50%;
      font-size: 50px;
      border: none;
      &:focus {
        outline: none;
      }
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  & .btn-start {
    margin-top: 5px;
    background-color: lightgray;
    font-size: 50px;
    font-weight: bold;
    border: none;
    width: 100%;
    height: 7vh;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
}
</style>
