import { colors } from './colors';
import { Theme } from '.';

export const dark: Theme = {
  isLight: false,
  isDark: true,
  backgroundColor: colors.baseBlack,
  border: colors.baseWhite,
  textColor: colors.baseWhite,
  textColorSecondary: colors.vanishingGray,
  hyperlinkColor: colors.baseBlack,
  hyperlinkBackgroundColor: colors.alienGreen,
  themeToggleColor: colors.radioactiveSun,
  themeToggleLine: colors.baseWhite,
  timelineConnectionLineColor: colors.vanishingGray,
  svgFill: {
    primary: colors.baseWhite,
  },
};
