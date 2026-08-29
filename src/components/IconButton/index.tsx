import * as React from 'react';
import { FunctionComponent } from 'react';
import { css } from 'emotion';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

interface IIconButtonProps {
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  customPadding?: string;
}

const iconButtonCss = (padding?: string) => css`
  padding: ${padding || '8px'};
  border-radius: 2px;
  border: 1px solid rgba(255, 212, 0, 0.7);

  background-color: rgba(255, 212, 0, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 212, 0, 0.18);

  cursor: pointer;
`;

const iconCss = (theme: Theme) => css`
  width: 24px;
  height: 24px;

  fill: ${theme.svgFill.primary};
`;

const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
  const { Icon, onClick, customPadding } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <div className={iconButtonCss(customPadding)} onClick={onClick}>
      <Icon className={iconCss(theme)} />
    </div>
  );
};

export default IconButton;
