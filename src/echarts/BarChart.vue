<template>
  <div>
    用电量
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import { getElectData } from "@/api/api";
export default {
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    async initCharts() {
      this.dataList = await this.getData();
      let chart = this.$echarts.getInstanceByDom(this.$refs.chart);
      if (chart) {
        chart.clear();
      } else {
        chart = this.$echarts.init(this.$refs.chart);
      }
      chart.setOption(this.getOption());
    },
    getOption() {
      let xData = ["枯水期", "丰水期", "平水期"];
      let seriesData = this.dataList;
      let option = "";
      option = {
        grid: {
          left: "4%",
          right: "6%",
          bottom: "15%",
          top: "23%",
          containLabel: true,
        },
        backgroundColor: "white",
        color: ["#1DB750", "#C7F36A"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: seriesData,
          right: "4%",
          top: "10%",
          align: "left",
          icon: "rect",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            fontSize: 14,
            color: "#fff",
          },
        },
        xAxis: {
          showBackground: true,
          nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 14,
          },
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#555f58",
            },
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: "#fff", //坐标轴字颜色
            },
            margin: 15,
          },
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          splitLine: {
            //网格线
            show: false,
          },
          data: xData,
          type: "category",
        },
        yAxis: {
          name: "单位：mg/L",
          nameTextStyle: {
            fontSize: 14,
            color: "#fff",
          },
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "rgba(220,220,220,0.3)",
            },
          },
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            //网格线
            show: true,
            lineStyle: {
              color: "rgba(220,220,220,0.3)",
            },
          },
        },
        series: (function () {
          let series = [];
          for (let i = 0; i < seriesData.length; i++) {
            let serie = {
              name: seriesData[i].name,
              type: "bar",
              barWidth: "13%",
              data: seriesData[i].value,
            };
            series.push(serie);
          }
          return series;
        })(),
      };
      return option;
    },
    async getData() {
      const res = await getElectData();
      return new Promise((reslove) => {
        if (res.code === 200) {
          reslove(res.data);
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
