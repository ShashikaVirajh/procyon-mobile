import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const LogoutIcon = ({
  stroke = theme.colors.primary,
  width = 24,
  height = 24,
}): JSX.Element => (
  <Svg width={scaledNumber(width)} height={scaledNumber(height)}>
    <Path
      d='M16 17v5M16 2v5M16 22H2V2h14M8 12h13M18 15l4-3-4-3'
      stroke={stroke}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='square'
      strokeLinejoin='round'
    />
  </Svg>
);
