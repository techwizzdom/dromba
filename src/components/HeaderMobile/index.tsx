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

import Logodrobmba from '../../assets/images/wizz-transparent-bg.png';
import { ReactComponent as HamburgerMenu } from '../../assets/icons/hamburger-menu.svg';

import { ILogoDiving } from '../HeaderDesktop';

interface IHeaderMobileProps {
  toggleTheme: () => void;
  isLogoDiving: ILogoDiving;
}

const headerMobileCss = css`
  position: sticky;
  top: 8px;
  z-index: 35;
  padding: 0;
  border-radius: 2px;
  border: 2px solid rgba(255, 212, 0, 0.75);
  background: rgba(8, 8, 8, 0.96);
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.36);
`;

const topBarCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`;

const logoLinkCss = css`
  margin: 2px 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 212, 0, 0.48);
`;

const logoCss = (
  { isMoving, isJumping }: ILogoDiving,
) => css`
  border-radius: 50%;
  transform: translateX(${isMoving ? (isJumping ? '30vw' : '20vw') : '0'})
    translateY(${isJumping ? '128px' : '0'})
    rotate(${isJumping ? '220deg' : '0'});

  width: ${isMoving ? (isJumping ? '192px' : '0') : '40px'};
  height: ${isMoving ? (isJumping ? '192px' : '0') : '40px'};
  object-fit: cover;

  transition: transform 0.8s ease-in-out, width 0.9s ease-in-out,
    height 0.9s ease-in-out;
`;

const navigationCss = (theme: Theme, isExpanded: boolean) => css`
  display: flex;
  flex-direction: column;
  position: absolute;

  height: ${isExpanded ? 'calc(100vh - 88px)' : 0};
  width: 100%;

  padding-bottom: ${isExpanded ? '40px' : '0'};
  top: 56px;
  left: 0;
  z-index: 1;
  border-top: 1px solid rgba(255, 212, 0, 0.28);

  background: ${isExpanded
    ? theme.isDark
      ? 'rgba(7, 7, 7, 0.98)'
      : 'rgba(12, 12, 12, 0.98)'
    : 'transparent'};
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
  width: 100%;
`;

const HeaderMobile: React.FC<IHeaderMobileProps> = (
  props: IHeaderMobileProps,
) => {
  const { toggleTheme, isLogoDiving } = props;

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
          customPadding="8px"
        />
        <Link to={Routes.Me} className={logoLinkCss}>
          <img
            className={logoCss(isLogoDiving)}
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
