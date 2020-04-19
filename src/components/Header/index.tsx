import * as React from 'react';
import { css } from 'emotion';
import ThemeToggle from '../ThemeToggle';
import MainNavigation from '../MainNavigation';

interface IProps {
  toggleTheme: () => void;
}

const headerContainerCss = css`
  height: 48px;
  display: flex;
`;

const logoCss = css`
  width: 48px;
  min-width: 48px;
  height: 48px;
  background-color: #123434;
  margin-right: 48px;
`;

const themeToggleContainerCss = css`
  padding: 0 16px 0 32px;
`;

const Header: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={headerContainerCss}>
      <div className={logoCss}></div>
      <MainNavigation />
      <div className={themeToggleContainerCss}>
        <ThemeToggle toggleTheme={props.toggleTheme} />
      </div>
    </div>
  );
};

export default Header;
