<template>
  <div class="card-box" :style="styles">
    <div class="card">
      <h2 class="title">{{title}}</h2>
      <div>
        <div class="pieChart">
          <div style="width: 100px; height: 100px;" ref="chartDom"></div>
        </div>
        <div class="info">
          <div class="large">{{large}}</div>
          <div class="desc">{{desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
    props: {
        color: {
            type: String,
            default: '#0097d6'
        },
        title: {
            type: String,
            default: ''
        },
        large: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        }
    },
    computed: {
        styles() {
            return {
                background: this.color
            }
        }
    },
  mounted() {
    const myChart = echarts.init(this.$refs.chartDom);
    // 指定图表的配置项和数据
    const option = {
      title: {
        text: "84%",
        subtext: "完成部门占比",
        x: "center",
        y: "center",
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "normal"
        },
        subtextStyle: {
          color: "rgba(255,255,255,.45)",
          fontSize: 12,
          fontWeight: "normal"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: "center",
        y: "bottom",
        data: ["rose3", "rose5", "rose6", "rose7", "rose8"]
      },
      calculable: true,
      series: [
        {
          name: "面积模式",
          type: "pie",
          radius: [20, 25],
          center: ["50%", "50%"],
          data: [
            {
              value: 34,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#f6e3a1"
                  },
                  {
                    offset: 1,
                    color: "#ff4236"
                  }
                ])
              }
            },
            {
              value: 52,
              name: "rose2",
              itemStyle: {
                color: "transparent"
              }
            }
          ]
        },
        {
          name: "面积模式",
          type: "pie",
          radius: [20, 25],
          center: ["50%", "50%"],
          data: [
            {
              value: 34,
              name: "吴际帅\n牛亚莉",
              itemStyle: {
                color: "transparent"
              }
            },
            {
              value: 52,
              name: "rose2",
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#348fe6"
                  },
                  {
                    offset: 1,
                    color: "#625bef"
                  }
                ])
              },
              label: {
                color: "rgba(255,255,255,.45)",
                fontSize: 14,
                formatter: "部门总量\n{a|52}个",
                rich: {
                  a: {
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: 30
                  }
                }
              }
            }
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<style>
.dashboard-box .card-box {
  display: inline-block;
  width: 250px;
}
.dashboard-box .card {
  box-shadow: 2px 2px 5px #333333;
  padding: 20px;
}
.dashboard-box .card .large {
  font-size: 16px;
}
.dashboard-box .card .desc {
  font-size: 12px;
}

.dashboard-box .card > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dashboard-box .card .title {
  margin: 0;
  padding-bottom: 12px;
  position: relative;
}
.dashboard-box .card .title::after {
  content: "";
  position: absolute;
  top: 100%;
  left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  border-bottom: 1px solid white;
}
</style>
