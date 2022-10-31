import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const OrderIcon = ({
  stroke = theme.colors.primary,
  width = 24,
  height = 24,
}): JSX.Element => (
  <Svg width={scaledNumber(width)} height={scaledNumber(height)}>
    <Path
      clipRule='evenodd'
      d='M26.087 9.086 22.08 5.08a2.834 2.834 0 0 0-2.003-.83H9.917a2.833 2.833 0 0 0-2.833 2.833v19.834a2.833 2.833 0 0 0 2.833 2.833h14.167a2.833 2.833 0 0 0 2.833-2.833V11.09c0-.751-.3-1.472-.83-2.004v0Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M26.917 11.333H21.25a1.417 1.417 0 0 1-1.416-1.416V4.25M14.648 23.446h4.704'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      clipRule='evenodd'
      d='M15.347 18.064V16.41c0-.456.37-.825.826-.825h1.654c.456 0 .826.37.826.825v1.655c0 .456-.37.826-.826.826h-1.654a.828.828 0 0 1-.826-.826ZM11.334 24.674v-1.655c0-.456.37-.826.825-.826h1.655c.456 0 .826.37.826.826v1.655c0 .456-.37.826-.826.826H12.16a.826.826 0 0 1-.825-.826ZM19.362 24.674v-1.655c0-.456.37-.826.826-.826h1.654c.457 0 .826.37.826.826v1.655a.828.828 0 0 1-.827.826h-1.655a.826.826 0 0 1-.824-.826h0Z'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m20.173 22.2-2.139-3.344M13.827 22.2l2.139-3.344'
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
