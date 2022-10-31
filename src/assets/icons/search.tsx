import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const SearchIcon = ({ fill = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)}>
    <Path
      d='m20.5 19-4.929-4.714a6.316 6.316 0 0 0 1.286-3.857C16.857 6.829 14.03 4 10.43 4S4 6.829 4 10.429s2.829 6.428 6.429 6.428c1.414 0 2.7-.514 3.857-1.286l4.928 4.843L20.5 19Zm-10.071-4.071c-2.443 0-4.5-2.058-4.5-4.5 0-2.443 2.057-4.5 4.5-4.5 2.442 0 4.5 2.057 4.5 4.5 0 2.442-2.058 4.5-4.5 4.5Z'
      fill={fill}
    />
  </Svg>
);
