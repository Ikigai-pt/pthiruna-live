<template>
    <section class="container is-small">
      <div class="columns is-gapless is-mobile has-text-centered">
        <div class="column">
            <p class="heading">{{symbol}}</p>
            <p class="heading">{{currentValue}}</p>
        </div>
        <div class="column">
            <p class="heading">change %</p>
            <p class="heading">{{changePercent}}</p>
        </div>
        <div class="column">
            <p class="heading">change $</p>
            <p class="heading">{{changeValue}}</p>
        </div>
        <div class="right-aligned">
          <b-switch class="switch" size="is-small" :value="true"
                    @input="toggleChart">
                    {{ displayLineChart? 'Line' : 'Bar' }}
          </b-switch>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Summary',
  props: ['symbol', 'currentValue', 'changeValue', 'changePercent', 'displayLineChart', 'toggleChart'],
};
</script>

<style scoped>
.switch {
    padding: 5px;
    margin-right: 10px;
}
</style>

