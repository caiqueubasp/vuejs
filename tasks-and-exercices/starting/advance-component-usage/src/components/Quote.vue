<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span>
        <slot name="subtitle">The Subtitle</slot>
      </span>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #000;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h1 {
  color: red;
}

title {
  font-style: italic;
}

span {
  color: orange;
}
</style>
