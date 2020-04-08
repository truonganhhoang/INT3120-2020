import { Dimensions, Platform, StatusBar } from 'react-native';

const X_HEIGHT = 812;
const X_WIDTH = 375;

const X_MAX_HEIGHT = 896;
const X_MAX_WIDTH = 414;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isNewShape = false;
let statusBarHeight = 0;

if (Platform.OS === 'ios') {
  if (
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
      (W_WIDTH === X_MAX_WIDTH && W_HEIGHT === X_MAX_HEIGHT))
  ) {
    isNewShape = true;
    statusBarHeight = 44;
  } else {
    statusBarHeight = 20;
  }
} else {
  statusBarHeight = StatusBar.currentHeight;
}

export const isNewShapeScreen = () => isNewShape;
export const getStatusBarHeight = () => statusBarHeight;
