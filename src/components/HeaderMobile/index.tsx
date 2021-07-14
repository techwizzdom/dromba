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

import Logodromba from '../../assets/images/logodrd.png';
import LogodrombaHiRes from '../../assets/images/logodrombahires.png';
import { ReactComponent as HamburgerMenu } from '../../assets/icons/hamburger-menu.svg';
import { ILogoDiving } from '../HeaderDesktop';

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
  align-items: center;
  justify-content: space-between;
`;

const logoLinkCss = css`
  margin-bottom: 4px;
  height: 36px;
`;

const logoCss = (isVisible: boolean) => css`
  visibility: ${isVisible ? 'visible' : 'hidden'};
  width: 36px;

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
          ? 'calc(100vw - 150px)'
          : 'calc(100vw - 120px)'
        : 'calc((100vw / 2) - 18px)'}
    )
    translateY(${isJumping ? '128px' : '-43px'})
    rotate(${isMoving ? (isJumping ? '-140deg' : '140deg') : '140deg'});

  min-width: 36px;
  width: ${isJumping ? '192px' : '36px'};
  height: ${isJumping ? '192px' : '36px'};

  transition: transform 1s ease-in-out, width 0.9s ease-in-out,
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

  background-color: ${isExpanded ? theme.backgroundColor : 'transparent'};
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

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const theme = React.useContext(ThemeContext);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={headerMobileCss}>
      <div className={topBarCss}>
        <IconButton Icon={HamburgerMenu} onClick={() => toggleMenu()} />
        <Link to={Routes.Home} className={logoLinkCss}>
          <img
            className={logoCss(isLogoDiving.isOriginalVisible)}
            src={Logodromba}
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
      <img
        className={logoAnimatedCss(isLogoDiving, false)}
        src={isLogoDiving.isJumping ? LogodrombaHiRes : Logodromba}
        alt="logo-animated"
      />
    </div>
  );
};

export default HeaderMobile;
