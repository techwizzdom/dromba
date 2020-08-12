import * as React from 'react';
import { useState } from 'react';
import { css } from 'emotion';

import ThemeToggle from '../ThemeToggle';
import IconButton from '../IconButton';
import NavigationItems from '../NavigationItems';

import Logo from '../../assets/icons/logo.svg';
import { ReactComponent as HamburgerMenu } from '../../assets/icons/hamburger-menu.svg';
import { ThemeContext } from '../../context/ThemeContext';

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

const logoCss = css`
  width: 32px;
`;

const navigationCss = (theme: any, isExpanded: boolean) => css`
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
        <img className={logoCss} src={Logo} alt="logo" />
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
