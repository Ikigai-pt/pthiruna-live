<template>
  <div class="container">
    <about></about>
  <section class="hero is-white is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
      </div>
    </div>
  </section>
  </div>
</template>
<script>
import About from '../about/About';

export default {
  name: 'Home',
  components: {
    About,
  },
};
</script>
