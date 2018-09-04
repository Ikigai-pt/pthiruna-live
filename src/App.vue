<template>
  <div id="app" class="container">
    <page-header></page-header>
    <main>
      <router-view/>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/header/Header';
import PageFooter from '@/components/footer/Footer';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";
// Set your colors

$basePrimary: #7595a4;
$primary-invert: findColorInvert($basePrimary);

// Links
$breadcrumb-item-color: $grey-dark;
$breadcrumb-item-hover-color: $basePrimary;
$tabs-link-color:$grey-dark;
$tabs-link-hover-color: $basePrimary;
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
