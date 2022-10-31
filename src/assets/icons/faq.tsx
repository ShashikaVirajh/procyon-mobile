import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { theme } from '@theme';
import { scaledNumber } from '@utils/layout.utils';

export default ({ fill = theme.colors.primary, size = 24 }): JSX.Element => (
  <Svg width={scaledNumber(size)} height={scaledNumber(size)} viewBox='0 0 24 24' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22.2C17.6333 22.2 22.2 17.6333 22.2 12C22.2 6.3667 17.6333 1.8 12 1.8C6.3667 1.8 1.8 6.3667 1.8 12C1.8 17.6333 6.3667 22.2 12 22.2ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
      fill={fill}
    />
    <Path
      d='M10.9141 14.9087H12.5437V14.7407C12.5437 11.3975 15.7357 12.0695 15.7357 8.87747C15.7357 6.89507 14.1565 5.56787 11.9725 5.56787C9.99012 5.56787 8.69658 6.60947 8.19258 8.02067L9.85572 8.64227C10.2085 7.78547 10.8469 7.14707 11.9389 7.14707C13.0813 7.14707 13.8877 7.86947 13.8877 8.86067C13.8877 11.0783 10.9141 10.5911 10.9141 14.7407V14.9087ZM10.5277 16.9919C10.5277 17.6975 11.0149 18.2015 11.7205 18.2015C12.4429 18.2015 12.9469 17.6975 12.9469 16.9919C12.9469 16.2863 12.4429 15.7823 11.7205 15.7823C11.0317 15.7823 10.5277 16.2863 10.5277 16.9919Z'
      fill={fill}
    />
  </Svg>
);
