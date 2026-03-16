/* eslint-disable no-restricted-globals */
import React from 'react';
import { css } from 'emotion';

import { Media } from '../../enums/Media';
import { Routes } from '../../routes/Routes';
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

  padding: 36px ${isPureCenteringEnabled ? '8px 0' : '12px 20px 96px'};
  margin: 0 auto;

  max-width: 1180px;
  width: 100%;
  min-height: ${isNormalizeHeaderHeightEnabled
    ? 'calc(100vh - 48px)'
    : '100vh'};

  @media ${Media.Tablet} {
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1080px;
  }

  @media ${Media.Mobile} {
    padding: 20px 6px 72px;
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
