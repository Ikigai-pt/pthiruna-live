<template>
  <section class="container has-text-centered">
    <div class="columns is-gapless is-mobile">

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

      <div class="right-aligned switch">
        <button-group :dataRangeHandler="dataRangeHandler"/>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonGroup from './ButtonGroup';

export default {
  name: 'ChartSettings',
  components: {
    ButtonGroup,
  },
  props: ['yearHigh', 'yearLow', 'valueBeforeThreeMonths', 'valueBeforeOneMonth', 'valueBeforeOneWeek', 'dataRange', 'dataRangeHandler'],
};
</script>

<style scoped>
.switch {
    padding: 5px;
    margin-right: 10px;
}
</style>
