import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const AccountIcon = ({ stroke = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      clipRule='evenodd'
      d='M6 19.58a8.62 8.62 0 0 1 6.023-2.463c2.308 0 4.408.92 5.977 2.416a8.62 8.62 0 0 1-6.023 2.463c-2.308 0-4.408-.919-5.977-2.416Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M3.975 17.021A8.93 8.93 0 0 1 3 12.996c0-4.974 4.026-9 9-9s9 4.026 9 9c0 1.45-.363 2.81-.977 4.023'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M14.121 8.875a3 3 0 1 1-4.242 4.242 3 3 0 0 1 4.242-4.242'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
