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

let IconZhaopian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M885 147.73H139c-41 0-74.28 37.83-74.28 84.49v559.56c0 46.66 33.26 84.49 74.28 84.49h746c41 0 74.28-37.83 74.28-84.49V232.22c-0.01-46.66-33.28-84.49-74.28-84.49zM121.92 263.61A67.09 67.09 0 1 1 189 330.7a67.09 67.09 0 0 1-67.08-67.09z m22.5 524.46V562l281.23-204.82L707 788.07z"
        fill={getIconColor(color, 0, '#FF487E')}
      />
      <Path
        d="M586.6 147.73C410.27 188 271 325.57 228.27 501l197.38-143.82L707 788.07H247a477.14 477.14 0 0 0 45.32 88.2H885c41 0 74.28-37.83 74.28-84.49V232.22a96.13 96.13 0 0 0-1.55-17.22 476.44 476.44 0 0 0-157-67.28z"
        fill={getIconColor(color, 1, '#F7487E')}
      />
      <Path
        d="M836.84 332.76c-131.58 0-248.72 61.82-324 158L707 788.07H428.08a408.73 408.73 0 0 0 19.43 88.2H885c41 0 74.28-37.83 74.28-84.49V351.3a410.87 410.87 0 0 0-122.44-18.54z"
        fill={getIconColor(color, 2, '#EF356F')}
      />
      <Path
        d="M645 693.14l62 94.93H604.32a410.4 410.4 0 0 0-15 88.2H885c41 0 74.28-37.83 74.28-84.49V492.09C825.22 505.17 710 582.62 645 693.14z"
        fill={getIconColor(color, 3, '#E51052')}
      />
      <Path
        d="M705.43 790.22h172.55V589.13L596.75 406.87l-73.36 99.94 182.04 283.41z"
        fill={getIconColor(color, 4, '#FFD9E7')}
      />
    </Svg>
  );
};

IconZhaopian.defaultProps = {
  size: 18,
};

IconZhaopian = React.memo ? React.memo(IconZhaopian) : IconZhaopian;

export default IconZhaopian;
