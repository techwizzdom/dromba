import { useEffect, useState } from 'react';
import { Device } from '../enums/Device';
import { MediaBreakpoints } from '../enums/MediaBreakpoints';

export function useMediaType(): Device {
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
    return Device.Tablet;
  } else if (width <= MediaBreakpoints.Mobile) {
    return Device.Mobile;
  }

  return Device.Desktop;
}
