import Svg, { Circle, Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export const OffersIcon = ({
  stroke = theme.colors.primary,
  width = 24,
  height = 24,
}): JSX.Element => (
  <Svg width={scaledNumber(width)} height={scaledNumber(height)}>
    <Path
      d='M10.416 18.304h.225c.224 0 .448-.034.634-.139.187-.07.374-.209.523-.348.15-.139.262-.313.336-.521.075-.209.113-.418.113-.626 0-.21-.038-.453-.113-.627a1.297 1.297 0 0 0-.336-.521 1.688 1.688 0 0 0-.523-.348c-.186-.14-.41-.174-.634-.174h-.225M12.172 12.704a1.296 1.296 0 0 0-.336-.521 1.687 1.687 0 0 0-.523-.348 1.557 1.557 0 0 0-.672-.14h-.225M9.67 11.696h-.224c-.225 0-.449.035-.635.139-.187.07-.374.209-.523.348-.15.139-.262.313-.374.521a1.847 1.847 0 0 0-.112.627c0 .208.038.452.112.626.075.208.187.382.336.521.15.14.337.279.523.348.224.14.448.174.673.174h.224M9.67 18.305h-.224c-.224 0-.449-.035-.635-.14a1.687 1.687 0 0 1-.523-.347 1.296 1.296 0 0 1-.336-.522M10.024 15v-3.304M10.024 11v.696M10.024 18.304V19M10.024 15v3.304'
      stroke={stroke}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
    <Circle cx={10} cy={15} r={8} stroke={stroke} strokeWidth={1.5} strokeMiterlimit={10} />
    <Path
      d='M8.208 4.772A8 8 0 1 1 20 15.246'
      stroke={stroke}
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </Svg>
);
