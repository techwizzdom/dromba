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
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.32);

  background-color: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 24px rgba(8, 14, 40, 0.16);

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
