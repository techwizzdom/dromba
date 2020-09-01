import React, { useState } from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import { H1 } from '../../components/core/Heading';

import RouteContainer from '../../components/RouteContainer';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';
import LandingScreen from '../../components/LandingScreen';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

const artCss = (isInitialLoad: boolean) => css`
  display: block;

  ${isInitialLoad ? 'overflow: hidden;' : ''};
  ${isInitialLoad ? 'opacity: 0;' : ''};
  transition: opacity 0.5s ease-in-out;

  ${isInitialLoad ? 'pointer-events: none;' : ''};
`;

const artButtonCss = (theme: Theme) => css`
  padding: 8px;
  border-radius: 2px;

  font-size: 20px;
  font-weight: 600;

  color: ${theme.hyperlinkColor};
  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

function Art() {
  const [isArtEnabled, setIsArtEnabled] = useState<boolean>(false);

  const theme = React.useContext(ThemeContext);

  return (
    <RouteContainer isNormalizeHeaderHeightEnabled={true}>
      {isArtEnabled ? (
        <LandingScreen
          isRandomArtEnabled={true}
          onClick={() => setIsArtEnabled(false)}
        />
      ) : (
        <></>
      )}

      <div className={artCss(isArtEnabled)}>
        <H1>Not exposed to enough art.</H1>

        <H1>This might help.</H1>

        <VerticalSpacing height={VerticalSpacingHeight.Giant} />

        <IndentContainer>
          <VerticalSpacing height={VerticalSpacingHeight.Medium} />

          <button
            className={artButtonCss(theme)}
            onClick={() => setIsArtEnabled(true)}
          >
            Dive in
          </button>
        </IndentContainer>
      </div>
    </RouteContainer>
  );
}

export default Art;
