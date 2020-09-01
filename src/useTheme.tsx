import { useEffect, useState } from 'react';
import { Themes } from './enums/Themes';
import { light } from './styles/light';
import { dark } from './styles/dark';
import { Theme } from './styles';

export default () => {
  const [selectedTheme, setSelectedTheme] = useState<Themes | string>(
    Themes.Light,
  );

  const toggleTheme = () => {
    if (selectedTheme === Themes.Light) {
      window.localStorage.setItem('selectedTheme', Themes.Dark);
      document.body.style.backgroundColor = dark.backgroundColor;
      setSelectedTheme(Themes.Dark);
    } else {
      window.localStorage.setItem('selectedTheme', Themes.Light);
      document.body.style.backgroundColor = light.backgroundColor;
      setSelectedTheme(Themes.Light);
    }
  };

  const theme: Theme = selectedTheme === Themes.Light ? light : dark;

  useEffect(() => {
    const localTheme = window.localStorage.getItem('selectedTheme');
    if (localTheme) {
      setSelectedTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme] as const;
};
