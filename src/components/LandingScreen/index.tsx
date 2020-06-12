import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';

import { LandingConfig } from '../../config/LandingConfig';
import {
  mindField,
  ancientAnomalies,
  daydream,
  weightOfTheLand,
  passingThrough,
  perpetual,
} from '../../util/artCollections';
import { getRandomInt, randomColor } from '../../util/landingPage';

interface ILandingScreenProps {
  onClick: () => void;
}

const landingScreenWrapperCss = (isVisible: boolean) => css`
  position: absolute;
  top: 0;
  left: 0;

  opacity: ${isVisible ? 1 : 0};
  transition: opacity 2s ease-in-out;
  background-color: #000000;

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

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const devicePixelRatio = window.devicePixelRatio;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getInitialCoordinates = (
    leftFourth?: boolean,
    rightFourth?: boolean,
  ): [number, number] => {
    if (leftFourth) {
      return [
        getRandomInt(viewportWidth) + 0.5,
        getRandomInt(viewportHeight) + 0.5,
      ];
    }

    if (rightFourth) {
      return [
        getRandomInt(viewportWidth) + 0.5,
        getRandomInt(viewportHeight) + 0.5,
      ];
    }

    return [
      getRandomInt(viewportWidth) + 0.5,
      getRandomInt(viewportHeight) + 0.5,
    ];
  };

  const getDirection = (): [number, number] => {
    return [getRandomInt(3), getRandomInt(3)];
  };

  const startFading = () => {
    setIsVisible(false);
    setTimeout(() => onClick(), 2000);
  };

  const draw = (context: CanvasRenderingContext2D) => {
    let linesArray: any = [];

    const numberOfLines = 300;

    for (let i = 0; i < numberOfLines; i++) {
      linesArray.push({
        coordinates: getInitialCoordinates(),
        color: randomColor(),
        initialDirection: getDirection(),
        twistCounter: 0,
      });
    }

    const clearCanvas = true;

    // mindField(context, linesArray, viewportWidth, viewportHeight);

    perpetual(context, linesArray, viewportWidth, viewportHeight);

    setTimeout(() => {
      linesArray = [];
      for (let i = 0; i < numberOfLines; i++) {
        linesArray.push({
          coordinates: getInitialCoordinates(),
          color: randomColor(),
          initialDirection: getDirection(),
          twistCounter: 0,
        });
      }

      ancientAnomalies(
        context,
        linesArray,
        viewportWidth,
        viewportHeight,
        clearCanvas,
      );
    }, 5000);

    setTimeout(() => {
      linesArray = [];
      for (let i = 0; i < numberOfLines; i++) {
        linesArray.push({
          coordinates: getInitialCoordinates(),
          color: randomColor(),
          initialDirection: getDirection(),
          twistCounter: 0,
        });
      }

      ancientAnomalies(context, linesArray, viewportWidth, viewportHeight);
    }, 10000);

    setTimeout(() => {
      linesArray = [];
      for (let i = 0; i < numberOfLines; i++) {
        linesArray.push({
          coordinates: getInitialCoordinates(),
          color: randomColor(),
          initialDirection: getDirection(),
          twistCounter: 0,
        });
      }

      ancientAnomalies(context, linesArray, viewportWidth, viewportHeight);
    }, 15000);

    setTimeout(() => {
      linesArray = [];
      for (let i = 0; i < numberOfLines; i++) {
        linesArray.push({
          coordinates: getInitialCoordinates(),
          color: randomColor(),
          initialDirection: getDirection(),
          twistCounter: 0,
        });
      }

      passingThrough(context, linesArray, viewportWidth, viewportHeight);
    }, 20000);

    setTimeout(() => {
      linesArray = [];
      for (let i = 0; i < numberOfLines; i++) {
        linesArray.push({
          coordinates: getInitialCoordinates(),
          color: randomColor(),
          initialDirection: getDirection(),
          twistCounter: 0,
        });
      }

      weightOfTheLand(context, linesArray, viewportWidth, viewportHeight);
    }, 25000);

    // ancientAnomalies(context, linesArray);
    // passingThrough(context, linesArray, viewportWidth, viewportHeight);
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const context: any = canvasRef.current.getContext('2d');

    if (context) {
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      draw(context);
      setInterval(() => draw(context), 30000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={landingScreenWrapperCss(isVisible)}
      onClick={() => startFading()}
      role="button"
    >
      <canvas
        ref={canvasRef}
        className={landingScreenCss}
        width={viewportWidth * devicePixelRatio}
        height={viewportHeight * devicePixelRatio}
        style={{
          height: `${viewportHeight}px`,
          width: `${viewportWidth}px`,
        }}
      />
      <div className={titleCss}>What shall we create?</div>
    </div>
  );
};

export default LandingScreen;
