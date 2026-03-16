import * as React from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';
import { Link } from 'react-router-dom';

export interface IHyperlinkProps {
  children: React.ReactNode;
  href?: string;
  isEmail?: boolean;
  isUnderline?: boolean;
  isLarge?: boolean;
  alignCenter?: boolean;
  route?: string;
  onClick?: () => void;
}

export const hyperlinkCss = (
  theme: Theme,
  isUnderline?: boolean,
  isLarge?: boolean,
  alignCenter?: boolean,
) => css`
  position: relative;
  padding: 1px 2px;
  border-radius: 6px;

  ${isLarge && 'font-size: 24px;'}
  ${isLarge && 'font-weight: bold;'}
  ${alignCenter && 'text-align: center;'}

  display: inline;
  color: ${theme.isDark ? '#c6d7ff' : '#2435b8'};
  background-image: linear-gradient(
    transparent 62%,
    ${theme.hyperlinkUnderlineColor} 93%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: ${isUnderline ? '100% 7px' : '100% 5px'};
  transform: none;
  transition: background-size 0.35s ease-in-out,
    background-position 0s step-end 0.35s, color 0.25s ease;

  &:hover {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 12px;
    color: ${theme.textColor};
  }
`;

const Hyperlink: React.FC<IHyperlinkProps> = (props: IHyperlinkProps) => {
  const {
    children,
    href,
    isEmail,
    isUnderline,
    isLarge,
    alignCenter,
    onClick,
    route,
  } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <>
      {route ? (
        <Link
          to={route}
          className={hyperlinkCss(theme, isUnderline, isLarge, alignCenter)}
        >
          {children}
        </Link>
      ) : (
        <a
          className={hyperlinkCss(theme, isUnderline, isLarge, alignCenter)}
          href={isEmail ? `mailto:${href}` : href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onClick && onClick()}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Hyperlink;
