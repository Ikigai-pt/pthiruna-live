<template>
  <div class="container is-mobile" v-bind:style="{border: '1px solid #ffbe88'}">
      <section class="columns has-text-centered is-gapless">
        <div class="column">
            <p class="heading">{{symbol}}</p>
            <p class="heading">{{currentValue}}</p>
        </div>
        <div class="column">
          <p class="heading">{{yearHigh}}</p>
          <p class="heading">H-52</p>
        </div>
        <div class="column">
          <p class="heading">{{yearLow}}</p>
          <p class="heading">L-52</p>
        </div>
          <div class="column">
          <p class="heading">{{valueBeforeThreeMonths}}</p>
          <p class="heading">3-M</p>
        </div>
        <div class="column">
          <p class="heading">{{valueBeforeOneMonth}}</p>
          <p class="heading">1-M</p>
        </div>
        <div class="column">
          <p class="heading">{{valueBeforeOneWeek}}</p>
          <p class="heading">1-W</p>
        </div>
        <div class="column">
          <p class="heading">{{changePercent}}</p>
          <p class="heading">%</p>
        </div>
        <div class="column">
          <p class="heading">{{changeValue}}</p>
          <p class="heading">$</p>
        </div>
        <div class="column is-one-fifth">
          <b-switch size="is-small" :value="true"
                    @input="toggle">
                    {{ showLineChart? 'Line' : 'Bar' }}
          </b-switch>
        </div>
  </section>
    <div v-if="showLineChart">
      <trend
        :data="tradingData"
        :gradient="['#ffbe88', '#ff93df']"
        auto-draw
        smooth>
      </trend>
    </div>
    <div v-else>
      <bars
         :data="tradingData"
         :gradient="['#ffbe88', '#ff93df']"
         :barWidth="1"
         :growDuration="1">
      </bars>
    </div>
    </div>
</template>

<script>
import Trend from 'vuetrend';
import Bars from 'vuebars';
import axios from 'axios';

export default {
  name: 'ChartBox',
  components: {
    Trend,
    Bars,
  },
  mounted() {
    this.tradingValue('3m');
  },
  props: ['lineChart', 'symbol', 'data'],
  data() {
    return {
      showLineChart: true,
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
    toggle() {
      this.showLineChart = !this.showLineChart;
    },
    tradingValue(range) {
      const url = `https:\\/\\/api.iextrading.com/1.0/stock/${this.symbol}/chart/${range}`;
      this.isLoading = true;
      axios.get(url)
        .then(({ data }) => {
          data.forEach((lineItem) => {
            this.tradingData.push(range === '1d' ? lineItem.average : lineItem.close);
          });
          console.log(url);
          console.log(this.tradingData);
          this.isLoading = false;
        });
    },
  },
};
</script>
