import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');

// 根据百分比获取宽度
function wp(percentagge: number) {
  const value = (percentagge * viewportWidth) / 100;
  return Math.round(value);
}
// 根据百分比获取高度
function hp(percentagge: number) {
  const value = (percentagge * viewportHeight) / 100;
  return Math.round(value);
}

export { viewportWidth, viewportHeight, wp, hp };
