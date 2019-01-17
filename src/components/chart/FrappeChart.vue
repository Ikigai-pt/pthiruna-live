<template>
  <div class="container is-mobile">
    <vue-frappe
          id="test"
          :type="this.displayLineChart ? 'line' : 'bar'"
          :labels="labels"
          :lineOptions="{hideDots: 1}"
          :axisOptions="{yAxisMode: 'tick', xAxisMode: 'tick', xIsSeries: 1 }"
          :tooltipOptions="{ formatTooltipX: d => (d + '').toUpperCase()
            ,formatTooltipY: d => d + '$' }"
          :yMarkers="[{ label: 'Region', value: 40, type: 'line', options: { labelPos: 'left' } }]"
          :dataSets="tradingData"/>
  </div>
</template>
<script>
import VueFrappe from './Frappe';

export default {
  components: {
    VueFrappe,
  },
  props: ['tradingData', 'labels', 'displayLineChart'],
  data() {
    return {
      data: [{
        values: [25, 40, 30],
      }],
    };
  },
};
</script>
