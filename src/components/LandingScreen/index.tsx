import * as React from 'react';
import { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { landingScreen } from '../../styles/landingScreen';
import { useRandomColor } from '../../hooks/useRandomColor';

interface ILandingScreenProps {
  onClick: () => void;
}

const landingScreenCss = css`
  width: 100vw;
  height: 100vw;

  background-color: ${landingScreen.backgroundColor};

  cursor: pointer;
`;

const LandingScreen: React.FC<ILandingScreenProps> = (
  props: ILandingScreenProps,
) => {
  const { onClick } = props;

  const randomColor = useRandomColor();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    console.log('draw');
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    if (ctx) {
      ctx.fillStyle = randomColor;
      ctx.fillRect(10, 10, 50, 90);

      ctx.fillStyle = randomColor;
      ctx.fillRect(30, 30, 50, 50);
    }
  };

  useEffect(() => {
    draw();
  });

  return (
    <canvas
      ref={canvasRef}
      className={landingScreenCss}
      onClick={onClick}
      role="button"
    ></canvas>
  );
};

export default LandingScreen;
