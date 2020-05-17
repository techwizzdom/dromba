import * as React from 'react';
import { css } from 'emotion';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logo from '../../assets/icons/logo.svg';

interface IHeaderDesktopProps {
  toggleTheme: () => void;
}

const headerDesktopCss = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 16px;
  margin: 0 auto;
  max-width: 1072px;
  height: 48px;

  @media ${Media.Tablet} {
    max-width: 992px;
  }
`;

const logoCss = css`
  min-width: 40px;
  width: 40px;
  height: 40px;
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme } = props;

  return (
    <div className={headerDesktopCss}>
      <img src={Logo} className={logoCss} alt="logo" />
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default HeaderDesktop;
