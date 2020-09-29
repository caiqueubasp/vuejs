import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vuejs-axios-authenticati-873f5.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "123123123";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqInterceptors = axios.interceptors.request.use((config) => {
  console.log("Request Interceptors", config);

  return config;
});

const resInterceptors = axios.interceptors.response.use((res) => {
  console.log("Response Interceptors", res);

  return res;
});

axios.interceptors.request.eject(reqInterceptors);
axios.interceptors.response.eject(resInterceptors);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
