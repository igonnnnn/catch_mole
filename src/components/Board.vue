<template>
  <div class="board">
    <div
      v-for="row_index in row"
      :key="'row_' + row_index"
      class="row"
      :class="className"
      :style="'height: ' + String(80 / row) + 'vh'"
    >
      <div
        v-for="col_index in col"
        :key="'cell_' + row_index + '_' + col_index"
        class="cell"
      >
        <img src="../assets/ground.png" class="ground" />
        <mole
          :show=" start && data[(row_index - 1) * col + (col_index - 1)] === 1"
          :pause="pause"
          :fast="fast"
          @onclick="$emit('count', 1)"
        />
        <bomb
          :show="start && data[(row_index - 1) * col + (col_index - 1)] === 2"
          :pause="pause"
          :fast="fast"
          :index="(row_index - 1) * col + (col_index - 1)"
          @onclick="$emit('count', -1)"
        />
      </div>
    </div>
    <div id="paused_div" :class="className" />
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
    data: { type: Array, required: true, default: () => [] },
    start: { type: Boolean, required: true, default: false },
    pause: { type: Boolean, required: true, default: false },
    fast: { type: Boolean, required: true, default: false },
  },
  computed: {
    className(): Record<string, unknown> {
      return { show: this.pause };
    },
  },
});
</script>
<style lang="scss" scoped>
.board {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 80vh;
}
.row {
  display: flex;
  width: 100%;
}
.cell {
  display: inline-block;
  position: relative;
  border: 1px solid black;
  width: 100%;
}
.ground {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
#paused_div {
  top: 0;
  left: 0;
  display: none;
  position: absolute;
  width: 100%;
  height: inherit;
  background-color: black;
  opacity: 0.5;
  z-index: 9999;
  &.show {
    display: block !important;
  }
}
</style>
