import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

interface IThemeToogleProps {
  toggleTheme: () => void;
}

const togglerContainerCss = (theme: any) => css`
  padding: 8px 8px;
  border: none;
  background-color: ${theme.backgroundColor};
  transition-property: background-color;
  transition-duration: 0.5s;
  height: 20px;
  width: 66px;
  position: relative;
  cursor: pointer;
`;

const switcherCss = (theme: any) => css`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: ${theme.themeToggleColor};
  margin-left: ${theme.isDark ? '28px' : '-8px'};
  transition-property: margin, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  position: absolute;
  z-index: 1;
  top: 0;
`;

const switcherLineCss = (theme: any) => css`
  position: absolute;
  z-index: 0;
  width: 36px;
  height: 8px;
  top: 6px;
  left: 10px;
  border-radius: 20px;
  background-color: ${theme.themeToggleLine};
`;

const ThemeToggle: React.FC<IThemeToogleProps> = (props: IThemeToogleProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div
      role="button"
      className={togglerContainerCss(theme)}
      onClick={() => props.toggleTheme()}
    >
      <div className={switcherCss(theme)} />
      <div className={switcherLineCss(theme)} />
    </div>
  );
};

export default ThemeToggle;
