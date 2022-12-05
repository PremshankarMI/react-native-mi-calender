import { Dimensions } from 'react-native';

import { calenderStyle } from '..';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const miUiStyle = () => {
  return {
    calenderStyle: calenderStyle(),
    ScreenHeight,
    ScreenWidth,
  };
};
