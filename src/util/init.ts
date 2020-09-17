import ReactGA from 'react-ga';

import { Themes } from '../enums/Themes';
import { dark } from '../styles/dark';
import { light } from '../styles/light';

export const init = () => {
  ReactGA.initialize('UA-177550269-1');

  const localTheme = window.localStorage.getItem('selectedTheme');

  if (localTheme === Themes.Dark) {
    document.body.style.backgroundColor = dark.backgroundColor;
  }

  if (localTheme === Themes.Light) {
    document.body.style.backgroundColor = light.backgroundColor;
  }
};
