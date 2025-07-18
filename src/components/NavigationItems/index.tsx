import * as React from 'react';
import { css } from 'emotion';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';
import { Routes } from '../../routes/Routes';

import { underlineOnHover, underline } from '../../styles/css/textHover';

import { t } from '../../translations/t';

interface INavigationItemsProps {
  onNavigationItemClick?: () => void;
  isMobile?: boolean;
}

const navigationItemCss = (
  theme: Theme,
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
      {/* <Link
        to={Routes.Services}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.Services),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        {t.navigation.services}
      </Link> */}
      {/* <Link
        to={Routes.TheRichCreator}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.TheRichCreator),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        The Rich Creator
      </Link>
      <Link
        to={Routes.ContentCreationForDevs}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.ContentCreationForDevs),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Content Creation For Devs
      </Link> */}
      {/* <Link
        to={Routes.BreakIntoTech}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.BreakIntoTech),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Break into tech
      </Link> */}
      {/* <Link
        to={Routes.Art}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Art))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        {t.navigation.art}
      </Link> */}
      <Link
        to={Routes.Blog}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Blog))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        {t.navigation.blog}
      </Link>
      <Link
        to={Routes.Links}
        className={navigationItemCss(theme, isMobile, isSelected(Routes.Links))}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        {t.navigation.links}
      </Link>
    </>
  );
};

export default NavigationItems;
