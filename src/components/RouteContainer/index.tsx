import React from 'react';
import { css } from 'emotion';

const routeContainer = css`
  padding: 80px 32px;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
`;

const RouteContainer: React.FC = (props: any) => {
  return <div className={routeContainer}>{props.children}</div>;
};

export default RouteContainer;
