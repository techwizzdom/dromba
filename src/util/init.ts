import { initGoogleAnalytics } from './metrics';

export const init = () => {
  initGoogleAnalytics();
  document.body.style.backgroundColor = '#0A0A0A';
};
