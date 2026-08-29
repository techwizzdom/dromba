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
  padding: 0 2px;
  border-radius: 2px;

  ${isLarge && 'font-size: 24px;'}
  ${isLarge && 'font-weight: bold;'}
  ${alignCenter && 'text-align: center;'}

  display: inline;
  color: #fff6c8;
  background-image: linear-gradient(
    transparent 64%,
    rgba(255, 212, 0, 0.82) 94%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: ${isUnderline ? '100% 9px' : '100% 6px'};
  transform: none;
  transition: background-size 0.35s ease-in-out,
    background-position 0s step-end 0.35s, color 0.25s ease, opacity 0.25s ease;

  &:hover {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 14px;
    color: #ffd400;
    opacity: 0.95;
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
