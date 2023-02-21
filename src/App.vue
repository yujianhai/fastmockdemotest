<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
