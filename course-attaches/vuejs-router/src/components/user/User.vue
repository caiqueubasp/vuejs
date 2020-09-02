<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <br />
    <p>Load ID: {{ id }}</p>
    <br />
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
