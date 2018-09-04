<template>
  <div class="tile is-parent is-info">
    <article class="tile is-child is-4">
            <figure class="image is-6by4 is-centered">
              <img src="../../assets/profile.jpg">
            </figure>
    </article>
    <article class="tile is-child notification is-white">
        <div class="content has-text-centered is-5">
          <i>
          <br>
          <br>
            I believe and follow a profession where <br>
            work is <strong>fun</strong> <br>
            responsibility is <strong>empowerment</strong><br>
            quality is <strong>discipline</strong><br>
            agile process is a <strong>habit.</strong> <br>
            <br>
            <br>
            <br>
            <br>
            I thrive to work at a company where <br>
            learning <br>
            problem solving <br>
            and risk<br>
            is embraced as part of the <strong>culture.</strong><br>
        </i>
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
.content strong {
  color: #193449;
}
</style>

