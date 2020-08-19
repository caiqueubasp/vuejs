<template>
  <div id="app">
    <div>
      <app-server></app-server>
    </div>
    <hr />

    <div>
      <app-server-details></app-server-details>
    </div>

    <hr />

    <div>
      <app-server-servers></app-server-servers>
    </div>
  </div>
</template>

<script>
import Server from "./components/Server/Server.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";
import Servers from "./components/Server/Servers.vue";

export default {
  componets: {
    "app-server": Server,
    "app-server-details": ServerDetails,
    "app-server-servers": Servers
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
