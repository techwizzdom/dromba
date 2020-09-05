import { MediaBreakpoints } from '../enums/MediaBreakpoints';
import { DeviceType } from '../enums/DeviceType';

const getDeviceType = () => {
  const width = window.innerWidth;

  if (width <= MediaBreakpoints.Tablet && width > MediaBreakpoints.Mobile) {
    return DeviceType.Tablet;
  } else if (width <= MediaBreakpoints.Mobile) {
    return DeviceType.Mobile;
  }
};

export const ArtConfig = {
  numberOfLines: 300,
  colorOpacity: 0.8,
  canvasOpacityMin: 0,
  canvasOpacityMax: 0.8,
  duration: getDeviceType() === DeviceType.Mobile ? 6500 : 6000,
};
