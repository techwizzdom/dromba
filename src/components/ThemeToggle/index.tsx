import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

interface IProps {
  toggleTheme: any;
}

const togglerContainerCss = (theme: any) => css`
  padding: 2px;
  border: none;
  background-color: ${theme.backgroundColor};
  transition-property: background-color;
  transition-duration: 0.5s;
  height: 26px;
  width: 56px;
  outline: none;
  position: relative;
  cursor: pointer;
`;

const switcherCss = (theme: any) => css`
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: ${theme.themeToggleColor};
  margin-left: ${theme.isDark ? '30px' : '0'};
  transition-property: margin, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  position: absolute;
  z-index: 1;
  top: 4px;
`;

const switcherLineCss = (theme: any) => css`
  position: absolute;
  z-index: 0;
  width: 36px;
  height: 8px;
  top: 10px;
  left: 10px;
  border-radius: 20px;
  background-color: ${theme.themeToggleLine};
`;

const ThemeToggle: React.FC<IProps> = (props: IProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <button
      type="button"
      className={togglerContainerCss(theme)}
      onClick={() => props.toggleTheme()}
    >
      <div className={switcherCss(theme)} />
      <div className={switcherLineCss(theme)} />
    </button>
  );
};

export default ThemeToggle;
