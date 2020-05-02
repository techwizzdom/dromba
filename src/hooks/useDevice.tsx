import { useEffect, useState } from 'react';
import { DeviceType } from '../enums/DeviceType';
import { MediaBreakpoints } from '../enums/MediaBreakpoints';

export function useDevice(): DeviceType {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = (event: any) => {
      setWidth(event.target.innerWidth);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  if (width <= MediaBreakpoints.Tablet && width > MediaBreakpoints.Mobile) {
    return DeviceType.Tablet;
  } else if (width <= MediaBreakpoints.Mobile) {
    return DeviceType.Mobile;
  }

  return DeviceType.Desktop;
}
