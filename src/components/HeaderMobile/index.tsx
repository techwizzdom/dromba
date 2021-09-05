import * as React from 'react';
import { useState } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';
import { Routes } from '../../routes/Routes';

import ThemeToggle from '../ThemeToggle';
import IconButton from '../IconButton';
import NavigationItems from '../NavigationItems';

import Logodrobmba from '../../assets/images/logodrombahires.png';
import { ReactComponent as HamburgerMenu } from '../../assets/icons/hamburger-menu.svg';
import { useDevice } from '../../hooks/useDevice';

import { ILogoDiving } from '../HeaderDesktop';
import { DeviceType } from '../../enums/DeviceType';

interface IHeaderMobileProps {
  toggleTheme: () => void;
  isLogoDiving: ILogoDiving;
}

const headerMobileCss = css`
  position: relative;

  padding: 0;
`;

const topBarCss = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const logoLinkCss = css`
  margin: 4px 0;
  height: 36px;
`;

const logoCss = (
  { isMoving, isJumping }: ILogoDiving,
  isDesktop: boolean,
) => css`
  transform: translateX(${isMoving ? (isJumping ? '30vw' : '20vw') : '0'})
    translateY(${isJumping ? '128px' : '0'})
    rotate(${isJumping ? '220deg' : '0'});

  width: ${isMoving ? (isJumping ? '192px' : '0') : '36px'};
  height: ${isMoving ? (isJumping ? '192px' : '0') : '36px'};

  transition: transform 0.8s ease-in-out, width 0.9s ease-in-out,
    height 0.9s ease-in-out;
`;

const navigationCss = (theme: Theme, isExpanded: boolean) => css`
  display: flex;
  flex-direction: column;
  position: absolute;

  height: ${isExpanded ? '100vh' : 0};
  width: 100vw;

  padding-bottom: ${isExpanded ? '96px' : '0'};
  top: 48px;
  left: 0;
  z-index: 1;

  background: ${isExpanded ? theme.gradientBackground : 'transparent'};
  overflow: hidden;

  transition: height ${isExpanded ? '0.5s' : '0.2s'} ease,
    padding-bottom ${isExpanded ? '0.5s' : '0.2s'} ease,
    background-color ${isExpanded ? '0.5s' : '0.2s'} ease-in-out;
`;

const navigationItemsCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 0;
`;

const HeaderMobile: React.FC<IHeaderMobileProps> = (
  props: IHeaderMobileProps,
) => {
  const { toggleTheme, isLogoDiving } = props;
  const deviceType = useDevice();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const theme = React.useContext(ThemeContext);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <div className={headerMobileCss}>
      <div className={topBarCss}>
        <IconButton
          Icon={HamburgerMenu}
          onClick={() => toggleMenu()}
          customPadding="8px 24px 24px 8px"
        />
        <Link to={Routes.Home} className={logoLinkCss}>
          <img
            className={logoCss(isLogoDiving, deviceType === DeviceType.Desktop)}
            src={Logodrobmba}
            alt="logo"
          />
        </Link>
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
      <div className={navigationCss(theme, isExpanded)}>
        <div className={navigationItemsCss}>
          <NavigationItems isMobile={true} onNavigationItemClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
