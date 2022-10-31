import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const BuildingIcon = ({ stroke = theme.colors.primary, size = 16 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      clipRule='evenodd'
      d='M7.333 4.667h5.333c.368 0 .667.298.667.667V14H6.666V5.334c0-.369.298-.667.667-.667Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9 11.333h2V14H9zM9 7v2M11 7v2M9 8h2'
    />
    <Path
      d='M9.333 4.667v-2A.667.667 0 0 0 8.666 2H3.333a.667.667 0 0 0-.667.667V14h6.667M14.667 14H1.334M2.666 6h1.333M2.666 8h1.333M2.666 10h1.333'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
