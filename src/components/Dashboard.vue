<template>
  <div class="dashboard">
    <h1>Disk Monitoring</h1>
    <div class="card">
      <div class="title">sda1</div>
      <div class="pie" ref="chartDom"></div>
      <div class="info">
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
    var option = {
    title: {
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '90'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        show: true,
        itemGap: 12,
        data: ['01', '02']
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '80%'],
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
        data: [{
            value: 60,
            // name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            // name: '02',
            value: 40
        }]
    }]
}
    myChart.setOption(option);
  }
};
</script>

<style>
.card {
  width: 250px;
  height: 200px;
  display: inline-block;
  margin-left: 30px;
  background-image: linear-gradient(120deg, #428fc2 0%, #66a6ff 100%);
  box-shadow:0px 0px 4px #333333;
  border-radius: 2px;
  position: absolute;
}
.title {
  font-size: 20px;
  padding: 20px 0 20px 30px;
  border-bottom: 1px solid rgb(209, 208, 208);
}
.pie {
  display: inline-block;
  padding-top: 15px;
  padding-left: 10px;
  width: 100px;
  height: 100px;
}
.info {
  display: inline-block;
  padding-left: 20px;
  padding-bottom: 40px;
  position: relative;
  top: -30px;

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
