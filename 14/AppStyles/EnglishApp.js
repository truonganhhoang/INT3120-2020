import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color'

const styles = () => {
  const color = PickColor(global.darkmode)
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.containerColor
    },
    header: {
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    dropDownItem:{
      marginTop:10,
      marginLeft:16,
      marginRight:16,
      
    },
    title:{
      flexDirection:'row',
      backgroundColor: color.cardColor,
      paddingLeft:15,
      paddingTop:15,
      paddingBottom:15,
      borderRadius: 10,
    },
    dropDownText: {
      color: color.textColor,
      top: -10
    },
    titleText: {
      marginLeft:16,
      marginTop: 2,
      color: color.textColor,
    },
    dropDownContentContainer: {
      backgroundColor: color.cardColor,
      marginTop: -8,
      paddingLeft: 5,
      paddingRight: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    }
  });
}
export default styles;