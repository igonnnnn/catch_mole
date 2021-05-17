<template>
  <div class="board">
    <div v-for="row_index in row" :key="'row_' + row_index" class="row" :style="'height: ' + String(80/row) + 'vh' ">
      <div v-for="col_index in col" :key="'cell_' + row_index + '_' + col_index" class="cell">
        <div class="ground" />
        <mole :show="start && dataset[row_index - 1][col_index - 1]"/>
        <bomb :show="start && dataset[row_index - 1][col_index - 1]"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mole from "./Mole.vue";
import Bomb from "./Bomb.vue";

export default Vue.extend({
  components: { Mole, Bomb },
  name: "Board",
  props: {
    row: { type: Number, required: true, default: 0 },
    col: { type: Number, required: true, default: 0 },
    start: { type: Boolean, required: true, default: false },
    pause: { type: Boolean, required: true, default: false }
  },
  data() {
    return {
    }
  },
  computed: {
    dataset: {
      get() {
        let dataset: boolean[][] = [];
        for (let intA = 0; intA < this.row; intA++) {
          dataset.push([]);
          for (let intB = 0; intB < this.col; intB++) {
            if (intB === 0) {
              dataset[intA].push(true);
            } else {
              dataset[intA].push(false);
            }
          }
        }
        return dataset;
      }
    }
  },
  methods: {
  },
  mounted() {
    console.log(this.row)
    for (let intA = 0; intA < this.row; intA++) {
      this.dataset[intA]
      for (let intB = 0; intB < this.col; intB++) {
        if (intB === 0) {
          this.dataset[intA].push(true);
        } else {
          this.dataset[intA].push(false);
        }
      }
    }
  },
})

</script>
<style lang="scss" scoped>
.board {
  display: inline-block;
  width: 100%;
  height: 80vh;
}
.row {
  display: flex;
  width: 100%;
}
.cell {
  display: block;
  position: relative;
  width: 100%;
  background-color: aquamarine;
  background-image: url("../assets/ground.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0%;
}
// .ground {
//   position: absolute;
//   width: 100%;
//   height: 150px;
//   background-image: url("../assets/ground.png");
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
// }
</style>
