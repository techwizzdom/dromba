import { colors } from './colors';
import { Theme } from '.';

export const dark: Theme = {
  isLight: false,
  isDark: true,
  backgroundColor: '#050505',
  gradientBackground:
    'radial-gradient(circle at 0% 0%, rgba(255, 212, 0, 0.24) 0%, rgba(255,212,0,0) 34%), radial-gradient(circle at 100% 0%, rgba(255, 212, 0, 0.16) 0%, rgba(255,212,0,0) 30%), linear-gradient(180deg, #030303 0%, #101010 100%)',
  gradientMedian: '#242424',
  border: '#ffd400',
  darkGreen: colors.darkGreen,
  textColor: '#fff6c8',
  textColorSecondary: '#edcf3f',
  hyperlinkColor: '#0a0a0a',
  hyperlinkBackgroundColor: '#ffd400',
  hyperlinkUnderlineColor: '#ffd400',
  themeToggleColor: '#ffd400',
  themeToggleLine: '#111111',
  timelineConnectionLineColor: '#d4b846',
  svgFill: {
    primary: '#ffd400',
  },
  buyMeACroissantBackgroundColor: '#ffd400',
  serviceCardLogoColor: '#ffd400',
};
