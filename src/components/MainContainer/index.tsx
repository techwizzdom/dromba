import React, { useState } from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import LandingScreen from '../LandingScreen';

const mainContainer = (theme: any) => css`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: ${theme.backgroundColor};
  color: ${theme.textColor};

  transition-property: color, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`;

const app = (initialLoad: boolean) => css`
  display: block;

  opacity: ${initialLoad ? 0 : 1};
  transition: opacity 0.5s ease-in-out;

  pointer-events: ${initialLoad ? 'none' : 'auto'};
`;

const MainContainer: React.FC = (props: any) => {
  const { children } = props;

  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const theme = React.useContext(ThemeContext);

  return (
    <div className={mainContainer(theme)}>
      {initialLoad ? (
        <LandingScreen onClick={() => setInitialLoad(false)} />
      ) : (
        <></>
      )}
      <div className={app(initialLoad)}>{children}</div>
    </div>
  );
};

export default MainContainer;
