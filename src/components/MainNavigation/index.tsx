import * as React from 'react';
import { css } from 'emotion';

import NavigationItems from '../NavigationItems';

const mainNavigationCss = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 16px;
  max-width: 992px;
  width: 100%;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

const MainNavigation: React.FC = () => {
  return (
    <nav className={mainNavigationCss}>
      <NavigationItems />
    </nav>
  );
};

export default MainNavigation;
