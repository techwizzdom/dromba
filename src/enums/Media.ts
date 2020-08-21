import { MediaBreakpoints } from './MediaBreakpoints';

export enum Media {
  Tablet = `(min-width: ${MediaBreakpoints.Mobile}px) and (max-width: ${MediaBreakpoints.Tablet}px)` as any,
  TabletDown = `(max-width: ${MediaBreakpoints.Tablet}px)` as any,
  Mobile = `(max-width: ${MediaBreakpoints.Mobile}px)` as any,
}
