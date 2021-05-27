import {
  megaChaos,
  ohThoseLines,
  chaos,
  slightlyCurved,
  iyewaye,
  tideSlide,
} from './coreArt';

import { getRandomInt } from './helpers';

import { IArtSpectatorItem } from '../components/AbstractArt';

export const caldera = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  if (index === 0) {
    iyewaye(context, artSpectator, 10, 120, 1, index);

    setTimeout(() => {
      iyewaye(context, artSpectator, 5, 240, 2, index);
    }, 1200);

    setTimeout(() => {
      iyewaye(context, artSpectator, 20, 50, 3, index);
    }, 2400);

    setTimeout(() => {
      iyewaye(context, artSpectator, 6, 100, 10, index);
    }, 3400);

    setTimeout(() => {
      iyewaye(context, artSpectator, 10, 80, 5, index);
    }, 4000);

    setTimeout(() => {
      iyewaye(context, artSpectator, 40, 25, 5, index);
    }, 4800);
  } else {
    const randomic = getRandomInt(3);

    if (randomic === 0) {
      // r1(context, artSpectator, viewportWidth, viewportHeight, index);
      iyewaye(context, artSpectator, 10, 120, 1, index);

      setTimeout(() => {
        iyewaye(context, artSpectator, 5, 240, 2, index);
      }, 1200);

      setTimeout(() => {
        iyewaye(context, artSpectator, 20, 50, 3, index);
      }, 2400);

      setTimeout(() => {
        iyewaye(context, artSpectator, 6, 100, 10, index);
      }, 3400);

      setTimeout(() => {
        iyewaye(context, artSpectator, 10, 80, 5, index);
      }, 4000);

      setTimeout(() => {
        iyewaye(context, artSpectator, 40, 25, 5, index);
      }, 4800);
    }

    if (randomic === 1) {
      ohThoseLines(context, artSpectator, 10, 120, 1);
      // r2(context, artSpectator, viewportWidth, viewportHeight, index);

      setTimeout(() => {
        tideSlide(context, artSpectator, 10, 300, 1, index, 32);
      }, 1200);
      setTimeout(() => {
        tideSlide(context, artSpectator, 20, 30, 1, index, 32);
      }, 4200);
      setTimeout(() => {
        tideSlide(context, artSpectator, 50, 20, 1, index, 32);
      }, 4900);
    }

    if (randomic === 2) {
      iyewaye(context, artSpectator, 10, 120, 1, index);

      setTimeout(() => {
        tideSlide(context, artSpectator, 15, 80, 2, index);
      }, 1200);
      setTimeout(() => {
        tideSlide(context, artSpectator, 25, 40, 3, index);
      }, 2400);
      setTimeout(() => {
        tideSlide(context, artSpectator, 6, 100, 10, index);
      }, 3400);
      setTimeout(() => {
        tideSlide(context, artSpectator, 10, 80, 15, index);
      }, 4000);
      setTimeout(() => {
        tideSlide(context, artSpectator, 50, 20, 15, index);
      }, 4800);
    }
  }
};

export const randomArt = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
  let arr = [];

  let totalDuration = 0;

  while (totalDuration < 5000) {
    let delay = getRandomInt(10, 2);
    let numberOfRepetitons = getRandomInt(5000, 1);

    const duration = delay * numberOfRepetitons;
    if (duration < 1200) {
      arr.push({
        delay,
        numberOfRepetitons,
        lineWidth: getRandomInt(5, 1),
        colorIndex: getRandomInt(64, 1),
        duration,
      });
      totalDuration += duration;
    }
  }

  totalDuration = 0;

  arr.forEach((ar, i) => {
    const randomCase = getRandomInt(6);

    if (i !== 0) {
      totalDuration += ar.duration;
    }

    setTimeout(() => {
      if (randomCase === 0) {
        ohThoseLines(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth
        );
      } else if (randomCase === 1) {
        tideSlide(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth,
          index,
          ar.colorIndex
        );
      } else if (randomCase === 2) {
        megaChaos(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth,
          index
        );
      } else if (randomCase === 3) {
        chaos(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth,
          index
        );
      } else if (randomCase === 4) {
        iyewaye(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth,
          index
        );
      } else if (randomCase === 5) {
        slightlyCurved(
          context,
          artSpectator,
          ar.delay,
          ar.numberOfRepetitons,
          ar.lineWidth
        );
      }
    }, totalDuration);
  });
  // ohThoseLines(context, artSpectator, 10, 120, 1);

  // setTimeout(() => {
  //   tideSlide(context, artSpectator, 10, 300, 1, index, 32);
  // }, 1200);

  // setTimeout(() => {
  //   tideSlide(context, artSpectator, 20, 30, 1, index, 32);
  // }, 4200);

  // setTimeout(() => {
  //   tideSlide(context, artSpectator, 50, 20, 1, index, 32);
  // }, 4900);
};

export const opressor = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  ohThoseLines(context, artSpectator, 10, 120, 1);

  setTimeout(() => {
    tideSlide(context, artSpectator, 10, 300, 1, index, 32);
  }, 1200);

  setTimeout(() => {
    tideSlide(context, artSpectator, 20, 30, 1, index, 32);
  }, 4200);

  setTimeout(() => {
    tideSlide(context, artSpectator, 50, 20, 1, index, 32);
  }, 4900);
};

export const mindField = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, artSpectator, 10, 120, 1, index);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 240, 2, index);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, artSpectator, 20, 50, 3, index);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, artSpectator, 6, 100, 10, index);
  }, 3400);

  setTimeout(() => {
    megaChaos(context, artSpectator, 10, 80, 5, index);
  }, 4000);
};

export const ancientAnomalies = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  clearCanvas?: boolean
) => {
  if (clearCanvas) {
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.beginPath();
  }

  ohThoseLines(context, artSpectator, 25, 1900, 1);
};

export const r1 = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  setTimeout(() => {
    megaChaos(context, artSpectator, 2, 221, 3, index);
  }, 442);

  setTimeout(() => {
    chaos(context, artSpectator, 2, 18, 4, index);
  }, 478);

  setTimeout(() => {
    tideSlide(context, artSpectator, 4, 195, 2, index);
  }, 1258);

  setTimeout(() => {
    ohThoseLines(context, artSpectator, 2, 456, 2);
  }, 2170);

  setTimeout(() => {
    chaos(context, artSpectator, 2, 187, 4, index);
  }, 2544);

  setTimeout(() => {
    megaChaos(context, artSpectator, 3, 269, 2, index);
  }, 3351);

  setTimeout(() => {
    slightlyCurved(context, artSpectator, 4, 99, 3);
  }, 3747);

  setTimeout(() => {
    chaos(context, artSpectator, 4, 215, 4, index);
  }, 4607);
};

export const r2 = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, artSpectator, 2, 228, 4, index);

  setTimeout(() => {
    chaos(context, artSpectator, 6, 43, 4, index);
  }, 258);

  setTimeout(() => {
    iyewaye(context, artSpectator, 4, 56, 1, index);
  }, 482);

  setTimeout(() => {
    tideSlide(context, artSpectator, 2, 442, 4, index);
  }, 1366);

  setTimeout(() => {
    iyewaye(context, artSpectator, 3, 32, 1, index);
  }, 1462);

  setTimeout(() => {
    megaChaos(context, artSpectator, 3, 297, 1, index);
  }, 2299);

  setTimeout(() => {
    ohThoseLines(context, artSpectator, 2, 275, 2);
  }, 2849);

  setTimeout(() => {
    iyewaye(context, artSpectator, 7, 164, 1, index);
  }, 3997);

  setTimeout(() => {
    slightlyCurved(context, artSpectator, 8, 47, 3);
  }, 4373);

  setTimeout(() => {
    megaChaos(context, artSpectator, 4, 177, 2, index);
  }, 5081);
};

export const r3 = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  ohThoseLines(context, artSpectator, 6, 16, 4);

  setTimeout(() => {
    slightlyCurved(context, artSpectator, 3, 293, 3);
  }, 879);

  setTimeout(() => {
    megaChaos(context, artSpectator, 3, 237, 3, index);
  }, 1590);

  setTimeout(() => {
    tideSlide(context, artSpectator, 9, 87, 1, index);
  }, 2373);

  setTimeout(() => {
    iyewaye(context, artSpectator, 2, 219, 2, index);
  }, 2811);

  setTimeout(() => {
    tideSlide(context, artSpectator, 7, 131, 3, index);
  }, 3728);

  setTimeout(() => {
    ohThoseLines(context, artSpectator, 2, 147, 2);
  }, 4022);

  setTimeout(() => {
    iyewaye(context, artSpectator, 3, 34, 3, index);
  }, 4124);

  setTimeout(() => {
    megaChaos(context, artSpectator, 2, 434, 1, index);
  }, 4992);
};

export const afterlife = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number,
  index: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  chaos(context, artSpectator, 15, 140, 1, index);

  setTimeout(() => {
    chaos(context, artSpectator, 15, 140, 2, index);
  }, 600);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 120, 2, index);
  }, 1200);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 120, 3, index);
  }, 1800);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 120, 4, index);
  }, 2400);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 120, 5, index);
  }, 3000);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 120, 7, index);
  }, 3600);

  setTimeout(() => {
    chaos(context, artSpectator, 5, 80, 10, index);
  }, 4200);
};

export const perpetual = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  ohThoseLines(context, artSpectator, 25, 1900, 1);
};

export const passingThrough = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  chaos(context, artSpectator, 15, 140, 1, 4);

  setTimeout(() => {
    chaos(context, artSpectator, 15, 140, 2, 4);
  }, 600);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 2, 4);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 3, 4);
  }, 1800);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 4, 4);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 5, 4);
  }, 3000);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 7, 4);
  }, 3600);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 120, 10, 4);
  }, 4200);
};

export const weightOfTheLand = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, artSpectator, 30, 40, 8, 4);

  setTimeout(() => {
    megaChaos(context, artSpectator, 5, 240, 12, 4);
  }, 1200);

  setTimeout(() => {
    megaChaos(context, artSpectator, 10, 30, 43, 4);
  }, 2400);

  setTimeout(() => {
    megaChaos(context, artSpectator, 1, 300, 6, 4);
  }, 2700);

  setTimeout(() => {
    megaChaos(context, artSpectator, 10, 200, 143, 4);
  }, 3000);

  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();
};

export const daydream = (
  context: CanvasRenderingContext2D,
  artSpectator: Array<IArtSpectatorItem>,
  viewportWidth: number,
  viewportHeight: number
) => {
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  context.beginPath();

  megaChaos(context, artSpectator, 50, 100, 1, 4);

  ohThoseLines(context, artSpectator, 10, 500, 1);

  slightlyCurved(context, artSpectator, 25, 200, 1);

  chaos(context, artSpectator, 50, 100, 1, 4);
};
