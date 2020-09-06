import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { css } from 'emotion';
import { useDevice } from '../../hooks/useDevice';

import { ArtConfig } from '../../config/ArtConfig';

import { caldera, randomArt, opressor } from '../../util/artCollections';

import { IColor } from '../../util/coreArt';
import {
  getRandomInt,
  randomColor,
  getDirection,
  getCoordinates,
  getScreenPositionForIndex,
} from '../../util/helpers';

import { Media } from '../../enums/Media';
import { DeviceType } from '../../enums/DeviceType';

interface IAbstractArtProps {
  onClick: () => void;
  title?: string;
  subtitle?: string;
  isRandomArtEnabled?: boolean;
}

export interface IArtSpectatorItem {
  coordinates: [number, number];
  color: IColor;
  direction: [number, number];
  twistCounter: number;
}

const abstractArtWrapperCss = (
  isVisible: boolean,
  viewportHeight: number,
) => css`
  position: absolute;
  height: ${viewportHeight}px;
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

  font-family: 'Special Elite', cursive;

  top: auto;
  left: auto;
  bottom: 100px;
  right: 100px;

  @media ${Media.Mobile} {
    align-items: flex-start;

    padding-left: 8px;
  }
`;

const titleCss = css`
  color: white;
  font-size: 32px;
  font-weight: 500;

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

const abstractArtCss = css`
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

  const startFading = () => {
    setIsVisible(false);
    clearInterval(artIntervalId);
    setTimeout(() => onClick(), 2000);
  };

  const draw = (context: CanvasRenderingContext2D, index: number) => {
    let artSpectator = new Array<IArtSpectatorItem>();

    for (
      let i = 0;
      i <
      (deviceType === DeviceType.Mobile
        ? 100
        : isRandomArtEnabled
        ? getRandomInt(500, 300)
        : ArtConfig.numberOfLines);
      i++
    ) {
      artSpectator.push({
        coordinates: getCoordinates(
          isRandomArtEnabled ? getScreenPositionForIndex(index) : undefined,
          isRandomArtEnabled ? getScreenPositionForIndex(index) : undefined,
        ),
        color: randomColor(),
        direction: getDirection(),
        twistCounter: 0,
      });
    }

    if (isRandomArtEnabled) {
      randomArt(context, artSpectator, viewportWidth, viewportHeight, index);
    } else {
      if (deviceType === DeviceType.Mobile) {
        opressor(context, artSpectator, viewportWidth, viewportHeight, index);
      } else {
        caldera(context, artSpectator, viewportWidth, viewportHeight, index);
      }
    }
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const context: CanvasRenderingContext2D | null = canvasRef.current.getContext(
      '2d',
    );

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
      className={abstractArtWrapperCss(isVisible, viewportHeight)}
      onClick={() => startFading()}
      role="button"
    >
      <canvas
        ref={canvasRef}
        className={abstractArtCss}
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
