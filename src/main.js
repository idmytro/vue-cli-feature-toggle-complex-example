import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initFeatureToggles, isFeatureVisible } from './featureToggles';

initFeatureToggles();

Vue.config.productionTip = false;
Vue.prototype.$f = isFeatureVisible;
Vue.prototype.$isFeatureVisible = isFeatureVisible;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
