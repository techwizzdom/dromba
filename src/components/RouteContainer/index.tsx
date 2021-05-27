import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';

interface IRouteContainerProps {
  children: React.ReactNode;
  isNormalizeHeaderHeightEnabled?: boolean;
}

const routeContainerCss = (isNormalizeHeaderHeightEnabled: boolean) => css`
  padding: 64px 16px 32px 192px;
  margin: 0 auto;

  max-width: 1072px;
  width: 100%;
  min-height: ${isNormalizeHeaderHeightEnabled
    ? 'calc(100vh - 48px)'
    : '100vh'};

  @media ${Media.Tablet} {
    padding-left: 88px;
    max-width: 992px;
  }

  @media ${Media.Mobile} {
    padding: 32px 8px;
  }
`;

const RouteContainer: React.FC<IRouteContainerProps> = (
  props: IRouteContainerProps,
) => {
  const { isNormalizeHeaderHeightEnabled = false, children } = props;

  return (
    <div className={routeContainerCss(isNormalizeHeaderHeightEnabled)}>
      {children}
    </div>
  );
};

export default RouteContainer;
