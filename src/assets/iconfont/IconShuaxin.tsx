/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconShuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M947.2 721.92c-25.6-15.36-56.32-5.12-71.68 20.48-61.44 107.52-204.8 179.2-363.52 179.2-148.48 0-276.48-61.44-348.16-153.6H256c25.6 0 51.2-25.6 51.2-51.2s-25.6-51.2-51.2-51.2H51.2c-25.6 0-51.2 25.6-51.2 51.2v204.8c0 25.6 25.6 51.2 51.2 51.2s51.2-25.6 51.2-51.2v-66.56c92.16 102.4 245.76 168.96 409.6 168.96 194.56 0 373.76-92.16 455.68-230.4 10.24-25.6 5.12-56.32-20.48-71.68zM972.8 40.96c-25.6 0-51.2 25.6-51.2 51.2v76.8c-92.16-102.4-245.76-168.96-409.6-168.96-199.68 0-373.76 92.16-455.68 230.4-15.36 25.6-5.12 56.32 20.48 71.68 5.12 5.12 15.36 5.12 25.6 5.12 15.36 0 35.84-10.24 46.08-25.6C204.8 174.08 348.16 102.4 512 102.4c143.36 0 271.36 56.32 343.04 143.36H768c-25.6 0-51.2 25.6-51.2 51.2s25.6 51.2 51.2 51.2h204.8c25.6 0 51.2-25.6 51.2-51.2v-204.8c0-25.6-25.6-51.2-51.2-51.2z"
        fill={getIconColor(color, 0, '#FFAB00')}
      />
    </Svg>
  );
};

IconShuaxin.defaultProps = {
  size: 18,
};

IconShuaxin = React.memo ? React.memo(IconShuaxin) : IconShuaxin;

export default IconShuaxin;
