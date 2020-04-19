import { useEffect, useState } from 'react';
import { Themes } from './enums/Themes';
import { light } from './styles/light';
import { dark } from './styles/dark';

export default () => {
  const [selectedTheme, setSelectedTheme] = useState<Themes | string>(
    Themes.Light,
  );

  const toggleTheme = () => {
    if (selectedTheme === Themes.Light) {
      window.localStorage.setItem('selectedTheme', Themes.Dark);
      setSelectedTheme(Themes.Dark);
    } else {
      window.localStorage.setItem('selectedTheme', Themes.Light);
      setSelectedTheme(Themes.Light);
    }
  };

  const theme = selectedTheme === Themes.Light ? light : dark;

  useEffect(() => {
    const localTheme = window.localStorage.getItem('selectedTheme');
    if (localTheme) {
      setSelectedTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme] as const;
};
