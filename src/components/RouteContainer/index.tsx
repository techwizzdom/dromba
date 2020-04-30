import React from 'react';
import { css } from 'emotion';
import { MediaBreakpoints } from '../../enums/MediaBreakpoints';

const routeContainer = css`
  padding: 80px 32px;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${MediaBreakpoints.Mobile}px) and (max-width: ${MediaBreakpoints.Tablet}px) {
    max-width: 576px;
  }
`;

const RouteContainer: React.FC = (props: any) => {
  const { children } = props;

  return <div className={routeContainer}>{children}</div>;
};

export default RouteContainer;
