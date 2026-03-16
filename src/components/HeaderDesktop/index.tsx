import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

import { Media } from '../../enums/Media';

import Logodrobmba from '../../assets/images/wizz-transparent-bg.png';
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
  position: sticky;
  top: 14px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 10px 14px;
  margin: 0 auto;
  max-width: 1180px;
  min-height: 64px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(14px);
  box-shadow: 0 14px 35px rgba(8, 15, 45, 0.16);

  @media ${Media.Tablet} {
    max-width: 1080px;
    top: 10px;
  }
`;

const logoLinkCss = css`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const logoCss = (
  { isMoving, isJumping }: ILogoDiving,
  isDesktop: boolean,
) => css`
  border-radius: 50%;
  transform: translateX(
      ${isMoving
        ? isJumping
          ? isDesktop
            ? '840px'
            : 'calc(100vw - 172px)'
          : isDesktop
          ? '720px'
          : 'calc(100vw - 282px)'
        : '0'}
    )
    translateY(${isMoving ? (isJumping ? '180px' : '0') : '0'})
    rotate(${isJumping ? '220deg' : '0'});

  width: ${isMoving ? (isJumping ? '256px' : '0') : '42px'};
  height: ${isMoving ? (isJumping ? '256px' : '0') : '42px'};
  object-fit: cover;

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
