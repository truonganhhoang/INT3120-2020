import { StyleSheet, Dimensions } from 'react-native';
import PickColor from '../Config/Color';

const device = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

const styles = (type) => {
  const color = PickColor(global.darkmode);
  return StyleSheet.create({
    swipeListView:{
        paddingLeft: 10,
        paddingRight: 10,
        height: type=='favorite' || type=='remind'? device.height*0.83 : device.height*0.9,
    },
    listitem:{
        marginTop: 8,
        marginBottom: 8
    },
    container:{
      backgroundColor: color.cardColor, // Set your own custom Color
      flexDirection: 'row',
      marginTop: 10,
      borderRadius: 5,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    image:{
      width: 70, 
      height: 70,
      marginVertical: 10,
      marginHorizontal: 20
    },
    content:{
      marginVertical: 10
    },
    englishWord:{
      fontSize: 20,
      color: color.englistWord
    },
    add:{
      right: 5,
      top: 16,
      position:'absolute',
      alignContent: 'center',
      fontSize: 20,
    },
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 'auto',
      marginTop: 10,
      right: 5,
      top: 20,
    },
    textColor: {
      color: color.textColor
    }
  });
}
export default styles;