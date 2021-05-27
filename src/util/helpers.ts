import { IColor } from './coreArt';

import { ArtConfig } from '../config/ArtConfig';

export const randomColor = (): IColor => {
  return {
    hue: 360 * Math.random(),
    saturation: 100 * Math.random(),
    lightness: 100 * Math.random(),
    opacity: ArtConfig.colorOpacity,
  };
};

export const getRandomInt = (max: number, min: number = 0): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const setIntervalX = (
  callback: () => void,
  delay: number,
  repetitions: number
) => {
  var x = 0;
  var intervalID = window.setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
};

export const getDirection = (): [number, number] => {
  return [getRandomInt(3), getRandomInt(3)];
};

export const getCoordinates = (
  positionX?: [number, number],
  positionY?: [number, number]
): [number, number] => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  if (positionX && positionY) {
    return [
      getRandomInt(
        viewportWidth - (1 - positionX[1]) * viewportWidth,
        viewportWidth - (1 - positionX[0]) * viewportWidth
      ) + 0.5,
      getRandomInt(
        viewportHeight - (1 - positionY[1]) * viewportHeight,
        viewportHeight - (1 - positionY[0]) * viewportHeight
      ) + 0.5,
    ];
  }

  return [
    getRandomInt(viewportWidth) + 0.5,
    getRandomInt(viewportHeight) + 0.5,
  ];
};

export const getScreenPositionForIndex = (index: number): [number, number] => {
  if (index % 8 === 0) {
    return [0, 1];
  }

  if (index % 8 === 1) {
    return [0.1, 0.2];
  }

  if (index % 8 === 2) {
    return [0.4, 0.6];
  }

  if (index % 8 === 3) {
    return [0.3, 0.8];
  }

  if (index % 8 === 4) {
    return [0.1, 0.9];
  }

  if (index % 8 === 5) {
    return [0.7, 0.7];
  }

  if (index % 8 === 5) {
    return [0.8, 0.7];
  }

  if (index % 8 === 6) {
    return [1, 1];
  }

  if (index % 8 === 7) {
    return [0.2, 0.3];
  }

  return [0.3, 0.7];
};
