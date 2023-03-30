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

let IconMore1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M103.135086 87.771429c-145.334857 117.101714-129.426286 711.241143 0 825.124571 129.389714 113.883429 694.016 133.010286 823.405714-31.853714 129.389714-164.864 113.481143-676.169143 0-793.234286C813.059657-29.257143 248.433371-29.257143 103.135086 87.771429zM347.432229 500.809143a91.428571 91.428571 0 1 1-182.857143 0 91.428571 91.428571 0 0 1 182.857143 0z m256 0a91.428571 91.428571 0 1 1-182.857143 0 91.428571 91.428571 0 0 1 182.857143 0z m256 0a91.428571 91.428571 0 1 1-182.857143 0 91.428571 91.428571 0 0 1 182.857143 0z"
        fill={getIconColor(color, 0, '#FF579A')}
      />
    </Svg>
  );
};

IconMore1.defaultProps = {
  size: 18,
};

IconMore1 = React.memo ? React.memo(IconMore1) : IconMore1;

export default IconMore1;
