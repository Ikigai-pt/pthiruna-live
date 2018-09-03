<template>
  <div id="app">
    <page-header></page-header>
    <router-view/>
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

