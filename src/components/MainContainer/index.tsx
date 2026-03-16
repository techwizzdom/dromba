import React, { useState } from 'react';
import { css } from 'emotion';
import { trackEvent } from '../../util/metrics';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import AbstractArt from '../AbstractArt';

interface IMainContainerProps {
  children: React.ReactNode;
}

const mainContainerCss = (theme: Theme) => css`
  position: relative;
  isolation: isolate;

  width: 100%;
  min-height: 100vh;

  background: ${theme.gradientBackground};
  color: ${theme.textColor};

  transition: color 0.4s ease, background 0.4s ease;
  padding-bottom: 84px;
  overflow-x: hidden;

  &::before,
  &::after {
    content: '';
    position: fixed;
    pointer-events: none;
    z-index: -1;
    filter: blur(80px);
    opacity: 0.5;
  }

  &::before {
    width: 420px;
    height: 420px;
    left: -80px;
    top: -120px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 212, 0, 0.58) 0%,
      rgba(255, 212, 0, 0) 70%
    );
  }

  &::after {
    width: 500px;
    height: 500px;
    right: -120px;
    top: -60px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 212, 0, 0.32) 0%,
      rgba(255, 212, 0, 0) 68%
    );
  }
`;

const appCss = (isArtVisible: boolean) => css`
  display: block;
  height: ${isArtVisible ? '100vh' : 'auto'};

  overflow: ${isArtVisible ? 'hidden' : 'visible'};
  opacity: ${isArtVisible ? 0 : 1};
  transition: opacity 0.5s ease-in-out;

  pointer-events: ${isArtVisible ? 'none' : 'auto'};
  padding: 0 16px;
`;

const MainContainer: React.FC<IMainContainerProps> = (
  props: IMainContainerProps,
) => {
  const { children } = props;

  const [isArtVisible, setIsArtVisible] = useState<boolean>(false);
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
            trackEvent(
              'Art Close',
              'Abstract art closed',
              Math.round((Date.now() - artStartTime - 1000) / 1000),
            );
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
