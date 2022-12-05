import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Calender,
  ReactNativeMiCalenderView,
} from '@mindinventory/react-native-mi-calender';

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeMiCalenderView color="#32a852" style={styles.box} />
      <Calender />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 60,
    marginVertical: 20,
    width: 60,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
