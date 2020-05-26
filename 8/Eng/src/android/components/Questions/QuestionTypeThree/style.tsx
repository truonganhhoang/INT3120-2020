import { StyleSheet } from 'react-native';
import layout from '../../../../android/constants/layout';
const HEIGHT = layout.window.height;
const WIDTH = layout.window.width;
const styles = StyleSheet.create({
  image: {
    width: WIDTH * 0.35,
    height: WIDTH * 0.35
  },
  container: {
    alignItems: 'center',
    height: HEIGHT / 2,
    justifyContent: 'center'
  }
})

export default styles; 