<template>
  <div class="wrapper">
    <NavBar />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "App",
})
export default class App extends Vue {}
</script>

<style>
.wrapper {
  width: 100%;
  overflow: hidden;
}
.container {
  max-width: 700px;
  margin: 0px auto;
  padding: 0 15px;
}
.content {
  margin: 95px 0 0 0;
}
.title {
  text-align: center;
  display: block;
  font-size: 36px;
  font-weight: 700;
}
.app-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
