/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShuaxin from './IconShuaxin';
import IconSmileFill from './IconSmileFill';
import IconXihuan from './IconXihuan';
import IconMore from './IconMore';
import IconMore1 from './IconMore1';
import IconShouye from './IconShouye';
import IconHuiyuan from './IconHuiyuan';
import IconBofang from './IconBofang';
import IconWode from './IconWode';
import IconFenxiang from './IconFenxiang';
import IconZanting from './IconZanting';
import IconTongzhi from './IconTongzhi';
import IconRili from './IconRili';
import IconZhaopian from './IconZhaopian';
import IconYinle from './IconYinle';
export { default as IconShuaxin } from './IconShuaxin';
export { default as IconSmileFill } from './IconSmileFill';
export { default as IconXihuan } from './IconXihuan';
export { default as IconMore } from './IconMore';
export { default as IconMore1 } from './IconMore1';
export { default as IconShouye } from './IconShouye';
export { default as IconHuiyuan } from './IconHuiyuan';
export { default as IconBofang } from './IconBofang';
export { default as IconWode } from './IconWode';
export { default as IconFenxiang } from './IconFenxiang';
export { default as IconZanting } from './IconZanting';
export { default as IconTongzhi } from './IconTongzhi';
export { default as IconRili } from './IconRili';
export { default as IconZhaopian } from './IconZhaopian';
export { default as IconYinle } from './IconYinle';

export type IconNames = 'icon-shuaxin' | 'icon-smile-fill' | 'icon-xihuan' | 'icon-more' | 'icon-more1' | 'icon-shouye' | 'icon-huiyuan' | 'icon-bofang' | 'icon-wode' | 'icon-fenxiang' | 'icon-zanting' | 'icon-tongzhi' | 'icon-rili' | 'icon-zhaopian' | 'icon-yinle';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-shuaxin':
      return <IconShuaxin key="1" {...rest} />;
    case 'icon-smile-fill':
      return <IconSmileFill key="2" {...rest} />;
    case 'icon-xihuan':
      return <IconXihuan key="3" {...rest} />;
    case 'icon-more':
      return <IconMore key="4" {...rest} />;
    case 'icon-more1':
      return <IconMore1 key="5" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="6" {...rest} />;
    case 'icon-huiyuan':
      return <IconHuiyuan key="7" {...rest} />;
    case 'icon-bofang':
      return <IconBofang key="8" {...rest} />;
    case 'icon-wode':
      return <IconWode key="9" {...rest} />;
    case 'icon-fenxiang':
      return <IconFenxiang key="10" {...rest} />;
    case 'icon-zanting':
      return <IconZanting key="11" {...rest} />;
    case 'icon-tongzhi':
      return <IconTongzhi key="12" {...rest} />;
    case 'icon-rili':
      return <IconRili key="13" {...rest} />;
    case 'icon-zhaopian':
      return <IconZhaopian key="14" {...rest} />;
    case 'icon-yinle':
      return <IconYinle key="15" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
