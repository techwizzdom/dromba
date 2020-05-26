import { ArtName } from '../enums/ArtName';

const duration = 7000;

export const LandingConfig = {
  numberOfLines: 100,
  colorOpacity: 0.5,
  canvasOpacityMin: 0,
  canvasOpacityMax: 0.8,
  duration: 5000,
};

export const Arts = [
  {
    artName: ArtName.MegaChaos,
    // numberOfLines: 300,
    // colorOpacity: 0.5,
    // canvasOpacityMin: 0,
    // canvasOpacityMax: 0.8,
    delay: 50,
    lineWidth: 1,
    repetitions: 200,
    duration: 5000,
    clearAfterArt: true,
  },
  {
    artName: ArtName.OhThoseLines,
    // numberOfLines: 300,
    // colorOpacity: 0.5,
    // canvasOpacityMin: 0,
    // canvasOpacityMax: 0.8,
    delay: 50,
    lineWidth: 1,
    repetitions: 200,
    duration: 5000,
    clearAfterArt: true,
  },
];
