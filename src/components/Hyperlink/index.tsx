import * as React from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

export interface IHyperlinkProps {
  children: React.ReactNode;
  href: string;
  isEmail?: boolean;
  isUnderline?: boolean;
  isLarge?: boolean;
  alignCenter?: boolean;
  onClick?: () => void;
}

export const hyperlinkCss = (
  theme: Theme,
  isUnderline?: boolean,
  isLarge?: boolean,
  alignCenter?: boolean,
) => css`
  position: relative;
  padding: 2px;
  border-radius: 2px;

  ${isLarge && 'font-size: 24px;'}
  ${isLarge && 'font-weight: bold;'}
  ${alignCenter && 'text-align: center;'}

  display: inline;
  background-image: linear-gradient(
    transparent 40%,
    ${theme.hyperlinkUnderlineColor} 94%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: 100% 24px;
  transform: none;
  transition: background-size 0.5s ease-in-out,
    background-position 0s step-end 0.5s;

  &:hover {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 8px;
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
  } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <a
      className={hyperlinkCss(theme, isUnderline, isLarge, alignCenter)}
      href={isEmail ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick && onClick()}
    >
      {children}
    </a>
  );
};

export default Hyperlink;
