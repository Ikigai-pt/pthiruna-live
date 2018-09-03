<template>
  <section class="section is-primary" id="footer">
    <div class="container">
    <hr>
      <p class="is-5 has-text-centered">
        <strong>
          Comparision is the death of
          <vue-typer :text='["joy","coding","philosophy"]'
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
        </strong>
      </p>
    </div>
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Footer',
  components: {
    VueTyper,
  },
};
</script>

<style>
.vue-typer .custom.char {
  color: #3F51B5;
  background-color: white;
}
.vue-typer .custom.caret {
  width: 2px;
  background-color: #3F51B5;
}

</style>
