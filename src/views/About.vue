<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
/* eslint-disable global-require */

import { isFeatureVisible } from '@/featureToggles';

// import '../styles/about-orange.css';
// import '../styles/about-cyan.css';

const aboutVisible = isFeatureVisible('feature/about');

console.log('aboutVisible', aboutVisible);

if (aboutVisible) require('../styles/about-orange.css');
if (!aboutVisible) require('../styles/about-cyan.css');

export default {
  name: 'About',
};
</script>
