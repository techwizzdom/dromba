import React from 'react';

import { H1 } from '../../components/core/Heading';

import RouteContainer from '../../components/RouteContainer';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

function Art() {
  return (
    <RouteContainer>
      <H1>We don't see enough art on an average day.</H1>

      <VerticalSpacing height={VerticalSpacingHeight.Giant} />

      <IndentContainer></IndentContainer>
    </RouteContainer>
  );
}

export default Art;
