import { MediaBreakpoints } from '../enums/MediaBreakpoints';

export const LandingConfig = {
  numberOfLines: 600,
  colorOpacity: 0.5,
  canvasOpacityMin: 0,
  canvasOpacityMax: 0.8,
  duration: window.innerWidth < MediaBreakpoints.Mobile ? 5800 : 6000,
};
