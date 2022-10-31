import { scaledNumber } from '@utils/layout.utils';

export const fonts = {
  IBM_Plex_Sans_Regular: 'IBMPlexSans-Regular',
  IBM_Plex_Sans_Medium: 'IBMPlexSans-Medium',
  IBM_Plex_Sans_Semi_Bold: 'IBMPlexSans-SemiBold',
  IBM_Plex_Sans_Bold: 'IBMPlexSans-Bold',
};

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const fontSizes = {
  tiny: scaledNumber(10),
  caption: scaledNumber(12),
  button: scaledNumber(14),
  body: scaledNumber(16),
  subtitle: scaledNumber(18),
  title: scaledNumber(20),
  h4: scaledNumber(24),
  h3: scaledNumber(28),
  h2: scaledNumber(32),
  h1: scaledNumber(36),
};
