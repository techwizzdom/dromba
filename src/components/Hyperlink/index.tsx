import * as React from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

export interface IHyperlinkProps {
  children: React.ReactNode;
  href: string;
  isEmail?: boolean;
}

const hyperlinkCss = (theme: Theme) => css`
  padding: 2px;
  border-radius: 2px;

  color: ${theme.hyperlinkColor};
  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    opacity: 0.8;
  }
`;

const Hyperlink: React.FC<IHyperlinkProps> = (props: IHyperlinkProps) => {
  const { children, href, isEmail } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <a
      className={hyperlinkCss(theme)}
      href={isEmail ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Hyperlink;
