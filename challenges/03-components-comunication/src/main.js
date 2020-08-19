import Vue from "vue";
import App from "./App.vue";
import Server from "./components/Server/Server.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Servers from "./components/Server/Servers.vue";

Vue.component("app-server", Server);
Vue.component("app-server-details", ServerDetails);
Vue.component("app-server-servers", Servers);

export const serverBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
