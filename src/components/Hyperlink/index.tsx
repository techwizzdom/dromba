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

  ${!isUnderline && `color: ${theme.hyperlinkColor};`}
  ${!isUnderline && `background-color: ${theme.hyperlinkBackgroundColor};`}

  ${isUnderline &&
  `&:before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 8px;
    opacity: 0.4;
    background-color: ${theme.hyperlinkUnderlineColor};
  }`}

  :hover {
    opacity: 0.8;
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
