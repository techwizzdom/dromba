import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logodrobma from '../../assets/images/logodrd.png';

interface IHeaderDesktopProps {
  toggleTheme: () => void;
  isLogoDiving: ILogoDiving;
}

export interface ILogoDiving {
  isMoving: boolean;
  isJumping: boolean;
}

const headerDesktopCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

// right: 192px;
// right: 40px;
// top: 256px;

const logoAnimatedCss = ({ isMoving, isJumping }: ILogoDiving) => css`
  position: absolute;
  right: ${isMoving ? (isJumping ? '-56px' : '192px') : 'calc(100vw - 16px)'};
  top: ${isJumping ? '256px' : '4px'};
  visibility: ${isMoving ? 'visible' : 'hidden'};

  min-width: 40px;
  width: ${isMoving ? (isJumping ? '256px' : '80px') : '40px'};
  height: ${isMoving ? (isJumping ? '256px' : '80px') : '40px'};

  transform: rotate(140deg);
  transition: right 1s ease-out, top 1s ease-in, visibility 0.2s ease,
    width 0.9s ease-in-out, height 0.9s ease-in-out;
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme, isLogoDiving } = props;

  // const { isLogoDiving, setIsLogoDiving } = useLogoDiving();

  // const isLogoDiving = React.useContext(LogoContext);

  return (
    <div className={headerDesktopCss}>
      <Link to={Routes.Home} className={logoLinkCss}>
        <img
          src={Logodrobma}
          className={logoCss}
          alt="domagoj-vidovic-head-logo"
        />
      </Link>
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
      <img
        src={Logodrobma}
        className={logoAnimatedCss(isLogoDiving)}
        alt="domagoj-vidovic-head-logo-animated"
      />
    </div>
  );
};

export default HeaderDesktop;
