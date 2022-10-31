import React from 'react';
import Svg, { Line, Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const DownloadIcon = ({ stroke = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 24 24' fill='none'>
    <Path d='M12 5.5V13' stroke={stroke} strokeWidth='1.5' />
    <Line x1='5' y1='18.25' x2='19' y2='18.25' stroke={stroke} strokeWidth='1.5' />
    <Path d='M8 10.5L12 13.5L16 10.5' stroke={stroke} strokeWidth='1.5' strokeLinejoin='round' />
  </Svg>
);
