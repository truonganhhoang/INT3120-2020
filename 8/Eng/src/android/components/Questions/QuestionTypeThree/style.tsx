import { StyleSheet } from 'react-native';
import layout from '../../../../android/constants/layout';
const HEIGHT = layout.window.height;
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  container: {
    alignItems: 'center',
    height: HEIGHT / 2,
    justifyContent:'center'
  }
})

export default styles; 