<template>
  <div class="home">
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
    <feature name="home/v1" tag="p">Feature home/v1 enabled</feature>
    <feature name="home/v2" tag="p">Feature home/v2 enabled</feature>
  </div>
</template>

<script>
/* eslint-disable global-require */

import { FeatureToggleComponent as feature } from 'vue-feature-toggle';
import { isFeatureVisible } from '@/featureToggles';
import HelloWorld from '@/components/HelloWorld.vue';

if (isFeatureVisible('home/v1')) require('../styles/home.v1.css');
if (isFeatureVisible('home/v2')) require('../styles/home.v2.css');

feature.showLogs();

feature.visibility('feature0', true);
feature.visibility('feature/id1', true);

export default {
  name: 'Home',
  components: {
    HelloWorld,
    feature,
  },
  created() {
    // console.log(this.$f('feature/id1'));
  },
};
</script>
