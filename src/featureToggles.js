import { FeatureToggleComponent as feature } from 'vue-feature-toggle';

// console.log(process.env);

export const isFeatureVisible = feature.isVisible;

export const initFeatureToggles = () => {
  feature.visibility('home/pink', false);
  feature.visibility('home/lime', true);
  feature.visibility('feature/about', true);
  feature.visibility('feature1', true);
  feature.visibility('feature2', process.env.VUE_APP_FEATURE2 === 'true');
};

export default feature;
