import * as React from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { TextHoverUnderlineHeight } from '../../enums/TextHoverUnderlineHeight';
import { underlineOnHover } from '../../styles/css/textHover';

const mainNavigationCss = css`
  font-family: 'Indie Flower', cursive;
  /* font-family: 'Maven Pro', sans-serif; */
  /* font-family: 'Rock Salt', cursive; */
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
`;

const navigationItemCss = (theme: any) => css`
  position: relative;
  color: ${theme.textColor};

  ${underlineOnHover(TextHoverUnderlineHeight.Medium, theme)}
`;

const MainNavigation: React.FC = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <nav className={mainNavigationCss}>
      <Link to="/" className={navigationItemCss(theme)}>
        Das Haus
      </Link>
      <Link to="timeline" className={navigationItemCss(theme)}>
        Timeline
      </Link>
      <Link to="about" className={navigationItemCss(theme)}>
        About who?
      </Link>
      <Link to="blog" className={navigationItemCss(theme)}>
        Blog
      </Link>
    </nav>
  );
};

export default MainNavigation;
