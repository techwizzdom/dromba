import { megaChaos, ohThoseLines, chaos, slightlyCurved } from './landingPage';

export const mindField = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, linesArray, 10, 120, 1);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 2);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 20, 50, 3);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 6, 100, 10);
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
    megaChaos(context, linesArray, 6, 100, 10);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 80, 5);
  }, 4000);

  // setTimeout(() => {
  //   console.log('clearMindField');
  //   context.clearRect(0, 0, viewportWidth, viewportHeight);
  //   context.beginPath();
  // }, 4950);
};

export const ancientAnomalies = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
  clearCanvas?: boolean,
) => {
  if (clearCanvas) {
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.beginPath();
  }

  ohThoseLines(context, linesArray, 25, 1900, 1);
};

export const perpetual = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  ohThoseLines(context, linesArray, 25, 1900, 1);
};

export const passingThrough = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

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
};

export const weightOfTheLand = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

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

export const daydream = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, linesArray, 50, 100, 1);

  ohThoseLines(context, linesArray, 10, 500, 1);

  slightlyCurved(context, linesArray, 25, 200, 1);

  chaos(context, linesArray, 50, 100, 1);
};
