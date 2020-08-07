new Vue({
  el: "#app",
  data: {
    value: "0",
    value2: "0",
  },
  methods: {
    showAlert: function () {
      alert("Hi");
    },
    changeValue: function (event) {
      this.value = event.target.value;
    },
  },
});
