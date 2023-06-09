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

let IconXihuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M897.8944 206.6432c-99.072-99.072-259.6352-99.072-358.7072 0l-25.1392 25.1392-25.1392-25.1392c-99.072-99.072-259.6352-99.072-358.7072 0s-99.072 259.6352 0 358.7072l342.5792 342.5792c22.784 22.784 59.7504 22.784 82.5856 0l317.44-317.44 25.1392-25.1392c98.9696-99.0208 98.9696-259.6352-0.0512-358.7072z m-70.3488 259.9936c-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752s-13.1072-2.5088-18.1248-7.4752a25.61536 25.61536 0 0 1 0-36.1984 77.4144 77.4144 0 0 0 22.8352-55.0912c0-20.7872-8.0896-40.3456-22.8352-55.0912-14.6944-14.7456-34.304-22.8352-55.0912-22.8352s-40.3968 8.0896-55.0912 22.8352a25.61536 25.61536 0 0 1-36.1984 0 25.61536 25.61536 0 0 1 0-36.1984c24.3712-24.3712 56.7808-37.8368 91.2896-37.8368 34.5088 0 66.9184 13.4144 91.2896 37.8368 24.3712 24.3712 37.8368 56.7808 37.8368 91.2896 0.0512 34.4576-13.4144 66.8672-37.7856 91.2896z"
        fill={getIconColor(color, 0, '#FF623E')}
      />
    </Svg>
  );
};

IconXihuan.defaultProps = {
  size: 18,
};

IconXihuan = React.memo ? React.memo(IconXihuan) : IconXihuan;

export default IconXihuan;
