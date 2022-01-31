import { FeatureToggleComponent as feature } from 'vue-feature-toggle';

// console.log(process.env);

export const isFeatureVisible = feature.isVisible;

const init = () => {
  feature.visibility('home/v1', !true);
  feature.visibility('home/v2', !false);
  feature.visibility('feature/about', true);
  feature.visibility('feature1', true);
  feature.visibility('feature2', process.env.VUE_APP_FEATURE2 === 'true');
};

export default init;
