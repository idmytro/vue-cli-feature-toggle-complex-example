import { FeatureToggleComponent as feature } from 'vue-feature-toggle';

export const currentFeatures = {
  'home/pink': true,
  'home/lime': false,
  'feature/about': true,
  feature1: true,
  feature2: process.env.VUE_APP_FEATURE2 === 'true',
  helloworld2: true,
  util1: true,
};

export const initFeatures = () => {
  Object.entries(currentFeatures).forEach(([key, value]) => {
    // console.log(key, value);
    feature.visibility(key, value);
  });
};

export const isFeatureVisible = feature.isVisible;

export default feature;
