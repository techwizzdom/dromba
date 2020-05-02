import * as React from 'react';
import { css } from 'emotion';
import { MediaBreakpoints } from '../../enums/MediaBreakpoints';
import NavigationItems from '../NavigationItems';

const mainNavigationCss = css`
  max-width: 768px;
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;

  @media (min-width: ${MediaBreakpoints.Mobile}px) and (max-width: ${MediaBreakpoints.Tablet}px) {
    max-width: 576px;
  }
`;

const MainNavigation: React.FC = () => {
  return (
    <nav className={mainNavigationCss}>
      <NavigationItems />
    </nav>
  );
};

export default MainNavigation;
