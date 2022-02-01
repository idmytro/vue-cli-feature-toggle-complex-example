import { FeatureToggleComponent as feature } from 'vue-feature-toggle';

export const currentFeatures = {
  'home/pink': true,
  'home/lime': false,
  'feature/about': true,
  feature1: true,
  feature2: process.env.VUE_APP_FEATURE2 === 'true',
};

export const isFeatureVisible = feature.isVisible;

// export const isFeature

export const initFeatureToggles = () => {
  console.log('init FT');

  // feature.visibility('home/pink', true);
  // feature.visibility('home/lime', false);
  // feature.visibility('feature/about', true);
  // feature.visibility('feature1', true);
  // feature.visibility('feature2', process.env.VUE_APP_FEATURE2 === 'true');

  Object.entries(currentFeatures).forEach(([key, value]) => {
    // console.log(key, value);
    feature.visibility(key, value);
  });
};

export default feature;
