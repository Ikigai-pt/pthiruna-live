<template>
  <section class="container">
    <div class="columns is-gapless is-multiline is-mobile">
      <chart-panel class="column" symbol="aapl"> </chart-panel>
      <chart-panel class="column" symbol="tsla"> </chart-panel>
      <chart-panel class="column" symbol="amd"> </chart-panel>
      <chart-panel class="column" symbol="nflx"> </chart-panel>
    </div>
  </section>
</template>

<script>
import ChartPanel from '@/components/chart/ChartPanel';

export default {
  name: 'Trading',
  components: {
    ChartPanel,
  },
};
</script>
