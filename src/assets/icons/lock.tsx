import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const LockIcon = ({ stroke = theme.colors.white, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      clipRule='evenodd'
      d='M17 21H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M12 17.09V14.5M12.53 13.22a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06M8 9V7v0a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v2'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
