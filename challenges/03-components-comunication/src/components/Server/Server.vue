<template>
  <li class="list-group-item" style="cursor: pointer" @click="serverSelect">
    Server #{{ id }}
  </li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: ["id"],
  methods: {
    serverSelect() {
      serverBus.$emit("serverSelected", this.server);
    }
  }
};
</script>

<style scoped></style>>
