import { StyleSheet } from 'react-native';

import { miColor } from '../../themes';

export const calenderStyle = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: miColor.black,
      // flex: 1,
    },
    text: {
      color: miColor.white,
    },
  });
};
