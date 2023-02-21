<template>
  <div class="right-screen">
    <YiBiaoPan />
    <LineChart />
  </div>
</template>

<script>
import YiBiaoPan from "@/echarts/YiBiaoPan.vue";
import LineChart from "@/echarts/LineChart.vue";
export default {
  components: {
    YiBiaoPan,
    LineChart,
  },
};
</script>

<style scoped>
.right-screen {
  position: absolute;
  right: 0;
  width: 400px;
  height: 100%;
  border: 1px solid red;
}
</style>
