import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color'

const styles = () => {
  const color = PickColor(global.darkmode);
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.containerColor,
      alignItems: 'center',
    },
    scrollview:{
      width: '100%',
      paddingLeft:16,
      paddingRight:16,
    },
    listItemContainer: {
      marginTop: 5,
      backgroundColor: color.cardColor,
      borderColor: color.cardColor, 
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    textColor: {
      color: color.textColor
    }
  });
} 
export default styles;