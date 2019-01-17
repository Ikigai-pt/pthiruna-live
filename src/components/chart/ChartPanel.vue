<template>
  <div class="container is-mobile shadow">
    <chart-summary
      :symbol="symbol"
      :changeValue="changeValue"
      :changePercent="changePercent"
      :currentValue="currentValue"
      :displayLineChart="displayLineChart"
      :toggleChart="handleToggleChart" />
      <chart :data="tradingData" :displayLineChart="displayLineChart"/>
      <settings
       :valueBeforeThreeMonths="valueBeforeThreeMonths"
       :valueBeforeOneMonth="valueBeforeOneMonth"
       :valueBeforeOneWeek="valueBeforeOneWeek"
       :yearHigh="yearHigh"
       :yearLow="yearLow"
       :dataRangeHandler="handleDataRange"
      />
  </div>
</template>

<script>
import axios from 'axios';
import Chart from './Chart';
import ChartSummary from './Summary';
import Settings from './Settings';

export default {
  name: 'ChartBox',
  components: {
    Chart,
    ChartSummary,
    Settings,
  },
  mounted() {
    this.tradingValue('3m');
  },
  props: ['symbol'],
  data() {
    return {
      displayLineChart: true,
      dataRange: '1d',
      tradingData: [],
      isLoading: false,
      yearLow: 100,
      yearHigh: 200,
      valueBeforeThreeMonths: 150,
      valueBeforeOneMonth: 120,
      valueBeforeOneWeek: 111,
      changePercent: 2,
      changeValue: 4,
      currentValue: 123,
    };
  },
  methods: {
    handleToggleChart() {
      this.displayLineChart = !this.displayLineChart;
    },
    handleDataRange(dataRange) {
      this.tradingValue(dataRange);
      this.dataRange = dataRange;
    },
    tradingValue(range) {
      const url = `https:\\/\\/api.iextrading.com/1.0/stock/${this.symbol}/chart/${range}`;
      this.isLoading = true;
      axios.get(url)
        .then(({ data }) => {
          const values = [];
          data.forEach((lineItem) => {
            values.push(range === '1d' ? lineItem.average : lineItem.close);
          });
          this.tradingData = values;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.shadow {
  border-width: 1px;
    border-style: solid;
    -webkit-border-image:
      -webkit-gradient(linear, 0 100%, 0 0, from(#ffbe88), to(rgba(0, 0, 0, 0))) 1 100%;
    -webkit-border-image:
      -webkit-linear-gradient(bottom, #ffbe88, rgba(0, 0, 0, 0)) 1 100%;
    -moz-border-image:
      -moz-linear-gradient(bottom, #ffbe88, rgba(0, 0, 0, 0)) 1 100%;
    -o-border-image:
      -o-linear-gradient(bottom, #ffbe88, rgba(0, 0, 0, 0)) 1 100%;
    border-image:
      linear-gradient(to top, #ffbe88, rgba(0, 0, 0, 0)) 1 100%;
  }
</style>
