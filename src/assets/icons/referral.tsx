import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const ReferralIcon = ({
  fill = theme.colors.primary,
  width = 24,
  height = 24,
}): JSX.Element => (
  <Svg width={scaledNumber(width)} height={scaledNumber(height)}>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM17.25 15.25v7.5h1.5v-7.5h-1.5Z'
      fill={fill}
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.25 18.25h7.5v1.5h-7.5v-1.5ZM6.995 11.74a.75.75 0 0 1 .704-.49h7.562a.75.75 0 0 1 .695.47l1.02 2.532-1.391.56-.831-2.062H8.221L4.443 22.964l-1.406-.52L6.995 11.74Z'
      fill={fill}
    />
  </Svg>
);
