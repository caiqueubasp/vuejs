import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-http-5c82e.firebaseio.com/usuario.json";

new Vue({
  el: "#app",
  render: (h) => h(App),
});
