import { isFeatureVisible } from '@/featureToggles';

export default function util1() {
  if (isFeatureVisible('util1')) {
    console.log('utils1');
  } else {
    console.log('utils1 disabled');
  }
}
