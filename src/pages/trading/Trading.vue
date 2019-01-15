<template>
  <main class="container">
    <div class="subtitle is-size-4">
      <strong>Stock</strong>
      </div>
      <p>vim graphql typing<br>
      </p>
      <chart-view :chartdata="chartdata" :options="options"></chart-view>
  </main>
</template>
<script>
import ChartView from '@/components/chart/Bar';

export default {
  name: 'Trading',
  components: {
    ChartView,
  },
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          borderColor: '#f87979',
          fill: false,
          data: [40, 20],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
};
</script>
