import * as React from 'react';
import { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { landingScreen } from '../../styles/landingScreen';
import { useRandomColor } from '../../hooks/useRandomColor';
import {
  chaos,
  megaChaos,
  ohThoseLines,
  slightlyCurved,
} from '../../util/landingPage';
import { LandingConfig, Arts } from '../../config/LandingConfig';
import { ArtName } from '../../enums/ArtName';

interface ILandingScreenProps {
  onClick: () => void;
}

const landingScreenWrapperCss = css`
  position: relative;

  background-color: #000000;

  /* animation: animateBackground ${LandingConfig.duration}ms linear infinite
    forwards;

  @keyframes animateBackground {
    0% {
      background-color: #111111;
    }
    50% {
      background-color: #000000;
    }
    100% {
      background-color: #111111;
    }
  } */

  cursor: pointer;
`;

const titleCss = css`
  position: absolute;
  top: auto;
  left: auto;
  bottom: 100px;
  right: 100px;

  color: white;
  font-size: 64px;
  font-weight: 900;
`;

const mindField = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  megaChaos(context, linesArray, 10, 120, 1);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 2);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 20, 50, 3);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 6, 100, 4);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 80, 5);
  }, 4000);

  megaChaos(context, linesArray, 10, 120, 1);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 2);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 20, 50, 3);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 6, 100, 4);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 80, 5);
  }, 4000);

  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
};

const ancientAnomalies = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  ohThoseLines(context, linesArray, 25, 400, 1);

  // context.clearRect(0, 0, viewportWidth, viewportHeight);
  // context.beginPath();
};

const passingThrough = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  chaos(context, linesArray, 15, 140, 1);

  setTimeout(() => {
    chaos(context, linesArray, 15, 140, 2);
  }, 600);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 2);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 3);
  }, 1800);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 4);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 5);
  }, 3000);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 7);
  }, 3600);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 10);
  }, 4200);

  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
};

const weightOfTheLand = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  megaChaos(context, linesArray, 30, 40, 8);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 12);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 30, 43);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 1, 300, 6);
  }, 2700);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 200, 143);
  }, 3000);

  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
};

const daydream = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  megaChaos(context, linesArray, 50, 100, 1);

  ohThoseLines(context, linesArray, 10, 500, 1);

  slightlyCurved(context, linesArray, 25, 200, 1);

  chaos(context, linesArray, 50, 100, 1);

  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
};

const landingScreenCss = css`
  animation: fadeLines ${LandingConfig.duration}ms linear infinite forwards;

  @keyframes fadeLines {
    0% {
      opacity: ${LandingConfig.canvasOpacityMin};
    }
    25% {
      opacity: ${LandingConfig.canvasOpacityMax};
    }
    75% {
      opacity: ${LandingConfig.canvasOpacityMax};
    }
    100% {
      opacity: ${LandingConfig.canvasOpacityMin};
    }
  }
`;

const LandingScreen: React.FC<ILandingScreenProps> = (
  props: ILandingScreenProps,
) => {
  const { onClick } = props;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const devicePixelRatio = window.devicePixelRatio;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const randomColor = () => {
    return {
      hue: 360 * Math.random(),
      saturation: 100 * Math.random(),
      lightness: 100 * Math.random(),
      opacity: 0.5,
    };
  };

  const getRandomInt = (max: number, min: number = 0): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getInitialCoordinates = (): [number, number] => {
    return [
      getRandomInt(viewportWidth) + 0.5,
      getRandomInt(viewportHeight) + 0.5,
    ];
  };

  const getDirection = (): [number, number] => {
    return [getRandomInt(3), getRandomInt(3)];
  };

  async function startDrawing(context: CanvasRenderingContext2D) {
    const linesArray: any = [];

    const numberOfLines = 300;

    for (let i = 0; i < numberOfLines; i++) {
      linesArray.push({
        coordinates: getInitialCoordinates(),
        color: randomColor(),
        initialDirection: getDirection(),
        twistCounter: 0,
      });
    }
    // mindField(context, linesArray, viewportWidth, viewportHeight);
    // ancientAnomalies(context, linesArray, viewportWidth, viewportHeight);
    // ancientAnomalies(context, linesArray);
    // passingThrough(context, linesArray, viewportWidth, viewportHeight);
    daydream(context, linesArray, viewportWidth, viewportHeight);
    // weightOfTheLand(context, linesArray, viewportWidth, viewportHeight);
  }

  const draw = (ctx: CanvasRenderingContext2D) => {
    startDrawing(ctx);
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const ctx: any = canvasRef.current.getContext('2d');

    if (ctx) {
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      draw(ctx);
      setInterval(() => draw(ctx), LandingConfig.duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={landingScreenWrapperCss}>
      <canvas
        ref={canvasRef}
        className={landingScreenCss}
        width={viewportWidth * devicePixelRatio}
        height={viewportHeight * devicePixelRatio}
        style={{
          height: `${viewportHeight}px`,
          width: `${viewportWidth}px`,
        }}
        onClick={onClick}
        role="button"
      />
      <div className={titleCss}>What shall we create?</div>
    </div>
  );
};

export default LandingScreen;
