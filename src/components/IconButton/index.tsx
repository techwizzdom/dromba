import * as React from 'react';
import { css } from 'emotion';

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
}

const iconButtonCss = css`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const iconCss = css`
  width: 24px;
  height: 24px;
`;

const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
  const { icon, onClick } = props;

  return (
    <button className={iconButtonCss} onClick={onClick}>
      <img className={iconCss} src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
