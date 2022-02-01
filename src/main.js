import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { isFeatureVisible } from './featureToggles';
import util1 from './utils/util1';

util1();

// initFeatures(); // do it here if you don't need to add new routes

Vue.config.productionTip = false;
Vue.prototype.$f = isFeatureVisible;
// Vue.prototype.$isFeatureVisible = isFeatureVisible; // if this.$f is a bad idea

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
