<template>
  <section>
    <b-field>
      <b-radio-button v-model="dataRange"
          native-value="1d"
          value="dataRange"
          @input="dataRangeHandler('1d')"
          type="is-success">
        <p class="heading">1d</p>
      </b-radio-button>

      <b-radio-button v-model="dataRange"
          native-value="1m"
          @input="dataRangeHandler('1m')"
          type="is-success">
        <p class="heading">1m</p>
      </b-radio-button>

      <b-radio-button v-model="dataRange"
          native-value="3m"
          @input="dataRangeHandler('3m')"
          type="is-success">
        <p class="heading">3m</p>
      </b-radio-button>

      <b-radio-button v-model="dataRange"
          native-value="6m"
          :value="dataRange"
          @input="dataRangeHandler('6m')"
          type="is-success">
        <p class="heading">6m</p>
      </b-radio-button>
    </b-field>
  </section>
</template>
<script>
export default {
  name: 'MutliSelectButton',
  data() {
    return {
      dataRange: '1d',
    };
  },
  props: ['dataRangeHandler'],
};
</script>
