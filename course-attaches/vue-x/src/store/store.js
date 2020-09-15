import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    increment: (state, payload) => {
      stateCounter++;
    },
    decrement: (state, payload) => {
      stateCounter -= payload;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit("increment", payload);
    },
    decrement: ({ commit }, payload) => {
      commit("decrement", payload);
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(function() {
        commit("increment");
      }, 1000);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(function() {
        commit("decrement");
      }, 1000);
    }
  }
});
