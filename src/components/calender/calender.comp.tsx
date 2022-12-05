import React from 'react';
import { Text, View } from 'react-native';

import { useMiUiContext } from '../../context';

export const CalenderComponent = () => {
  const { styles } = useMiUiContext();

  return (
    <View style={styles.calenderStyle.container}>
      <Text style={styles.calenderStyle.text}>CalenderComponent</Text>
    </View>
  );
};
