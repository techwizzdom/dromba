import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { underlineOnHover, underline } from '../../styles/css/textHover';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';
import { Routes } from '../../routes/Routes';

interface INavigationItemsProps {
  onNavigationItemClick?: () => void;
  isMobile?: boolean;
}

const navigationItemCss = (
  theme: any,
  isMobile: boolean,
  isSelected: boolean,
) => css`
  position: relative;
  color: ${theme.textColor};
  display: ${isMobile ? 'flex' : 'block'};
  justify-content: center;
  margin: ${isMobile ? '8px 0' : '0 32px 0 0'};

  ${underlineOnHover(theme)};
  ${isSelected ? underline(theme) : null}
`;

const NavigationItems: React.FC<INavigationItemsProps> = (
  props: INavigationItemsProps,
) => {
  const { onNavigationItemClick, isMobile = false } = props;

  const location = useLocation();
  const theme = React.useContext(ThemeContext);

  const isSelected = (route: Routes): boolean => {
    return route === location.pathname;
  };

  return (
    <>
      <Link
        to={Routes.Home}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Home))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Home
      </Link>
      {/* <Link
        to={Routes.Timeline}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.Timeline),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Timeline
      </Link>
      <Link
        to={Routes.About}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.About))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        About who?
      </Link> */}
      <Link
        to={Routes.Blog}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Blog))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Blog
      </Link>
    </>
  );
};

export default NavigationItems;
