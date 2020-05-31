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
      width: device.width,
      paddingTop: 20
    },
    inputTextField: {
      width: device.width*0.9,
      height: device.height*0.1,
      backgroundColor: color.translateField,
      color: color.textColor,
      margin: device.width*0.05,
      paddingHorizontal: device.width*0.02,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius:4,
      borderWidth:1,
      borderColor:'black'
    },
    outputContainer: {
      width: device.width*0.9,
      height: device.height*0.2,
      margin: device.width*0.05,
      backgroundColor: color.translateField,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius:4,
      borderWidth:1,
      borderColor:'black'
    },
    outputText: {
      margin: device.width*0.02,
      color: color.textColor
    },
    textLabel: {
      color: "white",
      fontSize: 20,
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
      backgroundColor: 'black',
      marginLeft: device.width*0.05,
      marginBottom: -device.height*0.04,
      borderTopLeftRadius:4,
      borderTopRightRadius:4,
      borderBottomWidth:2,
      borderColor:'black'
    },
  });
}
