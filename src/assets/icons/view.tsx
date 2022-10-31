import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const ViewIcon = ({ stroke = theme.colors.primary, size = 40 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      d='M14.122 9.88a3.004 3.004 0 0 1 0 4.245 3.004 3.004 0 0 1-4.245 0 3.004 3.004 0 0 1 0-4.245 3 3 0 0 1 4.245 0'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      clipRule='evenodd'
      d='M3 12c0-.659.152-1.311.446-1.912v0C4.961 6.991 8.309 5 12 5s7.039 1.991 8.554 5.088v0c.294.601.446 1.253.446 1.912s-.152 1.311-.446 1.912v0C19.039 17.009 15.691 19 12 19s-7.039-1.991-8.554-5.088v0A4.346 4.346 0 0 1 3 12Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
