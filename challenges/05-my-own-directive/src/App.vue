<template>
  <div class="row">
    <h1>My Title is :{{ myText }}</h1>
    <button
      class="btn"
      v-customOn:click="changeTextColor"
      v-customOn:mouseover="changeBG"
      v-customOn:mouseleave="changeBGAgain"
    >My Own Clique Event</button>
    <hr />
    <div class="my-quarter" style="width: 100px; height: 100px; background-color: yellow"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myText: "Hello Pinguim",
      myColor: "red",
      mySecondColor: "yellow",
      mySecondText: "Hello Machine!",
    };
  },
  directives: {
    customOn: {
      bind(el, binding) {
        // el.onclick = function () {
        //   binding.value();
        // };

        console.log(el, binding);

        const type = binding.arg;
        const fn = binding.value;

        el.addEventListener(type, fn);
      },
    },
  },
  methods: {
    myOnClicked() {
      this.myText = this.mySecondText;
    },
    changeTextColor() {
      console.log(this);
      let h1 = this.$el.querySelector("h1");

      if (h1.style.color === this.myColor) {
        h1.style.color = this.mySecondColor;
      } else {
        h1.style.color = this.myColor;
      }
    },
    changeBG() {
      let myQuarter = this.$el.querySelector(".my-quarter");
      myQuarter.style.backgroundColor = this.myColor;
    },
    changeBGAgain() {
      let myQuarter = this.$el.querySelector(".my-quarter");
      myQuarter.style.backgroundColor = this.mySecondColor;
    },
  },
};
</script>

<style>
.row {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn {
  background-color: burlywood;
}
</style>
