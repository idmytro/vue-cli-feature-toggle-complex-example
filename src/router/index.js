import Vue from 'vue';
import VueRouter from 'vue-router';
import { initFeatures, isFeatureVisible } from '@/featureToggles';
import Home from '../views/Home.vue';

initFeatures();

Vue.use(VueRouter);

// it works if it was inited in this file
// console.log('router', isFeatureVisible('feature/about'));

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

if (isFeatureVisible('feature/about')) {
  routes.push({
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
