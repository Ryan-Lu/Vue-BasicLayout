// 不赞成使用
<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    option: {
      handler(val) {
        this.chart.setOption(val)
      },
      deep: true
    }
  },
  created() {
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom)
      this.chart.setOption(this.option)
    }
  }
}
</script>
