import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stocks.js";
import portifolio from "./modules/portifolio.js";

// import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portifolio,
  },
});
