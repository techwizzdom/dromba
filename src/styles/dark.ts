import { colors } from './colors';
import { Theme } from '.';

export const dark: Theme = {
  isLight: false,
  isDark: true,
  backgroundColor: colors.baseDark,
  gradientBackground: colors.gradientDark,
  gradientMedian: colors.baseDark,
  border: colors.baseLight,
  textColor: colors.baseLight,
  textColorSecondary: colors.vanishingGray,
  hyperlinkColor: colors.baseDark,
  hyperlinkBackgroundColor: colors.alienGreen,
  hyperlinkUnderlineColor: colors.greenNormal,
  themeToggleColor: colors.radioactiveSun,
  themeToggleLine: colors.baseLight,
  timelineConnectionLineColor: colors.vanishingGray,
  svgFill: {
    primary: colors.baseLight,
  },
  buyMeACroissantBackgroundColor: colors.alienGreen,
};
