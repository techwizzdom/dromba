import * as React from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const mainNavigationCss = css`
  font-family: 'Indie Flower', cursive;
  width: 100%;
  font-size: 20px;
  display: flex;
`;

const navigationItemCss = css``;

const MainNavigation: React.FC = () => {
  return (
    <div className={mainNavigationCss}>
      <Link to="/" className={navigationItemCss}>
        Das Haus
      </Link>
      <Link to="timeline" className={navigationItemCss}>
        Timeline
      </Link>
      <Link to="about" className={navigationItemCss}>
        About me
      </Link>
    </div>
  );
};

export default MainNavigation;
