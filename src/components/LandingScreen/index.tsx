import * as React from 'react';
import { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { landingScreen } from '../../styles/landingScreen';
import { useRandomColor } from '../../hooks/useRandomColor';

interface ILandingScreenProps {
  onClick: () => void;
}

const landingScreenWrapperCss = css`
  position: relative;

  /* width: 100vw;
  height: 100vw; */

/* background-color: ${landingScreen.backgroundColor}; */
animation: animateBackground 5.5s linear infinite forwards;

@keyframes animateBackground {
  0% { background-color: #111111; }
  50% { background-color: #000000; }
  100% { background-color: #111111; }
}

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
  /* animation: fadeLines 5.5s linear infinite forwards;

  @keyframes fadeLines {
    0% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } */

  /* transition: opacity 2s ease; */
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
    // return 'hsl(' + 360 * Math.random() + ',100%,50%)';
    // `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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

  const getInitialDirection = (): [number, number] => {
    return [getRandomInt(3), getRandomInt(3)];
  };

  const setIntervalX = (
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

  async function startDrawing(context: CanvasRenderingContext2D) {
    console.log('start');
    // const initialCoordinates = getInitialCoordinates();
    const initialCoordinatesArray: any = [];

    for (let i = 0; i < 40; i++) {
      initialCoordinatesArray.push({
        coordinates: getInitialCoordinates(),
        color: randomColor(),
        initialDirection: getInitialDirection(),
        twistCounter: 0,
      });
    }

    // await setTimeout(() => {
    //   for (let i = 0; i < 10; i++) {
    //     const coordinates = initialCoordinatesArray[i];
    //     context.strokeStyle = randomColor();
    //     context.beginPath();
    //     context.moveTo(coordinates[0], coordinates[1]);
    //     // coordinates[0]++;
    //     // coordinates[1]++;
    //     initialCoordinatesArray[i][0]++;
    //     initialCoordinatesArray[i][1]++;
    //     context.lineTo(coordinates[0], coordinates[1]);
    //     context.stroke();
    //   }
    // }, 150);

    // await setTimeout(() => {
    //   context.strokeStyle = randomColor();
    //   initialCoordinates[0]++;
    //   initialCoordinates[1]++;
    //   console.log(initialCoordinates[0]);
    //   console.log(initialCoordinates[1]);
    //   context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    //   context.stroke();
    // }, 150);

    // await setTimeout(() => {
    //   context.strokeStyle = randomColor();
    //   initialCoordinates[0]++;
    //   initialCoordinates[1]++;
    //   console.log(initialCoordinates[0]);
    //   console.log(initialCoordinates[1]);
    //   context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    //   context.stroke();
    // }, 150);

    // await setTimeout(() => {
    //   context.strokeStyle = randomColor();
    //   initialCoordinates[0]++;
    //   initialCoordinates[1]++;
    //   console.log(initialCoordinates[0]);
    //   console.log(initialCoordinates[1]);
    //   context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    //   context.stroke();
    // }, 150);

    // initialCoordinates[0]++;
    // initialCoordinates[1]++;
    // console.log(initialCoordinates[0]);
    // console.log(initialCoordinates[1]);
    // context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    // context.stroke();

    // initialCoordinates[0]++;
    // initialCoordinates[1]++;
    // console.log(initialCoordinates[0]);
    // console.log(initialCoordinates[1]);
    // context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    // context.stroke();

    // initialCoordinates[0]++;
    // initialCoordinates[1]++;
    // console.log(initialCoordinates[0]);
    // console.log(initialCoordinates[1]);
    // context.lineTo(initialCoordinates[0], initialCoordinates[1]);
    // context.stroke();

    const initialDraw = (delay: number, repetitions: number) => {
      setIntervalX(
        () => {
          for (let i = 0; i < 40; i++) {
            const coordinates = initialCoordinatesArray[i].coordinates;
            const hue = initialCoordinatesArray[i].color.hue;
            const saturation = initialCoordinatesArray[i].color.saturation;
            const lightness = initialCoordinatesArray[i].color.lightness;
            const opacity = initialCoordinatesArray[i].color.opacity;

            const directionX = initialCoordinatesArray[i].initialDirection[0];
            const directionY = initialCoordinatesArray[i].initialDirection[1];

            const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
            context.strokeStyle = hsla;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(coordinates[0], coordinates[1]);

            initialCoordinatesArray[i].color.hue =
              initialCoordinatesArray[i].color.hue - 8;
            if (initialCoordinatesArray[i].color.hue < 0) {
              initialCoordinatesArray[i].color.hue =
                initialCoordinatesArray[i].color.hue + 16;
            }

            if (directionX === 0 && directionY === 0) {
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] + 1;
            }
            if (directionX === 0 && directionY === 1) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] + 1;
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] + 1;
            }
            if (directionX === 0 && directionY === 2) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] + 1;
            }
            if (directionX === 1 && directionY === 0) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] + 1;
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] - 1;
            }
            if (directionX === 1 && directionY === 1) {
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] - 1;
            }
            if (directionX === 1 && directionY === 2) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] - 1;
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] - 1;
            }
            if (directionX === 2 && directionY === 0) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] - 1;
            }
            if (directionX === 2 && directionY === 1) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] - 1;
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] + 1;
            }
            if (directionX === 2 && directionY === 2) {
              initialCoordinatesArray[i].coordinates[0] =
                initialCoordinatesArray[i].coordinates[0] - 1;
              initialCoordinatesArray[i].coordinates[1] =
                initialCoordinatesArray[i].coordinates[1] - 1;
            }

            context.lineTo(coordinates[0], coordinates[1]);
            context.stroke();
          }
        },
        delay,
        repetitions,
      );
    };

    const firstTwist = (delay: number, repetitions: number) => {
      setIntervalX(
        () => {
          for (let i = 0; i < 40; i++) {
            const coordinates = initialCoordinatesArray[i].coordinates;
            const hue = initialCoordinatesArray[i].color.hue;
            const saturation = initialCoordinatesArray[i].color.saturation;
            const lightness = initialCoordinatesArray[i].color.lightness;
            const opacity = initialCoordinatesArray[i].color.opacity;

            const directionX = initialCoordinatesArray[i].initialDirection[0];
            const directionY = initialCoordinatesArray[i].initialDirection[1];

            const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
            context.strokeStyle = hsla;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(coordinates[0], coordinates[1]);

            initialCoordinatesArray[i].color.hue =
              initialCoordinatesArray[i].color.hue - 8;
            if (initialCoordinatesArray[i].color.hue < 0) {
              initialCoordinatesArray[i].color.hue =
                initialCoordinatesArray[i].color.hue + 16;
            }

            if (directionX === 0 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              } else {
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              }
            }
            if (directionX === 0 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              } else {
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              }
            }
            if (directionX === 0 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
              }
            }
            if (directionX === 1 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
              }
            }
            if (directionX === 1 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
              }
            }
            if (directionX === 1 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % 2 === 0 ||
                initialCoordinatesArray[i].twistCounter % 3 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
              }
            }
            if (directionX === 2 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % 4 === 0 ||
                initialCoordinatesArray[i].twistCounter % 5 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
              }
            }
            if (directionX === 2 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % 4 === 0 ||
                initialCoordinatesArray[i].twistCounter % 5 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - 1;
              }
            }
            if (directionX === 2 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % 4 === 0 ||
                initialCoordinatesArray[i].twistCounter % 5 === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + 1;
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + 1;
              }
            }

            initialCoordinatesArray[i].twistCounter++;

            context.lineTo(coordinates[0], coordinates[1]);
            context.stroke();
          }
        },
        delay,
        repetitions,
      );
    };

    const chaos = (delay: number, repetitions: number) => {
      setIntervalX(
        () => {
          for (let i = 0; i < 40; i++) {
            const coordinates = initialCoordinatesArray[i].coordinates;
            const hue = initialCoordinatesArray[i].color.hue;
            const saturation = initialCoordinatesArray[i].color.saturation;
            const lightness = initialCoordinatesArray[i].color.lightness;
            const opacity = initialCoordinatesArray[i].color.opacity;

            const directionX = initialCoordinatesArray[i].initialDirection[0];
            const directionY = initialCoordinatesArray[i].initialDirection[1];

            const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
            context.strokeStyle = hsla;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(coordinates[0], coordinates[1]);

            initialCoordinatesArray[i].color.hue =
              initialCoordinatesArray[i].color.hue - 8;
            if (initialCoordinatesArray[i].color.hue < 0) {
              initialCoordinatesArray[i].color.hue =
                initialCoordinatesArray[i].color.hue + 16;
            }

            if (directionX === 0 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              }
            }
            if (directionX === 0 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              }
            }
            if (directionX === 0 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
              }
            }
            if (directionX === 1 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
              }
            }
            if (directionX === 1 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
              }
            }
            if (directionX === 1 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] - getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
              }
            }
            if (directionX === 2 && directionY === 0) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
              }
            }
            if (directionX === 2 && directionY === 1) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] - getRandomInt(3);
              }
            }
            if (directionX === 2 && directionY === 2) {
              if (
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) ===
                  0 ||
                initialCoordinatesArray[i].twistCounter % getRandomInt(4) === 0
              ) {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
                initialCoordinatesArray[i].coordinates[1] =
                  initialCoordinatesArray[i].coordinates[1] + getRandomInt(3);
              } else {
                initialCoordinatesArray[i].coordinates[0] =
                  initialCoordinatesArray[i].coordinates[0] + getRandomInt(3);
              }
            }

            initialCoordinatesArray[i].twistCounter++;

            context.lineTo(coordinates[0], coordinates[1]);
            context.stroke();
          }
        },
        delay,
        repetitions,
      );
    };

    chaos(30, 40);

    setTimeout(() => {
      chaos(60, 20);
    }, 1200);

    setTimeout(() => {
      chaos(20, 50);
    }, 2400);

    setTimeout(() => {
      chaos(60, 10);
    }, 3400);

    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.beginPath();

    // firstTwist(20, 15);

    // setTimeout(() => {
    //   initialDraw(20, 10);
    // }, 300);

    // setTimeout(() => {
    //   firstTwist(75, 10);
    // }, 500);

    // setTimeout(() => {
    //   firstTwist(20, 50);
    // }, 1250);

    // setTimeout(() => {
    //   initialDraw(40, 20);
    // }, 2250);

    // setTimeout(() => {
    //   firstTwist(10, 30);
    // }, 3050);

    // setTimeout(() => {
    //   initialDraw(80, 8);
    // }, 1500);

    // context.stroke();
  }

  // const firstTwist = (
  //   context: CanvasRenderingContext2D,
  //   coordinates: [number, number],
  // ) => {};

  console.log(window.devicePixelRatio);

  const draw = () => {
    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');

    if (ctx) {
      // ctx.scale(3, 3);
      // ctx.scale(2, 2);
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // startDrawing(ctx);
      // console.log(randomColor());
      // ctx.lineWidth = 1;
      // ctx.strokeStyle = randomColor();
      // // ctx.fillRect(10, 10, 50, 90);
      // ctx.beginPath(); // Start a new path
      // ctx.moveTo(10, 10); // Move the pen to (30, 50)
      // ctx.lineTo(14, 16);
      // ctx.lineTo(15, 17);
      // ctx.lineTo(16, 17);
      // ctx.lineTo(17, 17);
      // ctx.lineTo(17, 18);
      // ctx.lineTo(18, 17);
      // ctx.lineTo(19, 17);
      // ctx.lineTo(20, 16);
      // ctx.lineTo(21, 15);
      // ctx.lineTo(22, 15);
      // ctx.lineTo(23, 14);
      // ctx.stroke();

      // for (let i = 0; i < 10; i++) {
      //   const nextCoordinates = [14, 16];
      //   setInterval(() => {
      //     ctx.lineTo(nextCoordinates[0], nextCoordinates[1]);
      //     ctx.stroke();
      //     nextCoordinates[0]++;
      //     nextCoordinates[1]++;
      //   }, 150);
      // }

      // ctx.strokeStyle = randomColor();
      // // ctx.fillRect(30, 30, 50, 50);
      // ctx.beginPath(); // Start a new path
      // ctx.moveTo(30, 50); // Move the pen to (30, 50)
      // ctx.lineTo(150, 100); // Draw a line to (150, 100)
      // ctx.stroke();
    }
  };

  useEffect(() => {
    draw();
    setInterval(() => draw(), 5500);
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
