import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const BackArrowIcon = ({ stroke = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      d='M19 12H5M12 19l-7-7 7-7'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
