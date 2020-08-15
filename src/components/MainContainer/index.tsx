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

const app = (isInitialLoad: boolean) => css`
  display: block;
  height: ${isInitialLoad ? '100vh' : 'auto'};

  overflow: ${isInitialLoad ? 'hidden' : 'visible'};
  opacity: ${isInitialLoad ? 0 : 1};
  transition: opacity 0.5s ease-in-out;

  pointer-events: ${isInitialLoad ? 'none' : 'auto'};
`;

const MainContainer: React.FC = (props: any) => {
  const { children } = props;

  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  const theme = React.useContext(ThemeContext);

  return (
    <div className={mainContainer(theme)}>
      {isInitialLoad ? (
        <LandingScreen onClick={() => setIsInitialLoad(false)} />
      ) : (
        <></>
      )}
      <div className={app(isInitialLoad)}>{children}</div>
    </div>
  );
};

export default MainContainer;
