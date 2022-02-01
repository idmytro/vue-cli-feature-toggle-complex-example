<template>
  <div class="home" :class="{ 'conditional-class': true }">
    <HelloWorld
      v-if="$isFeatureVisible('feature/id1')"
      msg="Welcome to Your Vue.js App (feature/id1)"
    />
    <!--
    <HelloWorld
      v-if="$f('feature/id1')"
      msg="Welcome to Your Vue.js App (feature/id1)"
    />
    -->
    <HelloWorld
      v-if="!$isFeatureVisible('feature/id1')"
      msg="Welcome to Your Vue.js App (!feature/id1)"
    />

    <feature name="feature0" tag="p">Feature 0 enabled from Home.vue</feature>
    <feature name="feature1" tag="p">Feature 1 enabled from main.js</feature>
    <feature name="feature2" tag="p">Feature 2 enabled from .env and main.js</feature>
    <feature name="home/lime" tag="p">Feature home/lime enabled</feature>
    <feature name="home/pink" tag="p">Feature home/pink enabled</feature>
  </div>
</template>

<script>
/* eslint-disable global-require */
import feature, { isFeatureVisible } from '@/featureToggles';
import HelloWorld from '@/components/HelloWorld.vue';

// feature.showLogs();

// feature.visibility('home/pink', () => currentFeatures.includes('home/pink'));
// feature.visibility('home/lime', () => currentFeatures.includes('home/lime'));

require('@/styles/home-pink.css');
require('@/styles/home-lime.css');

export default {
  name: 'Home',
  components: {
    HelloWorld,
    feature,
  },
};
</script>

<style lang="scss">
// .conditional-class {
  // $path: '../styles/home-lime.css';
  // @import $path;
// }
</style>
