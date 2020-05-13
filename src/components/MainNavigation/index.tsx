import * as React from 'react';
import { css } from 'emotion';

import NavigationItems from '../NavigationItems';

const mainNavigationCss = css`
  display: flex;
  justify-content: flex-start;

  padding: 0 32px;
  max-width: 992px;
  width: 100%;

  font-size: 16px;
`;

const MainNavigation: React.FC = () => {
  return (
    <nav className={mainNavigationCss}>
      <NavigationItems />
    </nav>
  );
};

export default MainNavigation;
