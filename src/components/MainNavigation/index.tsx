import * as React from 'react';
import { css } from 'emotion';

import NavigationItems from '../NavigationItems';

const mainNavigationCss = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  max-width: 860px;
  width: 100%;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const MainNavigation: React.FC = () => {
  return (
    <nav className={mainNavigationCss}>
      <NavigationItems />
    </nav>
  );
};

export default MainNavigation;
