<template>
  <div class="container">
    <div>
      <app-server-status></app-server-status>
    </div>
    <hr />

    <div>
      <app-server-list></app-server-list>
    </div>

    <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import ServerStatus from "./components/ServerStatus.vue";
import ServerList from "./components/ServerList.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    "app-server-status": ServerStatus,
    "app-server-list": ServerList,
    "app-footer": Footer,
  },
};
</script>

<style></style>
