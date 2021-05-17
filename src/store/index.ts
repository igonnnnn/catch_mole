import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    row: 0,
    col: 0,
    mole: 0,
    score: 0,
    time: 60,
    timer: null as any,
  },
  mutations: {
    SET_ROW:(state, row) => {
      state.row = row;
    },
    SET_COL: (state, col) => {
      state.col = col;
    },
    SET_MOLE: (state, mole) => {
      state.mole = mole;
    },
    SET_SCORE: (state, score) => {
      state.score = score;
    },
    SET_TIME: (state, time) => {
      state.time = time;
    },
    START_TIMER: (state) => {
      state.timer = setInterval(() => {
        if (state.time > 0) {
          state.time--;
        } else {
          state.time = 0;
        }
      }, 1000);
    },
    CLEAR_TIMER: (state) => {
      clearInterval(state.timer);
    },
  },
  actions: {
    init({ commit }) {
      commit("SET_ROW", 0);
      commit("SET_COL", 0);
      commit("SET_MOLE", 0);
      commit("SET_SCORE", 0);
      commit("SET_TIME", 60);
    },
    setting({ commit }, info) {
      commit("SET_ROW", info.row);
      commit("SET_COL", info.col);
      commit("SET_MOLE", info.mole);
    },
    startTimer({ commit }) {
      commit("SET_TIME", 60);
      commit("START_TIMER");
    },
    stopTimer({ commit }) {
      commit("CLEAR_TIMER");
    },
    resumeTimer({ commit }) {
      commit("START_TIMER");
    }
  },
  modules: {
    
  },
  getters: {
    row: (state) => state.row,
    col: (state) => state.col,
    mole: (state) => state.mole,
    score: (state) => state.score,
    time: (state) => state.time,
  }
});
