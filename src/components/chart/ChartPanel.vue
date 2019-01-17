<template>
  <div class="container shadow is-mobile">
    <chart-summary
      :symbol="symbol"
      :changeValue="changeValue"
      :changePercent="changePercent"
      :currentValue="currentValue"
      :displayLineChart="displayLineChart"
      :toggleChart="handleToggleChart" />
      <chart :labels="labels" :tradingData="tradingData" :displayLineChart="displayLineChart"/>
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
import Chart from './FrappeChart';
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
    this.tradingValue('1d');
  },
  props: ['symbol'],
  data() {
    return {
      displayLineChart: true,
      dataRange: '1d',
      isLoading: false,
      labels: [],
      tradingData: [],
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
          const labels = [];
          data.forEach((lineItem) => {
            values.push(range === '1d' ? lineItem.average : lineItem.close);
            labels.push(range === '1d' ? lineItem.minute : lineItem.date);
          });
          this.tradingData = [{ values }];
          this.labels = labels;
          console.log(JSON.stringify(this.tradingData));
          console.log(JSON.stringify(this.labels));
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
<Paste>
.shadow {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin-top: auto;
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
