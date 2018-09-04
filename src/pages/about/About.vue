<template>
  <div class="tile is-parent is-info">
    <article class="tile is-child is-4">
            <figure class="image is-6by4 is-centered">
              <img src="../../assets/profile.jpg">
            </figure>
    </article>
    <article class="tile is-child notification is-white">
        <div class="content">
          <h1 class="title">Tall tile</h1>
          <p class="is-5">
            An engineer passionate
          </p>
        </div>
      </article>
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

