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

interface IHeaderMobileProps {
  toggleTheme: () => void;
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

const logoCss = css`
  width: 36px;
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
  const { toggleTheme } = props;

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
          <img className={logoCss} src={Logodrobmba} alt="logo" />
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
