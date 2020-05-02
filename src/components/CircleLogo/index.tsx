import * as React from 'react';
import { css } from 'emotion';
import { CircleLogoSize } from '../../enums/CircleLogoSize';

interface ICircleLogoProps {
  logo: string;
  size?: CircleLogoSize;
}

const logoCss = (size: CircleLogoSize) => css`
  width: ${size};
  height: ${size};
  border-radius: 50px;
`;

const CircleLogo: React.FC<ICircleLogoProps> = (props: ICircleLogoProps) => {
  const { logo, size = CircleLogoSize.Medium } = props;

  return <img className={logoCss(size)} src={logo} alt="logo" />;
};

export default CircleLogo;
