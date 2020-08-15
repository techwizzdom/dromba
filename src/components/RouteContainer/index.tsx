import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';

const routeContainer = css`
  padding: 64px 16px 32px 184px;
  margin: 0 auto;

  max-width: 1072px;
  width: 100%;
  min-height: 100vh;

  @media ${Media.Tablet} {
    padding-left: 88px;
    max-width: 992px;
  }

  @media ${Media.Mobile} {
    padding: 32px 8px;
  }
`;

const RouteContainer: React.FC = (props: any) => {
  const { children } = props;

  return <div className={routeContainer}>{children}</div>;
};

export default RouteContainer;
