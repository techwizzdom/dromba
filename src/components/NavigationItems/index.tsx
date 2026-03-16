import * as React from 'react';
import { css } from 'emotion';
import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';
import { Routes } from '../../routes/Routes';
import { Media } from '../../enums/Media';

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
  display: ${isMobile ? 'flex' : 'inline-flex'};
  align-items: center;
  justify-content: center;
  position: relative;

  margin: ${isMobile ? '8px 0' : '0 6px 0 0'};
  padding: ${isMobile ? '14px 18px' : '9px 12px'};
  border-radius: 2px;
  border: 1px solid
    ${isSelected
      ? 'rgba(255, 212, 0, 0.8)'
      : 'rgba(255, 212, 0, 0.28)'};
  background: ${isSelected
    ? 'rgba(255, 212, 0, 0.14)'
    : 'rgba(255, 212, 0, 0.04)'};
  font-weight: ${isSelected ? 800 : 700};

  color: ${isSelected ? '#fff2a0' : 'rgba(255, 242, 160, 0.84)'};
  transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;

  &:hover {
    color: #fff2a0;
    border-color: rgba(255, 212, 0, 0.78);
    background: rgba(255, 212, 0, 0.16);
  }

  @media ${Media.Mobile} {
    width: 90%;
    margin: 6px 0;
  }
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
        to={Routes.Me}
        className={navigationItemCss(
          theme,
          isMobile,
          isSelected(Routes.Me),
        )}
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        {t.navigation.home}
      </Link>
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
      <a
        className={navigationItemCss(theme, isMobile, false)}
        href={t.link.workWithMeForm}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onNavigationItemClick && onNavigationItemClick()}
      >
        Work with me
      </a>
    </>
  );
};

export default NavigationItems;
