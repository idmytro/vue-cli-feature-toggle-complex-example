import { FeatureToggleComponent as feature } from 'vue-feature-toggle';

// console.log(process.env);

export const isFeatureVisible = feature.isVisible;

export const initFeatureToggles = () => {
  feature.visibility('home/pink', true);
  feature.visibility('home/lime', false);
  feature.visibility('feature/about', true);
  feature.visibility('feature1', true);
  feature.visibility('feature2', process.env.VUE_APP_FEATURE2 === 'true');
};

export const currentFeatures = [
  'home/pink',
];

export default feature;
