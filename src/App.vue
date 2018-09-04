<template>
  <div id="app" class="container is-fluid">
    <page-header></page-header>
    <main class="column is-11 is-offset-1">
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
//$text: #193449;
$basePrimary: #4A89BA;
$primary-invert: findColorInvert($basePrimary);

// Links
$tabs-link-hover-border-bottom-color: $basePrimary;
$tabs-link-color:$grey-dark;
$tabs-link-hover-color: $basePrimary;
$breadcrumb-item-color: $grey-dark;
$breadcrumb-item-hover-color: $basePrimary;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
