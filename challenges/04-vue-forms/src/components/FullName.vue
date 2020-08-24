<template>
  <div>
    <div class="form-group">
      <label for="first-name">First Name</label>
      <input
        class="form-control"
        id="first-name"
        name="first-name"
        type="text"
        placeholder="input your first name"
        :value="firstName"
        @input="nameChanged(true, $event)"
      />
    </div>

    <div class="form-group">
      <label for="second-name">Last Name</label>
      <input
        class="form-control"
        id="second-name"
        name="second-name"
        type="text"
        placeholder="input your second name"
        :value="lastName"
        @input="nameChanged(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],

  methods: {
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.lastName + " " + event.target.value;
      }
      this.value = name;
      this.$emit("input", this.value);
    },
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    },
  },
};
</script>

<style scoped>
</style>