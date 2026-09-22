import * as React from 'react';
import { css } from 'emotion';

import Logodrobmba from '../../assets/images/wizz-transparent-bg.png';

const loadingSpinnerCss = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  animation: spin-it 1s ease infinite;

  @keyframes spin-it {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const IconButton: React.FC = () => {
  return (
    <img
      className={loadingSpinnerCss}
      src={Logodrobmba}
      alt="domagoj-vidovic-head-logo"
    />
  );
};

export default IconButton;
