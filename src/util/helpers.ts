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
  repetitions: number,
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
