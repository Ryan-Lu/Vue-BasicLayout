<template>
  <div class="card" :style="styles">
    <div class="title">{{title}}</div>
    <div class="infoBox">
      <div class="pie" ref="chartDom"></div>
      <div class="info">
        <div class="used">{{used}}</div>
        <div class="total">{{total}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    color: {
      type: String
    },
    title: {
      type: String
    },
    used: {
      type: String
    },
    total: {
      type: String
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  computed: {
    styles() {
      return {
        background: this.color
      };
    }
  },
  mounted() {
    const myChart = echarts.init(this.$refs.chartDom);
    var option = {
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
        itemGap: 12,
        data: ["01", "02"]
      },

      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["50%", "80%"],
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
              value: this.percent,
              // name: '01',
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#E5FDE9" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#E5FDE9" // 100% 处的颜色
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
              // name: '02',
              value: 100 - this.percent
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
  box-shadow: 0px 0px 4px #333333;
  border-radius: 2px;
  padding-bottom: 20px;
}
.title {
  font-size: 22px;
  padding: 15px 0 15px 30px;
  border-bottom: 1px solid #b0c4de;
}
.infoBox {
  margin-top: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.pie {
  width: 100px;
  height: 100px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.used {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.total {
  font-size: 12px;
}
</style>
