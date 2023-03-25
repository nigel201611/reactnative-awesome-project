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

let IconZanting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64.33C264.76 64.33 64.33 264.76 64.33 512S264.76 959.67 512 959.67 959.67 759.24 959.67 512 759.24 64.33 512 64.33z m208.3 476.85L560.2 631l-159.63 89.5a26.7 26.7 0 0 1-39.75-23.71l2.95-184.34 3-184.33a26.7 26.7 0 0 1 40.49-22.43l156.63 94.51L721 495a26.7 26.7 0 0 1-0.7 46.18z"
        fill={getIconColor(color, 0, '#FF716E')}
      />
      <Path
        d="M954.36 442.88C877.84 314 737.23 227.56 576.45 227.56c-242.55 0-439.17 196.62-439.17 439.16a440 440 0 0 0 14 110.45C232.79 887.85 364 959.67 512 959.67c247.24 0 447.67-200.43 447.67-447.67a451.28 451.28 0 0 0-5.31-69.12z m-234.06 98.3L560.2 631l-159.63 89.5a26.7 26.7 0 0 1-39.75-23.71l2.95-184.34 3-184.33a26.7 26.7 0 0 1 40.49-22.43l156.63 94.51L721 495a26.7 26.7 0 0 1-0.7 46.18z"
        fill={getIconColor(color, 1, '#FF5C64')}
      />
      <Path
        d="M660.29 431.76q-20.62 0-40.73 2L721 495a26.7 26.7 0 0 1-0.74 46.14L560.2 631l-159.63 89.5a26.7 26.7 0 0 1-39.75-23.71L363 562.4a402.24 402.24 0 0 0-106.42 273.08 406.35 406.35 0 0 0 2.6 46A445.6 445.6 0 0 0 512 959.67c230.46 0 420.24-174.15 444.94-398a402.62 402.62 0 0 0-296.65-129.91z"
        fill={getIconColor(color, 2, '#FC4956')}
      />
      <Path
        d="M512 959.67c191.15 0 354.32-119.81 418.51-288.42a402.12 402.12 0 0 0-166.64-35.9c-188 0-345.89 128.43-390.87 302.31a447.22 447.22 0 0 0 139 22.01z"
        fill={getIconColor(color, 3, '#F23D4F')}
      />
      <Path
        d="M403.63 156c7.57 11.36-32.23 25.38-74.22 53.36s-70.26 59.31-77.83 47.95 15.65-50.28 57.64-78.26 86.84-34.38 94.41-23.05z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconZanting.defaultProps = {
  size: 18,
};

IconZanting = React.memo ? React.memo(IconZanting) : IconZanting;

export default IconZanting;
