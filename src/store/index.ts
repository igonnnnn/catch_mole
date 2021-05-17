import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);
function setMoleTimer(state: Record<string, any>) {
  return setInterval(() => {
    const array = Array.from({ length: state.row * state.col }, () => {
      return 0;
    });
    const totalCount: number = Math.floor(Math.random() * array.length) + 1;
    const bombCount: number = Math.round(totalCount * state.bombRate);
    const maxMoleCount: number = Math.floor(Math.random() * state.mole);
    const moleCount: number = (totalCount - bombCount > maxMoleCount) ? maxMoleCount : (totalCount - bombCount);
    for (let intA = 0; intA < moleCount + bombCount + 1; intA++) {
      const index = Math.floor(Math.random() * (state.col * state.row - 1));
      if (array[index] === 0) {
        if (intA < moleCount) {
          array[index] = 1;
        } else {
          array[index] = 2;
        }
      }
    }
    state.data = array;
  }, state.config);
}

export default new Vuex.Store({
  state: {
    row: 0,
    col: 0,
    mole: 0,
    score: 0,
    time: 60,
    countTimer: null as any,
    moleTimer: null as any,
    config: 2000,
    data: <number[]>[],
    start: false,
    pause: false,
    bombRate: 0.2,
  },
  mutations: {
    SET_ROW: (state, row) => {
      state.row = row;
    },
    SET_COL: (state, col) => {
      state.col = col;
    },
    SET_MOLE: (state, mole) => {
      state.mole = mole;
    },
    SET_SCORE: (state, score) => {
      if (score < 0) {
        if (state.score > 0) {
          state.score = state.score + score;
        }
      } else {
        state.score = state.score + score;
      }
    },
    SET_TIME: (state, time) => {
      state.time = time;
    },
    START_TIMER: (state) => {
      state.start = true;
      state.pause = false;
      state.countTimer = setInterval(() => {
        if (state.time > 0) {
          state.time--;
          if (state.time <= 20) {
            state.bombRate = 0.5;
            state.config = 1000;
          }
        } else {
          state.time = 0;
          state.config = 2000;
          state.bombRate = 0.2;
          clearInterval(state.countTimer);
          clearInterval(state.moleTimer);
          router.push("/result");
        }
      }, 1000);
      state.moleTimer = setMoleTimer(state);
    },
    PAUSE_TIMER: (state) => {
      state.pause = true;
      clearInterval(state.countTimer);
      clearInterval(state.moleTimer);
    },
    SET_MOLE_DATA: (state) => {
      state.start = false;
      state.pause = false;
      clearInterval(state.countTimer);
      clearInterval(state.moleTimer);
      state.data = Array.from({ length: state.row * state.col }, () => {
        return 0;
      });
    },
    CLEAR_TIMER: (state) => {
      state.start = false;
      state.pause = false;
      clearInterval(state.countTimer);
      clearInterval(state.moleTimer);
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_SCORE", 0);
      commit("SET_TIME", 60);
      commit("SET_MOLE_DATA");
    },
    setting({ commit }) {
      commit("SET_TIME", 60);
      commit("SET_MOLE_DATA");
    },
    startTimer({ commit }) {
      commit("SET_TIME", 60);
      commit("START_TIMER");
    },
    stopTimer({ commit }) {
      commit("CLEAR_TIMER");
    },
    pauseTimer({ commit }) {
      commit("PAUSE_TIMER");
    },
    resumeTimer({ commit }) {
      commit("START_TIMER");
    },
    count({commit}, cnt: number) {
      commit("SET_SCORE", cnt)
    }
  },
  getters: {
    row: (state) => state.row,
    col: (state) => state.col,
    mole: (state) => state.mole,
    score: (state) => state.score,
    time: (state) => state.time,
    start: (state) => state.start,
    pause: (state) => state.pause,
    data: (state) => state.data,
    config: (state) => state.config,
  },
});
