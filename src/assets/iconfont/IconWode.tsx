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

let IconWode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.12 646.05c428.31 0 424 268.66 424 268.66 3.25 24.38-14.11 44.15-38.83 44.15H126.92c-24.69 0-43-20.05-38.83-44.15 0 0-4.28-268.66 424.03-268.66zM512 65.14c-148.09 0-268.12 120-268.12 268.12S363.93 601.37 512 601.37s268.11-120 268.11-268.11V65.14z m128.81 386.73a217.35 217.35 0 0 1-251.55 0c-16.46-11.7-21.35-31.74-12.88-41.19 8.5-9.54 24.51-7.72 37.29 1.27a175.18 175.18 0 0 0 202.74 0c12.77-9 28.78-10.81 37.28-1.27 8.48 9.45 3.59 29.49-12.88 41.19z"
        fill={getIconColor(color, 0, '#6BC2FC')}
      />
      <Path
        d="M512.12 646.05C137 646.05 93.69 852.16 88.73 903.32q5 23.63 12 46.45a40.78 40.78 0 0 0 26.14 9.09h770.42c24.72 0 42.08-19.77 38.83-44.15 0 0 4.31-268.66-424-268.66zM780.13 231.27q-25.07-2.36-50.75-2.39c-187.22 0-352 96.1-447.7 241.65A268 268 0 0 0 512 601.37c148.08 0 268.11-120 268.11-268.11zM640.81 451.86a217.32 217.32 0 0 1-251.55 0c-16.46-11.69-21.35-31.73-12.88-41.18 8.5-9.54 24.51-7.72 37.29 1.27a175.18 175.18 0 0 0 202.74 0c12.77-9 28.78-10.81 37.28-1.27 8.48 9.45 3.59 29.49-12.88 41.18z"
        fill={getIconColor(color, 1, '#59ADF8')}
      />
      <Path
        d="M512.12 646.05a848.72 848.72 0 0 0-109.51 6.65A534 534 0 0 0 257 958.86h640.29c24.72 0 42.08-19.77 38.83-44.15 0 0 4.31-268.66-424-268.66zM464.9 597.24a268.52 268.52 0 0 0 263.45-105.6 532.94 532.94 0 0 0-263.45 105.6z"
        fill={getIconColor(color, 2, '#3A9CED')}
      />
      <Path
        d="M478.74 958.86h418.55c24.72 0 42.08-19.77 38.83-44.15 0 0 2.29-143.73-164.06-220.93a537.55 537.55 0 0 0-293.32 265.08z"
        fill={getIconColor(color, 3, '#2595E8')}
      />
      <Path
        d="M506.5 127c7.56 11.35-32.2 25.36-74.16 53.32s-70.2 59.25-77.76 47.9 15.64-50.23 57.59-78.18 86.77-34.38 94.33-23.04z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
    </Svg>
  );
};

IconWode.defaultProps = {
  size: 18,
};

IconWode = React.memo ? React.memo(IconWode) : IconWode;

export default IconWode;
