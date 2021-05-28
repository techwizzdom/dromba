import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logodromba from '../../assets/images/logodrd.png';
import LogodrombaHiRes from '../../assets/images/logodrombahires.png';
import { useDevice } from '../../hooks/useDevice';
import { DeviceType } from '../../enums/DeviceType';

interface IHeaderDesktopProps {
  toggleTheme: () => void;
  isLogoDiving: ILogoDiving;
}

export interface ILogoDiving {
  isMoving: boolean;
  isJumping: boolean;
  isOriginalVisible: boolean;
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

const logoCss = (isVisible: boolean) => css`
  visibility: ${isVisible ? 'visible' : 'hidden'};
  min-width: 40px;
  width: 40px;
  height: 40px;

  transform: rotate(140deg);
`;

const logoAnimatedCss = (
  { isMoving, isJumping }: ILogoDiving,
  isDesktop: boolean,
) => css`
  position: absolute;
  left: 0;
  visibility: ${isMoving ? 'visible' : 'hidden'};
  transform: translateX(
      ${isMoving
        ? isJumping
          ? isDesktop
            ? '870px'
            : 'calc(100vw - 172px)'
          : isDesktop
          ? '800px'
          : 'calc(100vw - 282px)'
        : '16px'}
    )
    translateY(${isMoving ? (isJumping ? '312px' : '0') : '0'})
    rotate(${isMoving ? (isJumping ? '-140deg' : '0deg') : '140deg'});

  width: ${isMoving ? (isJumping ? '256px' : '0px') : '40px'};
  height: ${isMoving ? (isJumping ? '256px' : '0px') : '40px'};

  transition: transform 0.7s ease-in-out, width 0.6s ease-in-out,
    height 0.6s ease-in-out;
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme, isLogoDiving } = props;

  const deviceType = useDevice();

  return (
    <div className={headerDesktopCss}>
      <img
        src={isLogoDiving.isJumping ? LogodrombaHiRes : Logodromba}
        className={logoAnimatedCss(
          isLogoDiving,
          deviceType === DeviceType.Desktop,
        )}
        alt="domagoj-vidovic-head-logo-animated"
      />
      <Link to={Routes.Home} className={logoLinkCss}>
        <img
          src={Logodromba}
          className={logoCss(isLogoDiving.isOriginalVisible)}
          alt="domagoj-vidovic-head-logo"
        />
      </Link>
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default HeaderDesktop;
