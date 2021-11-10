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
  onClick?: () => void;
}

const hyperlinkCss = (
  theme: Theme,
  isUnderline?: boolean,
  isLarge?: boolean,
) => css`
  position: relative;
  padding: 2px;
  border-radius: 2px;

  ${isLarge && 'font-size: 24px;'}
  ${isLarge && 'font-weight: bold;'}

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
  transition: background-size 0.5s cubic-bezier(0.79, 0.01, 0.22, 0.99) 0s,
    background-position 0s step-end 0.5s;

  &:hover {
    background-position-x: right;
    background-position-y: bottom;
    background-size: 100% 8px;
  }
`;

const Hyperlink: React.FC<IHyperlinkProps> = (props: IHyperlinkProps) => {
  const { children, href, isEmail, isUnderline, isLarge, onClick } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <a
      className={hyperlinkCss(theme, isUnderline, isLarge)}
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
