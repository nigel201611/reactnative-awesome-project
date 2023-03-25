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

let IconHuiyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M957.09 384.65l-94.63-259.58a80.6 80.6 0 0 0-75.73-53H238.1a80.58 80.58 0 0 0-75.58 52.62l-96 259.47a38.09 38.09 0 0 0 6.38 37.49l416.82 503.6a29.91 29.91 0 0 0 46.09 0l414.46-501.06a40.36 40.36 0 0 0 6.82-39.54z m-192 31.51L529.76 651.54a26.4 26.4 0 0 1-35.55 0L258.84 416.16a23.67 23.67 0 0 1 0-33.48 23.67 23.67 0 0 1 33.48 0L512 602.35l219.65-219.67a23.67 23.67 0 0 1 33.48 0 23.67 23.67 0 0 1 0 33.48z"
        fill={getIconColor(color, 0, '#FFC65E')}
      />
      <Path
        d="M957.58 386l-39.36-108a401.8 401.8 0 0 0-267.64-101.55c-152.82 0-285.78 85-354.22 210.27L512 602.35l219.65-219.67a23.67 23.67 0 0 1 33.48 0 23.67 23.67 0 0 1 0 33.48L529.76 651.54a26.4 26.4 0 0 1-35.55 0L275 432.35a402.32 402.32 0 0 0-27.81 147.46 407.08 407.08 0 0 0 4.06 57.41l259.88 313.95a2.08 2.08 0 0 0 3.21 0l436.85-528.09a37.83 37.83 0 0 0 6.39-37.08z"
        fill={getIconColor(color, 1, '#FCB138')}
      />
      <Path
        d="M426 516.39l86 86 219.65-219.71a23.67 23.67 0 0 1 33.48 0 23.67 23.67 0 0 1 0 33.48L529.76 651.54a26.4 26.4 0 0 1-35.55 0l-93-93a401.66 401.66 0 0 0-43.78 182.93q0 12.56 0.76 24.93L494 930.47a24.31 24.31 0 0 0 37.47 0L951.1 423.18a37.84 37.84 0 0 0 7.48-14.57 21.86 21.86 0 0 0-11.14-24.8 401.65 401.65 0 0 0-186.64-45.69c-139.42 0-262.32 70.73-334.8 178.27z"
        fill={getIconColor(color, 2, '#FCA315')}
      />
      <Path
        d="M841.14 503.4a401.68 401.68 0 0 0-250.24 87l-61.14 61.15a23.44 23.44 0 0 1-3.09 2.59 401.45 401.45 0 0 0-86.76 211l49.78 60.14a29.91 29.91 0 0 0 46.09 0L883 505.55a407.18 407.18 0 0 0-41.86-2.15z"
        fill={getIconColor(color, 3, '#FF8E12')}
      />
      <Path
        d="M333.93 145.66c7.55 11.34-32.18 25.34-74.09 53.27s-70.14 59.2-77.69 47.86 15.62-50.19 57.53-78.11 86.7-34.36 94.25-23.02z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconHuiyuan.defaultProps = {
  size: 18,
};

IconHuiyuan = React.memo ? React.memo(IconHuiyuan) : IconHuiyuan;

export default IconHuiyuan;
