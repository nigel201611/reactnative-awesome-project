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

let IconTongzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M873.34 749.28l-83.66-167.11a13.57 13.57 0 0 1-1.41-5.83l-0.21-185c-0.06-104.42-70.82-192.29-166.79-218.52v-0.11a108.71 108.71 0 0 0-217.41-0.33c-97.05 25.8-168.62 114.32-168.52 219.47l0.22 185a12.26 12.26 0 0 1-1.4 5.83L150.6 749.6c-24.39 48.8 11.12 106.33 65.74 106.23l591.47-0.44c54.52 0.11 90-57.32 65.53-106.11zM414 887.13a13 13 0 0 0-10 21.16 138 138 0 0 0 215.47-0.11c6.8-8.53 0.86-21.16-10-21z"
        fill={getIconColor(color, 0, '#8D92F8')}
      />
      <Path
        d="M609.4 887.13H414a13 13 0 0 0-10 21.16 138 138 0 0 0 215.47-0.11c6.77-8.53 0.83-21.18-10.07-21.05zM256.31 716.44A402.73 402.73 0 0 0 281 855.78l526.8-0.39c54.52 0.11 90-57.32 65.53-106.11l-83.65-167.11a13.57 13.57 0 0 1-1.41-5.83l-0.21-185a227 227 0 0 0-8.24-60.51A403.79 403.79 0 0 0 660 312.73c-222.94 0-403.69 180.75-403.69 403.71z"
        fill={getIconColor(color, 1, '#8486F8')}
      />
      <Path
        d="M873.34 749.28l-83.66-167.11a13.57 13.57 0 0 1-1.41-5.83l-0.14-124.21C566.74 453.92 387.81 633.9 387.74 855.7l420.07-0.31c54.52 0.11 90-57.32 65.53-106.11zM609.4 887.13H414a13 13 0 0 0-10 21.16 138 138 0 0 0 215.47-0.11c6.77-8.53 0.83-21.18-10.07-21.05z"
        fill={getIconColor(color, 2, '#757BF2')}
      />
      <Path
        d="M564.75 855.57l243.06-0.18c54.52 0.11 90-57.32 65.53-106.11L796.4 595.6a404.76 404.76 0 0 0-231.65 259.97zM609.4 887.13H557a405.32 405.32 0 0 0-7.88 67.7 138.28 138.28 0 0 0 70.33-46.65c6.79-8.53 0.85-21.18-10.05-21.05z"
        fill={getIconColor(color, 3, '#6C6CEA')}
      />
      <Path
        d="M465.24 227c7.57 11.3-32.24 25.33-74.24 53.31s-70.26 59.31-77.83 47.95S328.84 278 370.83 250s86.85-34.41 94.41-23z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconTongzhi.defaultProps = {
  size: 18,
};

IconTongzhi = React.memo ? React.memo(IconTongzhi) : IconTongzhi;

export default IconTongzhi;
