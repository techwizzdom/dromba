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
  top: 12px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  padding: 10px 18px;
  margin: 0 auto;
  max-width: 1280px;
  min-height: 72px;
  border-radius: 2px;
  border: 2px solid rgba(255, 212, 0, 0.75);
  background: linear-gradient(180deg, rgba(8, 8, 8, 0.96) 0%, rgba(15, 15, 15, 0.96) 100%);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.44);
  text-transform: uppercase;

  @media ${Media.Tablet} {
    max-width: 1160px;
    top: 10px;
  }
`;

const brandCss = css`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 230px;
`;

const logoLinkCss = css`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid rgba(255, 212, 0, 0.5);
`;

const brandTextCss = css`
  display: flex;
  flex-direction: column;
  color: #fff2a0;
  line-height: 1;

  strong {
    font-size: 18px;
    letter-spacing: 0.08em;
  }

  span {
    font-size: 10px;
    letter-spacing: 0.22em;
    color: rgba(255, 212, 0, 0.76);
    margin-top: 6px;
  }
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
      <div className={brandCss}>
        <Link to={Routes.Me} className={logoLinkCss}>
          <img
            src={Logodrobmba}
            className={logoCss(isLogoDiving, deviceType === DeviceType.Desktop)}
            alt="domagoj-vidovic-head-logo"
          />
        </Link>
        <div className={brandTextCss}>
          <strong>Tech Wizzdom</strong>
          <span>Creator Studio</span>
        </div>
      </div>
      <MainNavigation />
      <ThemeToggle toggleTheme={toggleTheme} />
    </div>
  );
};

export default HeaderDesktop;
