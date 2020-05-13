import * as React from 'react';
import { FunctionComponent } from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../ThemeContext';

interface IIconButtonProps {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

const iconButtonCss = css`
  padding: 8px;

  background-color: transparent;
  cursor: pointer;
`;

const iconCss = (theme: any) => css`
  width: 24px;
  height: 24px;

  fill: ${theme.svgFill.primary};
`;

const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
  const { Icon, onClick } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={iconButtonCss} onClick={onClick}>
      <Icon className={iconCss(theme)} />
    </div>
  );
};

export default IconButton;
