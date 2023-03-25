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

let IconShouye: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M931.49 454.71L771 293.24 566 87a76.15 76.15 0 0 0-108 0L253 293.24 92.51 454.71C57.4 490 80.39 553.85 128.24 553.85h56.66V918.5a41 41 0 0 0 41 41h187.54V553.85h197.12V959.5h187.55a41 41 0 0 0 41-41V553.85h56.66c47.84 0 70.83-63.85 35.72-99.14z"
        fill={getIconColor(color, 0, '#6BC2FC')}
      />
      <Path
        d="M771 293.24L668.13 189.72c-242.71 11.47-436 211.88-436 457.43a456.3 456.3 0 0 0 123.1 312.35h58.21V553.85h197.12V959.5h187.55a41 41 0 0 0 41-41V553.85h56.66c47.85 0 70.84-63.81 35.73-99.14z"
        fill={getIconColor(color, 1, '#59ADF8')}
      />
      <Path
        d="M802.28 324.7c-137.66 24.69-254 110.89-319.49 229.15h127.77V959.5h187.55a41 41 0 0 0 41-41V553.85h56.66c47.85 0 70.84-63.81 35.73-99.14z"
        fill={getIconColor(color, 2, '#3A9CED')}
      />
      <Path
        d="M610.56 753.89V959.5h187.55a41 41 0 0 0 41-41V553.85h56.66c28.34 0 48-22.38 52-48-148.14 23.71-272.53 118.38-337.21 248.04z"
        fill={getIconColor(color, 3, '#2595E8')}
      />
      <Path
        d="M484.39 177.93c7.56 11.35-32.21 25.36-74.16 53.31S340 290.5 332.47 279.15s15.63-50.23 57.58-78.15 86.78-34.42 94.34-23.07z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
