import {
  megaChaos,
  ohThoseLines,
  chaos,
  slightlyCurved,
  iyewaye,
  getRandomInt,
} from './landingPage';

export const caldera = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
  index: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  if (index === 0) {
    iyewaye(context, linesArray, 10, 120, 1, index);

    setTimeout(() => {
      iyewaye(context, linesArray, 5, 240, 2, index);
    }, 1200);

    setTimeout(() => {
      iyewaye(context, linesArray, 20, 50, 3, index);
    }, 2400);

    setTimeout(() => {
      iyewaye(context, linesArray, 6, 100, 10, index);
    }, 3400);

    setTimeout(() => {
      iyewaye(context, linesArray, 10, 80, 5, index);
    }, 4000);

    iyewaye(context, linesArray, 10, 120, 1, index);

    setTimeout(() => {
      iyewaye(context, linesArray, 5, 240, 2, index);
    }, 1200);

    setTimeout(() => {
      iyewaye(context, linesArray, 20, 50, 3, index);
    }, 2400);

    setTimeout(() => {
      iyewaye(context, linesArray, 6, 100, 10, index);
    }, 3400);

    setTimeout(() => {
      iyewaye(context, linesArray, 10, 80, 5, index);
    }, 4000);
  } else {
    const randomic = getRandomInt(3);

    if (randomic === 0) {
      iyewaye(context, linesArray, 10, 120, 1, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 5, 240, 2, index);
      }, 1200);

      setTimeout(() => {
        iyewaye(context, linesArray, 20, 50, 3, index);
      }, 2400);

      setTimeout(() => {
        iyewaye(context, linesArray, 6, 100, 10, index);
      }, 3400);

      setTimeout(() => {
        iyewaye(context, linesArray, 10, 80, 5, index);
      }, 4000);

      iyewaye(context, linesArray, 10, 120, 1, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 5, 240, 2, index);
      }, 1200);

      setTimeout(() => {
        iyewaye(context, linesArray, 20, 50, 3, index);
      }, 2400);

      setTimeout(() => {
        iyewaye(context, linesArray, 6, 100, 10, index);
      }, 3400);

      setTimeout(() => {
        iyewaye(context, linesArray, 10, 80, 5, index);
      }, 4000);
    }

    if (randomic === 1) {
      iyewaye(context, linesArray, 10, 80, 5, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 6, 100, 10, index);
      }, 800);

      setTimeout(() => {
        iyewaye(context, linesArray, 20, 50, 3, index);
      }, 1400);

      setTimeout(() => {
        iyewaye(context, linesArray, 5, 240, 2, index);
      }, 2400);

      setTimeout(() => {
        iyewaye(context, linesArray, 10, 120, 1, index);
      }, 3600);

      iyewaye(context, linesArray, 10, 80, 5, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 6, 100, 10, index);
      }, 800);

      setTimeout(() => {
        iyewaye(context, linesArray, 20, 50, 3, index);
      }, 1400);

      setTimeout(() => {
        iyewaye(context, linesArray, 5, 240, 2, index);
      }, 2400);

      setTimeout(() => {
        iyewaye(context, linesArray, 10, 120, 1, index);
      }, 3600);
    }

    if (randomic === 2) {
      iyewaye(context, linesArray, 5, 140, 5, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 1, 4100, 1, index);
      }, 700);

      iyewaye(context, linesArray, 5, 140, 5, index);

      setTimeout(() => {
        iyewaye(context, linesArray, 1, 4100, 1, index);
      }, 700);
    }
  }
};

export const mindField = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
  index: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, linesArray, 10, 120, 1, index);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 2, index);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 20, 50, 3, index);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 6, 100, 10, index);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 80, 5, index);
  }, 4000);

  megaChaos(context, linesArray, 10, 120, 1, index);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 2, index);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 20, 50, 3, index);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 6, 100, 10, index);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 80, 5, index);
  }, 4000);

  // setTimeout(() => {
  //   megaChaos(context, linesArray, 20, 80, 3, index);
  // }, 4800);

  // setTimeout(() => {
  //   megaChaos(context, linesArray, 5, 300, 5, index);
  // }, 6400);

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

export const afterlife = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
  index: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  chaos(context, linesArray, 15, 140, 1, index);

  setTimeout(() => {
    chaos(context, linesArray, 15, 140, 2, index);
  }, 600);

  setTimeout(() => {
    chaos(context, linesArray, 5, 120, 2, index);
  }, 1200);

  setTimeout(() => {
    chaos(context, linesArray, 5, 120, 3, index);
  }, 1800);

  setTimeout(() => {
    chaos(context, linesArray, 5, 120, 4, index);
  }, 2400);

  setTimeout(() => {
    chaos(context, linesArray, 5, 120, 5, index);
  }, 3000);

  setTimeout(() => {
    chaos(context, linesArray, 5, 120, 7, index);
  }, 3600);

  setTimeout(() => {
    chaos(context, linesArray, 5, 80, 10, index);
  }, 4200);
};

export const perpetual = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  viewportWidth: number,
  viewportHeight: number,
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

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

  chaos(context, linesArray, 15, 140, 1, 4);

  setTimeout(() => {
    chaos(context, linesArray, 15, 140, 2, 4);
  }, 600);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 2, 4);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 3, 4);
  }, 1800);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 4, 4);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 5, 4);
  }, 3000);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 7, 4);
  }, 3600);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 120, 10, 4);
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

  megaChaos(context, linesArray, 30, 40, 8, 4);

  setTimeout(() => {
    megaChaos(context, linesArray, 5, 240, 12, 4);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 30, 43, 4);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, linesArray, 1, 300, 6, 4);
  }, 2700);

  setTimeout(() => {
    megaChaos(context, linesArray, 10, 200, 143, 4);
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

  megaChaos(context, linesArray, 50, 100, 1, 4);

  ohThoseLines(context, linesArray, 10, 500, 1);

  slightlyCurved(context, linesArray, 25, 200, 1);

  chaos(context, linesArray, 50, 100, 1, 4);
};
