import * as React from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';

interface IThemeToogleProps {
  toggleTheme: () => void;
}

const togglerContainerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 22px rgba(5, 12, 42, 0.2);

  cursor: pointer;
`;

const sunIconCss = (theme: Theme) => css`
  position: absolute;
  width: ${theme.isDark ? '24px' : 0};
  height: ${theme.isDark ? '24px' : 0};
  opacity: ${theme.isDark ? 1 : 0};
  fill: ${theme.themeToggleColor};

  transform: rotate(${theme.isDark ? 0 : '120deg'}) scale(${theme.isDark ? 1 : 0});
  transition: transform 0.45s ease, width 0.35s ease, height 0.35s ease,
    opacity 0.35s ease;
`;
const moonIconCss = (theme: Theme) => css`
  position: absolute;
  width: ${theme.isDark ? 0 : '20px'};
  height: ${theme.isDark ? 0 : '20px'};
  opacity: ${theme.isDark ? 0 : 1};
  fill: ${theme.themeToggleLine};

  transform: rotate(${theme.isDark ? '-120deg' : 0}) scale(${theme.isDark ? 0 : 1});
  transition: transform 0.45s ease, width 0.35s ease, height 0.35s ease,
    opacity 0.35s ease;
`;

const ThemeToggle: React.FC<IThemeToogleProps> = (props: IThemeToogleProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div
      role="button"
      className={togglerContainerCss}
      onClick={() => props.toggleTheme()}
    >
      <Sun className={sunIconCss(theme)} />
      <Moon className={moonIconCss(theme)} />
    </div>
  );
};

export default ThemeToggle;
