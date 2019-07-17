<template>
  <div class="dashboard">
    <h1>Disk Monitoring</h1>
    <div class="card">
      <div class="title">sda1</div>
      <div class="pie" ref="chartDom"></div>
      <div class="chart">
        <div class="used">11.3GB</div>
        <div class="total">A total of 25GB</div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts"

export default {
  mounted() {
    const myChart = echarts.init(this.$refs.chartDom);
    const option = {
      title: {
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "90"
        }
        
      },
      color: ["rgba(176, 212, 251, 1)"],
      legend: {
        show: true,
        itemGap: 12
      },

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["15%", "20%"],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [
            {
              value: 60,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec" // 100% 处的颜色
                      }
                    ]
                  },
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              }
            },
            {
              name: "02",
              value: 40
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style>
.card {
  width: 250px;
  height: 200px;
  display: inline-block;
}
.title {
  font-size: 20px;
  padding: 30px 0 0 30px;
}
.pie {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.chart {
  display: inline-block;
  padding-left: 20px;
}
.used {
  font-size: 16px;
  padding-bottom: 10px;
}
.total {
  font-size: 12px;
}
</style>
