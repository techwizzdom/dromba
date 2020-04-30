import * as React from 'react';
import { useState } from 'react';
import { css } from 'emotion';

import ThemeToggle from '../ThemeToggle';
import IconButton from '../IconButton';
import NavigationItems from '../NavigationItems';

import Logo from '../../assets/icons/logo.svg';
import HamburgerMenu from '../../assets/icons/hamburger-menu.svg';

interface IHeaderMobileProps {
  toggleTheme: () => void;
}

const headerMobileCss = css`
  padding: 0 8px;
`;

const topBarCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logoCss = css`
  width: 32px;
`;

const navigationCss = (isExpanded: boolean) => css`
  height: ${isExpanded ? '128px' : 0};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.79, 0.01, 0.22, 0.99);
`;

const themeToggleContainerCss = css``;

const HeaderMobile: React.FC<IHeaderMobileProps> = (
  props: IHeaderMobileProps,
) => {
  const { toggleTheme } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={headerMobileCss}>
      <div className={topBarCss}>
        <IconButton icon={HamburgerMenu} onClick={() => toggleMenu()} />
        <img className={logoCss} src={Logo} alt="logo" />
        <div className={themeToggleContainerCss}>
          <ThemeToggle toggleTheme={toggleTheme} />
        </div>
      </div>
      <div className={navigationCss(isExpanded)}>
        <NavigationItems isMobile={true} />
      </div>
    </div>
  );
};

export default HeaderMobile;
