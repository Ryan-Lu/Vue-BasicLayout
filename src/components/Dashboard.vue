<template>
  <div class="dashboard">
    <div class="first-title">
      <h1>Disk Monitoring</h1>
      <span>{{getUserInfo.userName}}</span>
      <img class="top-avatar" :src="getUserInfo.avatarUrl" alt />
    </div>
    <div>
      <Card
        :percent="percent1"
        :title="title1"
        :used="used1"
        :total="total1"
        color="linear-gradient(60deg, #20CFF1 0%, #1CD4F3 100%)"
      ></Card>
      <Card
        :percent="percent2"
        :title="title2"
        :used="used2"
        :total="total2"
        color="linear-gradient(60deg, #475ED5 0%, #7655E7 100%)"
      ></Card>
      <Card
        :percent="percent3"
        :title="title3"
        :used="used3"
        :total="total3"
        color="linear-gradient(60deg, #0B9CE8 0%, #185BCF 100%)"
      ></Card>
      <Card
        :percent="percent4"
        :title="title4"
        :used="used4"
        :total="total4"
        color="linear-gradient(60deg, #E46941 0%, #fe5196 100%)"
      ></Card>
    </div>
    <div class="second-title">
      <h1>IO Utilization</h1>
    </div>
    <div class="line-chart" ref="chartDom">
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { mapGetters } from "vuex";
import echarts from "echarts";


export default {
  components: {
    Card
  },
  data() {
    return {
      percent1: (11.3 / 25) * 100,
      percent2: (38 / 50) * 100,
      percent3: (23.4 / 25) * 100,
      percent4: (17.6 / 25) * 100,
      title1: "sda1",
      title2: "sda2",
      title3: "sda3",
      title4: "sda4",
      used1: "11.3GB",
      used2: "38GB",
      used3: "23.4GB",
      used4: "17.6GB",
      total1: "A total of 25GB",
      total2: "A total of 50GB",
      total3: "A total of 25GB",
      total4: "A total of 25GB"
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  mounted() {
    const myChart = echarts.init(this.$refs.chartDom);
    var option = {
    backgroundColor: '#2F4685',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#A9A9A9',
                opacity: 0.2,
            }
        },
        data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#A9A9A9',
                opacity: 0.2,
            }
        },
        axisTick: {
            show: false
        },

        position: 'bottom',
        offset: 20,
        
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#A9A9A9',
                opacity: 0.2,
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#A9A9A9',
                opacity: 0.2,
            }
        }
    }],
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(105, 19, 167, 0.6)'
                }, {
                    offset: 0.8,
                    color: 'rgba(105, 19, 167, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(105, 19, 167)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    }, {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(45, 222, 255, 0.6)'
                }, {
                    offset: 0.8,
                    color: 'rgba(45, 222, 255, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(45, 222, 255)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
    }, {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(123,104,238, 0.9)'
                }, {
                    offset: 0.8,
                    color: 'rgba(123,104,238, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(123,104,238)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }, ]
};
  myChart.setOption(option);
  }
};
</script>


<style>
.top-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  float: right;
  margin: 28px 10px;
  box-shadow: rgba(96, 96, 172, 0.8) 0px 0px 1px 2px;
}
h1 {
  font-size: 24px;
  font-weight: normal;
  display: inline-block;
}
.first-title > span {
  float: right;
  padding: 30px 30px 0 0;
  font-size: 14px;
}
.line-chart {
  width: 1000px;
  height: 400px;
  margin-left: 30px;
  margin-bottom: 30px;
}
</style>
