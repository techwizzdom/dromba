import React, { useState } from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import { H1 } from '../../components/core/Heading';

import RouteContainer from '../../components/RouteContainer';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';
import AbstractArt from '../../components/AbstractArt';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

const artCss = (isInitialLoad: boolean) => css`
  display: block;

  ${isInitialLoad ? 'overflow: hidden;' : ''};
  ${isInitialLoad ? 'opacity: 0;' : ''};
  transition: opacity 0.5s ease-in-out;

  ${isInitialLoad ? 'pointer-events: none;' : ''};
`;

const artButtonCss = (theme: Theme) => css`
  display: block;

  margin: 0 8px 0 auto;
  padding: 2px;
  border-radius: 2px;

  font-size: 20px;
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
        <AbstractArt
          isRandomArtEnabled={true}
          onClick={() => setIsArtEnabled(false)}
        />
      ) : (
        <></>
      )}

      <div className={artCss(isArtEnabled)}>
        <H1>Just</H1>

        <VerticalSpacing height={VerticalSpacingHeight.Giant} />

        <IndentContainer>
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
