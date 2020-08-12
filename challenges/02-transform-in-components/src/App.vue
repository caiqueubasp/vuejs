<template>
  <div class="container">
    <div>
      <app-server-status></app-server-status>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="index in 5">
            Server #{{ index }}
          </li>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <p>All Servers are managed here</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>

<style></style>
