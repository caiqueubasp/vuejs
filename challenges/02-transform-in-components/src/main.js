import Vue from "vue";
import App from "./App.vue";
import ServerStatus from "./components/ServerStatus.vue";
import ServerList from "./components/ServerList.vue";
import Footer from "./components/Footer.vue";

Vue.component("app-server-status", ServerStatus);
Vue.component("app-server-list", ServerList);
Vue.component("app-footer", Footer);

new Vue({
  el: "#app",
  render: h => h(App)
});
