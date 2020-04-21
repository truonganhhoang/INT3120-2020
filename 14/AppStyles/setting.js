import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color'

const styles = () => {
  const color = PickColor(global.darkmode);
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      backgroundColor: color.modalColor,
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: 250,
      maxHeight: 800,
    },
    closeModalButton:{
      borderRadius: 5,
      marginTop: 20,
      width: 60,
      backgroundColor: color.buttonColor
    },
    textContainer:{
      width: 250,
      height: 36,
      backgroundColor: color.buttonColor,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    flatList:{
      width: 250,
      maxHeight: 350,
    },
    container: {
      backgroundColor: color.containerColor,
      height:'100%'
    },
    card: {
      backgroundColor: color.cardColor,
      borderColor: color.cardColor,
      borderRadius: 5,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    textColor: {
      color: color.textColor
    },
    checkboxColor: {
      backgroundColor: color.checkboxColor,
      borderColor: color.checkboxColor
    },
    updateButton: {
      backgroundColor: color.buttonColor,
      borderRadius: 5,
    },
    listItemContainer: {
      backgroundColor: color.modalColor,
    }
  });
}

export default styles;