import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color'

const styles = () => {
    const color = PickColor(global.darkmode);
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: color.containerColor
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
        },
        closeModalButton:{
            borderRadius: 5,
            marginTop: 20,
            width: 60,
            backgroundColor: color.buttonColor
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
        view:{
            backgroundColor: color.containerColor,
            borderColor: color.textColor, //darkmode sẽ màu trắng, bình thường là màu đen
            borderBottomWidth:1,
            paddingLeft:16,
            paddingRight:16,
            paddingTop:16
        },
        viewButtonLeft:{
            width:'50%',
            borderLeftWidth:4,
            borderWidth:2,borderColor:'white'
        },
        viewButtonRight:{
            width:'50%',
            borderRightWidth:4, 
            borderWidth:2,borderColor:'white'
        }
      });
}
export default styles;