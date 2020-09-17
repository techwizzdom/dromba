import { Themes } from '../enums/Themes';
import { dark } from '../styles/dark';
import { light } from '../styles/light';

import { initGoogleAnalytics } from './metrics';

export const init = () => {
  initGoogleAnalytics();

  const localTheme = window.localStorage.getItem('selectedTheme');

  if (localTheme === Themes.Dark) {
    document.body.style.backgroundColor = dark.backgroundColor;
  }

  if (localTheme === Themes.Light) {
    document.body.style.backgroundColor = light.backgroundColor;
  }
};
