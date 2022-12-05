import {
  Platform,
  requireNativeComponent,
  UIManager,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@mindinventory/react-native-mi-calender' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ default: '', ios: "- You have run 'pod install'\n" }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ReactNativeMiCalenderProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ReactNativeMiCalenderView';

export const ReactNativeMiCalenderView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ReactNativeMiCalenderProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
