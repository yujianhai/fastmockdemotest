<template>
  <div class="left-screen">
    <PieChart />
    <BarChart />
  </div>
</template>

<script>
import PieChart from "@/echarts/PieChart.vue";
import BarChart from "@/echarts/BarChart.vue";
export default {
  components: {
    PieChart,
    BarChart,
  },
};
</script>

<style scoped>
.left-screen {
  position: absolute;
  left: 0;
  width: 400px;
  height: 100%;
  border: 1px solid red;
}
</style>
