import { Dimensions, Platform, StatusBar } from 'react-native';

/**
 * @constant X_HEIGHT - height of Iphone X screen
 * @constant X_WIDTH - width of Iphone X screen
 */
const X_HEIGHT = 812;
const X_WIDTH = 375;

/**
 * @constant X_MAX_HEIGHT - height of Iphone Xs Max screen
 * @constant X_MAX_WIDTH - width of Iphone Xs Max screen
 */
const X_MAX_HEIGHT = 896;
const X_MAX_WIDTH = 414;

/**
 * @constant height - height of current phone
 * @constant width - width of current phone
 */
const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

/**
 * @type {boolean} - have "Tai thỏ" ?
 */
let isNewShape = false;

/**
 * @type {number} - current status bar height
 */
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
  statusBarHeight = StatusBar.currentHeight;  // Android phone
}

export const isNewShapeScreen = () => isNewShape;
export const getStatusBarHeight = () => statusBarHeight;
