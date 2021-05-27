import { IArtSpectatorItem } from '../components/AbstractArt';

import {
  setIntervalX,
  getDirection,
  getRandomInt,
  randomColor,
} from './helpers';

export interface IColor {
  hue: number;
  saturation: number;
  lightness: number;
  opacity: number;
}

export const chaos = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number,
  index: number,
  megaChaos: boolean = false
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < artSpectator.length; i++) {
        const coordinates = artSpectator[i].coordinates;
        const hue = artSpectator[i].color.hue;
        const saturation = artSpectator[i].color.saturation;
        const lightness = artSpectator[i].color.lightness;
        const opacity = artSpectator[i].color.opacity;

        const directionX = artSpectator[i].direction[0];
        const directionY = artSpectator[i].direction[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        artSpectator[i].color.hue = artSpectator[i].color.hue - index;
        if (artSpectator[i].color.hue < 0) {
          artSpectator[i].color.hue = artSpectator[i].color.hue + index * 16;
        }

        if (megaChaos) {
          artSpectator[i].direction = getDirection();
        }

        if (directionX === 0 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }

        artSpectator[i].twistCounter++;

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions
  );
};

export const iyewaye = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number,
  index: number
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < artSpectator.length; i++) {
        const coordinates = artSpectator[i].coordinates;
        const hue = artSpectator[i].color.hue;
        const saturation = artSpectator[i].color.saturation;
        const lightness = artSpectator[i].color.lightness;
        const opacity = artSpectator[i].color.opacity;

        const directionX = artSpectator[i].direction[0];
        const directionY = artSpectator[i].direction[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        artSpectator[i].color.hue = artSpectator[i].color.hue - index;
        if (artSpectator[i].color.hue < 0) {
          artSpectator[i].color.hue = artSpectator[i].color.hue + index * 16;
        }

        artSpectator[i].direction = getDirection();

        if (directionX === 0 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] - getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % getRandomInt(2) === 0 ||
            artSpectator[i].twistCounter % getRandomInt(2) === 0
          ) {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
            artSpectator[i].coordinates[1] =
              artSpectator[i].coordinates[1] + getRandomInt(3);
          } else {
            artSpectator[i].coordinates[0] =
              artSpectator[i].coordinates[0] + getRandomInt(3);
          }
        }

        artSpectator[i].twistCounter++;

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions
  );
};

export const tideSlide = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number,
  index: number,
  coordinatesAmplitude: number = 16
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < artSpectator.length; i++) {
        const coordinates = artSpectator[i].coordinates;
        const hue = artSpectator[i].color.hue;
        const saturation = artSpectator[i].color.saturation;
        const lightness = artSpectator[i].color.lightness;
        const opacity = artSpectator[i].color.opacity;

        const directionX = artSpectator[i].direction[0];
        const directionY = artSpectator[i].direction[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        artSpectator[i].color.hue = artSpectator[i].color.hue - index;
        if (artSpectator[i].color.hue < 0) {
          artSpectator[i].color.hue = artSpectator[i].color.hue + index * 16;
        }

        artSpectator[i].direction = getDirection();

        if (directionX === 0 && directionY === 0) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] + getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 0 && directionY === 1) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] + getRandomInt(coordinatesAmplitude);
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] + getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 0 && directionY === 2) {
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] + getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 1 && directionY === 0) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] - getRandomInt(coordinatesAmplitude);
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] - getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 1 && directionY === 1) {
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] - getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 1 && directionY === 2) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] - getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 2 && directionY === 0) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] + getRandomInt(coordinatesAmplitude);
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] - getRandomInt(coordinatesAmplitude);
        }
        if (directionX === 2 && directionY === 1) {
          artSpectator[i].coordinates[0] =
            artSpectator[i].coordinates[0] - getRandomInt(coordinatesAmplitude);
          artSpectator[i].coordinates[1] =
            artSpectator[i].coordinates[1] + getRandomInt(coordinatesAmplitude);
        }
        // if (directionX === 2 && directionY === 2) {
        //   artSpectator[i].coordinates[0] =
        //     artSpectator[i].coordinates[0] - getRandomInt(coordinatesAmplitude);
        //   artSpectator[i].coordinates[1] =
        //     artSpectator[i].coordinates[1] - getRandomInt(coordinatesAmplitude);
        // }

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions
  );
};

export const megaChaos = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number,
  index: number
) => {
  chaos(context, artSpectator, delay, repetitions, lineWidth, index, true);
};

export const ohThoseLines = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number,
  colorChaos?: boolean
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < artSpectator.length; i++) {
        const coordinates = artSpectator[i].coordinates;
        const hue = artSpectator[i].color.hue;
        const saturation = artSpectator[i].color.saturation;
        const lightness = artSpectator[i].color.lightness;
        const opacity = artSpectator[i].color.opacity;

        const directionX = artSpectator[i].direction[0];
        const directionY = artSpectator[i].direction[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        if (colorChaos) {
          artSpectator[i].color.hue = randomColor().hue;
          artSpectator[i].color.saturation = randomColor().saturation;
          artSpectator[i].color.lightness = randomColor().lightness;
        } else {
          artSpectator[i].color.hue = artSpectator[i].color.hue - 1;
          if (artSpectator[i].color.hue < 0) {
            artSpectator[i].color.hue = artSpectator[i].color.hue + 2;
          }
        }
        if (directionX === 0 && directionY === 0) {
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
        }
        if (directionX === 0 && directionY === 1) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
        }
        if (directionX === 0 && directionY === 2) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
        }
        if (directionX === 1 && directionY === 0) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
        }
        if (directionX === 1 && directionY === 1) {
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
        }
        if (directionX === 1 && directionY === 2) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
        }
        if (directionX === 2 && directionY === 0) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
        }
        if (directionX === 2 && directionY === 1) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
        }
        if (directionX === 2 && directionY === 2) {
          artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
        }

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions
  );
};

export const slightlyCurved = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  delay: number,
  repetitions: number,
  lineWidth: number
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < artSpectator.length; i++) {
        const coordinates = artSpectator[i].coordinates;
        const hue = artSpectator[i].color.hue;
        const saturation = artSpectator[i].color.saturation;
        const lightness = artSpectator[i].color.lightness;
        const opacity = artSpectator[i].color.opacity;

        const directionX = artSpectator[i].direction[0];
        const directionY = artSpectator[i].direction[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        artSpectator[i].color.hue = artSpectator[i].color.hue - 8;
        if (artSpectator[i].color.hue < 0) {
          artSpectator[i].color.hue = artSpectator[i].color.hue + 16;
        }

        if (directionX === 0 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          } else {
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          }
        }
        if (directionX === 0 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          } else {
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          }
        }
        if (directionX === 0 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          }
        }
        if (directionX === 1 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
          }
        }
        if (directionX === 1 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
          }
        }
        if (directionX === 1 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % 2 === 0 ||
            artSpectator[i].twistCounter % 3 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] - 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 0) {
          if (
            artSpectator[i].twistCounter % 4 === 0 ||
            artSpectator[i].twistCounter % 5 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 1) {
          if (
            artSpectator[i].twistCounter % 4 === 0 ||
            artSpectator[i].twistCounter % 5 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 2) {
          if (
            artSpectator[i].twistCounter % 4 === 0 ||
            artSpectator[i].twistCounter % 5 === 0
          ) {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
            artSpectator[i].coordinates[1] = artSpectator[i].coordinates[1] + 1;
          } else {
            artSpectator[i].coordinates[0] = artSpectator[i].coordinates[0] + 1;
          }
        }

        artSpectator[i].twistCounter++;

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions
  );
};
