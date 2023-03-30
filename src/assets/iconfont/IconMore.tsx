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

let IconMore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333 533.333a128 128 0 0 1 128 128v149.334a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V661.333a128 128 0 0 1 128-128h149.333z m469.334 0a128 128 0 0 1 128 128v149.334a128 128 0 0 1-128 128H661.333a128 128 0 0 1-128-128V661.333a128 128 0 0 1 128-128h149.334z m-469.334 64H192a64 64 0 0 0-63.893 60.246l-0.107 3.754v149.334a64 64 0 0 0 60.245 63.893l3.755 0.107h149.333a64 64 0 0 0 63.894-60.246l0.106-3.754V661.333a64 64 0 0 0-60.245-63.893l-3.755-0.107z m469.334 0H661.333a64 64 0 0 0-63.893 60.246l-0.107 3.754v149.334a64 64 0 0 0 60.246 63.893l3.754 0.107h149.334a64 64 0 0 0 63.893-60.246l0.107-3.754V661.333a64 64 0 0 0-60.246-63.893l-3.754-0.107zM341.333 64a128 128 0 0 1 128 128v149.333a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V192A128 128 0 0 1 192 64h149.333z m469.334 0a128 128 0 0 1 128 128v149.333a128 128 0 0 1-128 128H661.333a128 128 0 0 1-128-128V192a128 128 0 0 1 128-128h149.334z m-469.334 64H192a64 64 0 0 0-63.893 60.245L128 192v149.333a64 64 0 0 0 60.245 63.894l3.755 0.106h149.333a64 64 0 0 0 63.894-60.245l0.106-3.755V192a64 64 0 0 0-60.245-63.893l-3.755-0.107z m469.334 0H661.333a64 64 0 0 0-63.893 60.245l-0.107 3.755v149.333a64 64 0 0 0 60.246 63.894l3.754 0.106h149.334a64 64 0 0 0 63.893-60.245l0.107-3.755V192a64 64 0 0 0-60.246-63.893l-3.754-0.107z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

IconMore = React.memo ? React.memo(IconMore) : IconMore;

export default IconMore;
