<template>
  <div class="container has-text-centered is-medium">
    <p class="is-size-6">
      -
      <vue-typer v-if="position === 'start'" :text="placeholder" class="is-size-5"
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='2000'
        :type-delay='200'
        :pre-erase-delay='4000'
        :erase-delay='50'
        erase-style='backspace'
        :erase-on-complete='true'
        caret-animation='blink'
        ></vue-typer>
      {{statement}}
    <vue-typer v-if="position === 'end'" :text="placeholder" class="is-size-5"
      :repeat='Infinity'
      :shuffle='false'
      initial-action='typing'
      :pre-type-delay='2000'
      :type-delay='200'
      :pre-erase-delay='4000'
      :erase-delay='50'
      erase-style='backspace'
      :erase-on-complete='true'
      caret-animation='blink'
      ></vue-typer>
      -
    </p>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'DQuote',
  components: {
    VueTyper,
  },
  props: ['statement', 'placeholder', 'position'],
};
</script>

<style>
.vue-typer .custom.char {
  color: #193449;
}
.vue-typer .custom.caret {
  width: 2px;
  background-color: #193449;
}

</style>
