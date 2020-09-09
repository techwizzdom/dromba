import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import AbstractArt from '../AbstractArt';

interface IMainContainerProps {
  children: React.ReactNode;
}

const mainContainerCss = (theme: Theme) => css`
  position: relative;

  width: 100%;
  height: 100%;

  background-color: ${theme.backgroundColor};
  color: ${theme.textColor};

  transition-property: color, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
`;

const appCss = (isArtVisible: boolean) => css`
  display: block;
  height: ${isArtVisible ? '100vh' : 'auto'};

  overflow: ${isArtVisible ? 'hidden' : 'visible'};
  opacity: ${isArtVisible ? 0 : 1};
  transition: opacity 0.5s ease-in-out;

  pointer-events: ${isArtVisible ? 'none' : 'auto'};
`;

const MainContainer: React.FC<IMainContainerProps> = (
  props: IMainContainerProps,
) => {
  const { children } = props;

  const [isArtVisible, setIsArtVisible] = useState<boolean>(true);
  const artStartTime = Date.now();

  const theme = React.useContext(ThemeContext);

  return (
    <div className={mainContainerCss(theme)}>
      {isArtVisible ? (
        <AbstractArt
          title="What shall we create?"
          subtitle="Click anywhere to start"
          onClick={() => {
            setIsArtVisible(false);
            ReactGA.event({
              category: 'Abstract Art',
              action: 'User closed Abstract art',
              value: Date.now() - artStartTime,
            });
          }}
        />
      ) : (
        <></>
      )}
      <div className={appCss(isArtVisible)}>{children}</div>
    </div>
  );
};

export default MainContainer;
