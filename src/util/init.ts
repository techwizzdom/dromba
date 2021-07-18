import { Themes } from '../enums/Themes';
import { dark } from '../styles/dark';
import { light } from '../styles/light';

import { initGoogleAnalytics } from './metrics';

export const init = () => {
  initGoogleAnalytics();
  initializeBodyBackgroundColor();
};

const initializeBodyBackgroundColor = () => {
  const localTheme = window.localStorage.getItem('selectedTheme');

  if (localTheme) {
    if (localTheme === Themes.Dark) {
      document.body.style.backgroundColor = dark.gradientMedian;
    }

    if (localTheme === Themes.Light) {
      document.body.style.backgroundColor = light.gradientMedian;
    }
  } else {
    document.body.style.backgroundColor = light.gradientMedian;
  }
};
