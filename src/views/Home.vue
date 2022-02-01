<template>
  <div class="home">
    <HelloWorld
      v-if="$isFeatureVisible('feature/id1')"
      msg="Welcome to Your Vue.js App (feature/id1)"
    />

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
import feature from '@/featureToggles';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    feature,
  },
};
</script>
