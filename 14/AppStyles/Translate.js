import { StyleSheet, Dimensions } from 'react-native';
import PickColor from '../Config/Color'

const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

export default () => {
  const color = PickColor(global.darkmode);
  return StyleSheet.create({
    container: {
      backgroundColor: color.containerColor,
      height: device.height,
      width: device.width
    },
    header: {
      backgroundColor: color.headerColor,
      height: device.height*0.1
    },
    content:{
      height: device.height*0.9,
      width: device.width
    },
    inputTextField: {
      width: device.width*0.9,
      height: device.height*0.07,
      backgroundColor: color.translateField,
      color: color.textColor,
      margin: device.width*0.05,
      paddingHorizontal: device.width*0.02,
      borderRadius: device.height*0.2*0.08,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    outputContainer: {
      width: device.width*0.9,
      height: device.height*0.27,
      margin: device.width*0.05,
      backgroundColor: color.translateField,
      borderRadius: device.height*0.2*0.08,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    outputText: {
      margin: device.width*0.02,
      color: color.textColor
    },
    textLabel: {
      color: "white",
      fontSize: 22,
      padding: 5,
      alignSelf: 'flex-start',
    },
    changeLanguageIcon: {
      width: 32,
      height: 32,
      alignSelf: 'flex-end',
      marginTop: -33
    },
    label: {
      width: device.width*0.9,
      backgroundColor: color.buttonColor,
      marginLeft: device.width*0.05,
      marginBottom: -device.height*0.028,
      borderTopRightRadius: device.height*0.2*0.08,
      borderTopLeftRadius: device.height*0.2*0.08,
    },
  });
}
