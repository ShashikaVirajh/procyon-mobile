import Svg, { Circle, Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const EmailIcon = ({
  fill = theme.colors.white,
  stroke = theme.colors.primary,
  size = 16,
}): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Circle cx={20} cy={20} r={20} fill={fill} />
    <Circle cx={20} cy={20} r={19.75} stroke='#CCC' strokeOpacity={0.5} strokeWidth={0.5} />
    <Path stroke={stroke} d='M8.5 12.5h22v15h-22z' />
    <Path d='m9 13 11.2 6 9.8-5.571' stroke={stroke} />
    <Circle cx={29.5} cy={26} r={5} stroke={stroke} />
    <Path
      d='M30.417 21.333c.666 1.334 1.6 5.334 0 9.334m-1.667-9.334c-.667 1.334-1.6 5.334 0 9.334M34 24.75h-9m9 2.917h-9'
      stroke={stroke}
    />
  </Svg>
);
