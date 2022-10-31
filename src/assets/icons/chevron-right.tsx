import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const ChevronRightIcon = ({ fill = theme.colors.primary, size = 16 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 8 12' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.599976 1.4L1.99998 0L7.99998 6L1.99998 12L0.599976 10.6L5.19998 6L0.599976 1.4Z'
      fill={fill}
    />
  </Svg>
);
