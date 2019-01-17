<template>
  <section class="section is-mobile">
    <div class="container">
        <div class="columns is-multiline">
          <div class="column" v-for="stock in watchList" :key="stock">
            <chart-panel :symbol="stock"> </chart-panel>
          </div>
        </div>
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
  data() {
    return {
      watchList: ['amd'],
    };
  },
};
</script>
