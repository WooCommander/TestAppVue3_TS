<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "MyButton",
})
export default class MyButton extends Vue {}
</script>


<style scoped>
.btn {
  font-size: 18px;
  padding: 5px 20px;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  background: rgb(140, 190, 23);
  cursor: pointer;
  transition: 0.5s;
}
.create-btn {
  background: rgb(13, 180, 221);
  margin: 10px 10px 0 0;
}
.create-btn:hover {
  background: rgb(12, 122, 224);
}
.btn:hover,
.btn:active {
  opacity: 1;
}
.delete-btn {
  background: rgb(207, 41, 41);
  opacity: 0.3;
}
</style>