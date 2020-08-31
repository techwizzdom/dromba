import React, { useState } from 'react';
import { css } from 'emotion';

import { H1, H5 } from '../../components/core/Heading';

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

function Art() {
  const [isArtEnabled, setIsArtEnabled] = useState<boolean>(false);

  return (
    <RouteContainer isNormalizeHeaderHeightEnabled={true}>
      {isArtEnabled ? (
        <LandingScreen onClick={() => setIsArtEnabled(false)} />
      ) : (
        <></>
      )}

      <div className={artCss(isArtEnabled)}>
        <H1>We don't see enough art on an average day.</H1>

        <VerticalSpacing height={VerticalSpacingHeight.Giant} />

        <IndentContainer>
          <H5>
            That's why we need this random art generator. According to the
            stats, there's 1 in XYZ posibility that it'll be the same.
          </H5>

          <button onClick={() => setIsArtEnabled(true)}>Art</button>
        </IndentContainer>
      </div>
    </RouteContainer>
  );
}

export default Art;
