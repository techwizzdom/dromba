import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';
import { useDevice } from '../../hooks/useDevice';

import { ArtConfig } from '../../config/ArtConfig';

import { afterlife, caldera, randomArt } from '../../util/artCollections';
import { getRandomInt, randomColor } from '../../util/coreArt';

import { Media } from '../../enums/Media';
import { DeviceType } from '../../enums/DeviceType';

interface IAbstractArtProps {
  onClick: () => void;
  title?: string;
  subtitle?: string;
  isRandomArtEnabled?: boolean;
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

const textWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: absolute;

  top: auto;
  left: auto;
  bottom: 100px;
  right: 100px;

  @media ${Media.Mobile} {
    align-items: flex-start;
  }
`;

const titleCss = css`
  color: white;
  font-size: 64px;
  font-weight: 900;

  @media ${Media.Mobile} {
    line-height: 1.2;
  }
`;

const subtitleCss = css`
  color: white;
  font-size: 18px;
  font-weight: 500;

  @media ${Media.Mobile} {
    margin-top: 16px;
  }
`;

const landingScreenCss = css`
  position: relative;

  animation: fadeLines ${ArtConfig.duration}ms linear infinite forwards;

  @keyframes fadeLines {
    0% {
      opacity: ${ArtConfig.canvasOpacityMin};
    }
    25% {
      opacity: ${ArtConfig.canvasOpacityMax};
    }
    75% {
      opacity: ${ArtConfig.canvasOpacityMax};
    }
    100% {
      opacity: ${ArtConfig.canvasOpacityMin};
    }
  }
`;

const AbstractArt: React.FC<IAbstractArtProps> = (props: IAbstractArtProps) => {
  const { onClick, title, subtitle, isRandomArtEnabled } = props;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const [artIntervalId, setArtIntervalId] = useState<any>();

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const devicePixelRatio = window.devicePixelRatio;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const deviceType = useDevice();

  const getInitialCoordinates = (
    positionX?: [number, number],
    positionY?: [number, number],
  ): [number, number] => {
    if (positionX && positionY) {
      return [
        getRandomInt(
          viewportWidth - (1 - positionX[1]) * viewportWidth,
          viewportWidth - (1 - positionX[0]) * viewportWidth,
        ) + 0.5,
        getRandomInt(
          viewportHeight - (1 - positionY[1]) * viewportHeight,
          viewportHeight - (1 - positionY[0]) * viewportHeight,
        ) + 0.5,
      ];
    }

    return [
      getRandomInt(viewportWidth) + 0.5,
      getRandomInt(viewportHeight) + 0.5,
    ];
  };

  const randomStartPosition = (index: number): [number, number] => {
    if (index === 0) {
      return [0.4, 0.6];
    }

    if (index === 1) {
      return [0.1, 0.9];
    }

    if (index === 2) {
      return [0.7, 0.9];
    }

    if (index === 3) {
      return [0.3, 0.8];
    }

    if (index === 4) {
      return [0.1, 0.9];
    }

    if (index === 5) {
      return [0.7, 0.7];
    }

    if (index === 5) {
      return [0.8, 0.7];
    }

    if (index === 6) {
      return [0.1, 0.6];
    }

    if (index === 7) {
      return [0.2, 0.3];
    }

    return [0.3, 0.7];
  };

  const getDirection = (): [number, number] => {
    return [getRandomInt(3), getRandomInt(3)];
  };

  const startFading = () => {
    setIsVisible(false);
    clearInterval(artIntervalId);
    console.log('killed');
    setTimeout(() => onClick(), 2000);
  };

  const draw = (context: CanvasRenderingContext2D, index: number) => {
    console.log('drawing');
    let linesArray: any = [];

    for (
      let i = 0;
      i <
      (isRandomArtEnabled ? getRandomInt(500, 300) : ArtConfig.numberOfLines);
      i++
    ) {
      linesArray.push({
        coordinates: getInitialCoordinates(
          deviceType === DeviceType.Mobile
            ? randomStartPosition(index)
            : undefined,
          deviceType === DeviceType.Mobile
            ? randomStartPosition(index)
            : undefined,
        ),
        color: randomColor(),
        direction: getDirection(),
        twistCounter: 0,
      });
    }

    if (isRandomArtEnabled) {
      randomArt(context, linesArray, viewportWidth, viewportHeight, index);
    } else {
      if (deviceType === DeviceType.Mobile) {
        afterlife(context, linesArray, viewportWidth, viewportHeight, index);
      } else {
        caldera(context, linesArray, viewportWidth, viewportHeight, index);
      }
    }
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const context: any = canvasRef.current.getContext('2d');

    if (context) {
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      draw(context, 0);
      let index = 1;

      const artIntervalId = setInterval(
        () => draw(context, index++),
        ArtConfig.duration,
      );

      setArtIntervalId(artIntervalId);
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
      {(title || subtitle) && (
        <div className={textWrapperCss}>
          {title && <div className={titleCss}>What shall we create?</div>}
          {subtitle && (
            <div className={subtitleCss}>Click anywhere to start</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AbstractArt;
