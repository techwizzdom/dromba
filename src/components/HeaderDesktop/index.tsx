import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logodrobmba from '../../assets/images/logodrombahires.png';
import { DeviceType } from '../../enums/DeviceType';
import { useDevice } from '../../hooks/useDevice';

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

const logoCss = (
  { isMoving, isJumping }: ILogoDiving,
  isDesktop: boolean,
) => css`
  transform: translateX(
      ${isMoving
        ? isJumping
          ? isDesktop
            ? '840px'
            : 'calc(100vw - 172px)'
          : isDesktop
          ? '720px'
          : 'calc(100vw - 282px)'
        : '16px'}
    )
    translateY(${isMoving ? (isJumping ? '200px' : '0') : '0'})
    rotate(${isJumping ? '220deg' : '0'});

  width: ${isMoving ? (isJumping ? '256px' : '0') : '40px'};
  height: ${isMoving ? (isJumping ? '256px' : '0') : '40px'};

  transition: transform 1s ease-in-out, width 0.9s ease-in-out,
    height 0.9s ease-in-out;
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme, isLogoDiving } = props;
  const deviceType = useDevice();

  return (
    <div className={headerDesktopCss}>
      <Link to={Routes.Me} className={logoLinkCss}>
        <img
          src={Logodrobmba}
          className={logoCss(isLogoDiving, deviceType === DeviceType.Desktop)}
          alt="domagoj-vidovic-head-logo"
        />
      </Link>
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default HeaderDesktop;
