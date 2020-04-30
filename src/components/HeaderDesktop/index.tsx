import * as React from 'react';
import { css } from 'emotion';
import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';
import Logo from '../../assets/icons/logo.svg';

interface IHeaderDesktopProps {
  toggleTheme: () => void;
}

const headerDesktopCss = css`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoWrapperCss = css`
  padding: 0 16px;
`;

const logoCss = css`
  width: 56px;
  min-width: 56px;
  height: 40px;
`;

const themeToggleContainerCss = css`
  padding: 0 16px;
`;

const HeaderDesktop: React.FC<IHeaderDesktopProps> = (
  props: IHeaderDesktopProps,
) => {
  const { toggleTheme } = props;

  return (
    <div className={headerDesktopCss}>
      <div className={logoWrapperCss}>
        <img src={Logo} className={logoCss} alt="logo" />
      </div>
      <MainNavigation />
      <div className={themeToggleContainerCss}>
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default HeaderDesktop;
