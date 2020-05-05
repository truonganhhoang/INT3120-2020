import { StyleSheet } from 'react-native'; 
import layout from '../../../constants/layout'; 

const imageSize = (layout.window.width - 20)/3; 

const styles = StyleSheet.create({
  image: {
    width: imageSize, 
    height: imageSize,
  }, 
  view_a: {
    top: 0,
    left: 10,
    position: "absolute",
  }, 
  view_b: {
    top: 0, 
    left: imageSize + 70, 
    right:10,
  }, 
  view_c: {
    top: 0, 
    left: 10, 
    position: "absolute"
  }, 
  view_d: {
    top: 0, 
    left: imageSize + 70, 
    right: 10,
  }
}); 

export default styles; 