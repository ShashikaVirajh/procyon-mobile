import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const MapIcon = ({ stroke = theme.colors.primary, size = 16 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      d='M10 2.004v5.329M5.999 3.185v9.484M9.927 10.73v2.939c0 .184.149.333.333.333h3.514c.184 0 .334-.149.334-.333v-2.94'
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m9.334 11.113 2.722-1.779 2.613 1.779M14.002 8V3.74a.666.666 0 0 0-.456-.633l-3.124-1.04a1.337 1.337 0 0 0-.844-.002L6.42 3.119c-.274.091-.57.091-.843 0l-2.702-.9a.667.667 0 0 0-.878.632v7.563c0 .253.143.483.37.597l3.036 1.518c.375.188.817.188 1.193 0l.737-.369'
      stroke={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
