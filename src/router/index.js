import Vue from 'vue';
import VueRouter from 'vue-router';
import { initFeatureToggles, isFeatureVisible } from '@/featureToggles';
import Home from '../views/Home.vue';
// import About from '../views/About.vue';

initFeatureToggles();

Vue.use(VueRouter);

console.log(
  'router',
  isFeatureVisible('feature/about'),
);

// feature.visibility('feature/about', true);

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
