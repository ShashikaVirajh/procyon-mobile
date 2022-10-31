import React from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const MenuIcon = ({ fill = theme.colors.white, size = 38 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 38 38'>
    <Rect width='38' height='38' rx='19' fill={fill} />
    <Line x1='9' y1='14.25' x2='29' y2='14.25' stroke={theme.colors.black} strokeWidth='1.5' />
    <Line x1='9' y1='20.25' x2='29' y2='20.25' stroke={theme.colors.black} strokeWidth='1.5' />
    <Line x1='9' y1='26.25' x2='29' y2='26.25' stroke={theme.colors.black} strokeWidth='1.5' />
  </Svg>
);
