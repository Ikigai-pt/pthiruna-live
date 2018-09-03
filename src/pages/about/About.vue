<template>
<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-4">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class="image is-6by4 is-overlay">
              <img src="../../assets/profile.jpg">
            </figure>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-white">
        <div class="content">
          <h1 class="title">Tall tile</h1>
          <p class="is-5">
            An engineer passionate
            <!-- <vue-typer :text='["passionate","love","work"]' -->
            <!--   erase-style='backspace' caret-animation='solid' ></vue-typer> -->
            about
            <strong>
              <vue-typer :text='["design","coding","philosophy"]'
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
          <!-- <p class="subtitle">With even more content</p> -->
          <div class="content">
            <!-- Content -->
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'About',
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

