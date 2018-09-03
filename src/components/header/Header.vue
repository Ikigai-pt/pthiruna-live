<template>
  <div class="container">
    <navbar></navbar>
  <section class="hero is-white is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
      </div>
    </div>
  </section>
  </div>
</template>
<script>
import Navbar from '@/components/navbar/NavBar';

export default {
  name: 'Header',
  components: {
    Navbar,
  },
};
</script>
