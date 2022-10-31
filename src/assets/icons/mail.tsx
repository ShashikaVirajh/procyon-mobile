import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const MailIcon = ({ fill = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 24 24' fill='none'>
    <Path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M17.9489 6.5H6.05112L12 10.5899L17.9489 6.5ZM4.5 7.2539V17.5H19.5V7.2539L12.4249 12.118L12 12.4101L11.5751 12.118L4.5 7.2539ZM3 5H4.5H19.5H21V6.5V17.5V19H19.5H4.5H3V17.5V6.5V5Z'
      fill={fill}
    />
  </Svg>
);
