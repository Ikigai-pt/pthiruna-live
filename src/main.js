// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
// import VueFrappe from 'vue2-frappe';
// import 'buefy/lib/buefy.css';
import App from './App';
import router from './router';

// Vue.use(VueFrappe);
Vue.use(Buefy);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
