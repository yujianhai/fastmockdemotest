<template>
  <div>
    用水量
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import { getWaterData } from "@/api/api";
export default {
  data() {
    return {
      age: 0,
    };
  },
  methods: {
    async initCharts() {
      this.age = await this.getData();
      let chart = this.$echarts.getInstanceByDom(this.$refs.chart);
      if (chart) {
        chart.clear();
      } else {
        chart = this.$echarts.init(this.$refs.chart);
      }
      chart.setOption(this.getOption());
    },
    getOption() {
      const data = this.age;
      const option = {
        title: {
          text: data + "%",
          textStyle: {
            color: "#2A95F9",
            fontSize: 24,
          },
          itemGap: 20,
          left: "center",
          top: "center",
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          // 隐藏刻度线
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        polar: [
          {
            center: ["50%", "50%"], //中心点位置
            radius: "100%", //图形大小
          },
        ],
        series: [
          {
            type: "bar",
            data: [data],
            showBackground: true,
            polarIndex: 0,
            backgroundStyle: {
              color: "#f0f2f6",
              borderWidth: 25,
            },
            coordinateSystem: "polar",
            roundCap: true,
            barWidth: 25,
            itemStyle: {
              opacity: 1,
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#494CF3",
                },
                {
                  offset: 1,
                  color: "#2AB0FF",
                },
              ]),
              shadowBlur: 5,
              shadowColor: "#2A95F9",
            },
          },
        ],
      };
      return option;
    },
    async getData() {
      const res = await getWaterData();
      return new Promise((reslove) => {
        if (res.code === 200) {
          reslove(res.data.value);
        }
      });
    },
    polling() {
      this.initCharts();
      setInterval(() => {
        this.initCharts();
      }, 10000);
    },
  },
  mounted() {
    this.polling();
  },
};
</script>

<style scoped>
.chart {
  width: 400px;
  height: 400px;
}
</style>
