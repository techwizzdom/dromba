import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';

interface IThemeToogleProps {
  toggleTheme: () => void;
}

const togglerContainerCss = (theme: any) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  cursor: pointer;
`;

const sunIconCss = (theme: any) => css`
  width: ${theme.isDark ? '40px' : 0};
  height: ${theme.isDark ? '40px' : 0};

  transform: rotate(${theme.isDark ? 0 : '360deg'});
  transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease;
`;
const moonIconCss = (theme: any) => css`
  padding: 4px;
  width: ${theme.isDark ? 0 : '32px'};
  height: ${theme.isDark ? 0 : '32px'};

  transform: rotate(${theme.isDark ? 0 : '360deg'});
  transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease;
`;

const ThemeToggle: React.FC<IThemeToogleProps> = (props: IThemeToogleProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      role="button"
      className={togglerContainerCss(theme)}
      onClick={() => props.toggleTheme()}
    >
      <Sun className={sunIconCss(theme)} />
      <Moon className={moonIconCss(theme)} />
    </div>
  );
};

export default ThemeToggle;
