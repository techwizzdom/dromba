/* eslint-disable no-restricted-globals */
import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';
// import BuyMeACroissant from '../BuyMeACroissant';

interface IRouteContainerProps {
  children: React.ReactNode;
  isNormalizeHeaderHeightEnabled?: boolean;
  isPureCenteringEnabled?: boolean;
  onClick?: () => void;
}

const routeContainerCss = (
  isNormalizeHeaderHeightEnabled: boolean,
  isPureCenteringEnabled: boolean,
) => css`
  position: relative;
  z-index: 1;

  padding: 28px ${isPureCenteringEnabled ? '8px 0' : '8px 28px 92px'};
  margin: 0 auto;

  max-width: 1280px;
  width: 100%;
  min-height: ${isNormalizeHeaderHeightEnabled
    ? 'calc(100vh - 48px)'
    : '100vh'};

  @media ${Media.Tablet} {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1160px;
  }

  @media ${Media.Mobile} {
    padding: 16px 4px 64px;
  }
`;

const RouteContainer: React.FC<IRouteContainerProps> = (
  props: IRouteContainerProps,
) => {
  const {
    isNormalizeHeaderHeightEnabled = false,
    isPureCenteringEnabled = false,
    onClick,
    children,
  } = props;

  return (
    <div
      className={routeContainerCss(
        isNormalizeHeaderHeightEnabled,
        isPureCenteringEnabled,
      )}
      onClick={() => onClick && onClick()}
    >
      {children}
      {/* {location.pathname !== Routes.Me && <BuyMeACroissant />} */}
    </div>
  );
};

export default RouteContainer;
