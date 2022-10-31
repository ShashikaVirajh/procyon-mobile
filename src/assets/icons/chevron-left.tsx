import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const ChevronLeftIcon = ({ fill = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 24 24' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.4 7.4L14 6L8 12L14 18L15.4 16.6L10.8 12L15.4 7.4Z'
      fill={fill}
    />
  </Svg>
);
