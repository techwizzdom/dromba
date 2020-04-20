import React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

const mainContainer = (theme: any) => css`
  background-color: ${theme.backgroundColor};
  width: 100%;
  height: 100%;
  color: ${theme.textColor};
  transition-property: color, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`;

const MainContainer: React.FC = (props: any) => {
  const theme = React.useContext(ThemeContext);
  return <div className={mainContainer(theme)}>{props.children}</div>;
};

export default MainContainer;
