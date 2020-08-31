import * as React from 'react';
import { css } from 'emotion';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { Routes } from '../../routes/Routes';

import { underlineOnHover, underline } from '../../styles/css/textHover';

interface INavigationItemsProps {
  onNavigationItemClick?: () => void;
  isMobile?: boolean;
}

const navigationItemCss = (
  theme: any,
  isMobile: boolean,
  isSelected: boolean,
) => css`
  display: ${isMobile ? 'flex' : 'block'};
  justify-content: center;
  position: relative;

  margin: ${isMobile ? '8px 0' : '0 32px 0 0'};

  color: ${theme.textColor};

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
        Who Am I?
      </Link>
      <Link
        to={Routes.Art}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Art))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Who Art You?
      </Link>
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
