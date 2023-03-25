/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFaxian1 from './IconFaxian1';
import IconWoting from './IconWoting';
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
export { default as IconFaxian1 } from './IconFaxian1';
export { default as IconWoting } from './IconWoting';
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

export type IconNames = 'icon-faxian1' | 'icon-woting' | 'icon-shouye' | 'icon-huiyuan' | 'icon-bofang' | 'icon-wode' | 'icon-fenxiang' | 'icon-zanting' | 'icon-tongzhi' | 'icon-rili' | 'icon-zhaopian' | 'icon-yinle';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-faxian1':
      return <IconFaxian1 key="1" {...rest} />;
    case 'icon-woting':
      return <IconWoting key="2" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="3" {...rest} />;
    case 'icon-huiyuan':
      return <IconHuiyuan key="4" {...rest} />;
    case 'icon-bofang':
      return <IconBofang key="5" {...rest} />;
    case 'icon-wode':
      return <IconWode key="6" {...rest} />;
    case 'icon-fenxiang':
      return <IconFenxiang key="7" {...rest} />;
    case 'icon-zanting':
      return <IconZanting key="8" {...rest} />;
    case 'icon-tongzhi':
      return <IconTongzhi key="9" {...rest} />;
    case 'icon-rili':
      return <IconRili key="10" {...rest} />;
    case 'icon-zhaopian':
      return <IconZhaopian key="11" {...rest} />;
    case 'icon-yinle':
      return <IconYinle key="12" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
