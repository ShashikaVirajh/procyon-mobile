import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const FavouriteIcon = ({
  stroke = theme.colors.primary,
  width = 24,
  height = 24,
}): JSX.Element => (
  <Svg width={scaledNumber(width)} height={scaledNumber(height)}>
    <Path
      d='M21 8.5H6a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M21 15.5h-3a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h3'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
