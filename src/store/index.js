import Vue from 'vue';
import Vuex from 'vuex';

import { isFeatureVisible } from '@/featureToggles';

console.log(
  'store',
  isFeatureVisible('feature/about'),
);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
