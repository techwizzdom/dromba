import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

const mainNavigationCss = css`
  font-family: 'Indie Flower', cursive;
  /* font-family: 'Rock Salt', cursive; */
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
`;

const navigationItemCss = (theme: any) => css`
  color: ${theme.textColor};
`;

const MainNavigation: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={mainNavigationCss}>
      <Link to="/" className={navigationItemCss(theme)}>
        Das Haus
      </Link>
      <Link to="timeline" className={navigationItemCss(theme)}>
        Timeline
      </Link>
      <Link to="about" className={navigationItemCss(theme)}>
        About who?
      </Link>
    </div>
  );
};

export default MainNavigation;
