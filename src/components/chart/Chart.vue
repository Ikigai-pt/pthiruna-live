<template>
  <div class="container">
    <div v-if="displayLineChart">
      <trend
        :data="data"
        :gradient="['#ffbe88', '#ff93df']"
        auto-draw
        smooth>
      </trend>
    </div>
    <div v-else>
      <bars
        :data="data"
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

export default {
  name: 'ChartView',
  components: {
    Trend,
    Bars,
  },
  props: ['displayLineChart', 'data'],
};
</script>
