import { colors } from './colors';
import { Theme } from '.';

export const dark: Theme = {
  isLight: false,
  isDark: true,
  backgroundColor: '#080915',
  gradientBackground:
    'linear-gradient(145deg, rgba(9,11,23,0.94) 0%, rgba(14,16,36,0.94) 55%, rgba(16,19,44,0.94) 100%)',
  gradientMedian: '#23284f',
  border: '#eef1ff',
  darkGreen: colors.darkGreen,
  textColor: '#eef1ff',
  textColorSecondary: '#bcc5f0',
  hyperlinkColor: '#f3f6ff',
  hyperlinkBackgroundColor: '#23284f',
  hyperlinkUnderlineColor: '#7e91ff',
  themeToggleColor: '#ffcf54',
  themeToggleLine: '#f4f6ff',
  timelineConnectionLineColor: '#6d78ad',
  svgFill: {
    primary: '#eef1ff',
  },
  buyMeACroissantBackgroundColor: '#3c4db3',
  serviceCardLogoColor: '#eef1ff',
};
