import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logodrobmba from '../../assets/images/logodrd.png';

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

const logoLinkCss = css`
  height: 40px;
`;

const logoCss = css`
  min-width: 40px;
  width: 40px;
  height: 40px;

  transform: rotate(140deg);
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme } = props;

  return (
    <div className={headerDesktopCss}>
      <Link to={Routes.Home} className={logoLinkCss}>
        <img
          src={Logodrobmba}
          className={logoCss}
          alt="domagoj-vidovic-head-logo"
        />
      </Link>
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default HeaderDesktop;
