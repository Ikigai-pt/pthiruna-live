<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from 'LineChart'

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null
  }),
  async mounted () {
    this.loaded = false
      try {
        const { stock } = await fetch('https://api.iextrading.com/1.0/stock/tsla/chart/1d')
        this.chartData = stock
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
  }
}
</script>