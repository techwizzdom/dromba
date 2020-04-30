import * as React from 'react';
import { css } from 'emotion';
import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';
import Logo from '../../assets/icons/logo.svg';

interface IHeaderProps {
  toggleTheme: () => void;
}

const headerContainerCss = css`
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

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <div className={headerContainerCss}>
      <div className={logoWrapperCss}>
        <img src={Logo} className={logoCss} alt="logo" />
      </div>
      <MainNavigation />
      <div className={themeToggleContainerCss}>
        <ThemeToggle toggleTheme={props.toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
