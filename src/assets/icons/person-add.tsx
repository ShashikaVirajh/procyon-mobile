import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const PersonAddIcon = ({ stroke = theme.colors.white, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      d='M7 20c0-2.5 2-4.4 4.4-4.4h5.1c2.5 0 4.4 2 4.4 4.4M17 5.2c1.6 1.6 1.6 4.3 0 5.9-1.6 1.6-4.3 1.6-5.9 0-1.6-1.6-1.6-4.3 0-5.9 1.6-1.6 4.2-1.6 5.9 0M2.5 12h4M4.5 14v-4'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
