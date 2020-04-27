import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color'

const styles = () => {
    const color = PickColor(global.darkmode)
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: color.containerColor
        },
        view:{
            backgroundColor: color.containerColor,
            borderColor: color.textColor,//darkmode sẽ màu trắng, bình thường là màu đen
            borderBottomWidth:1,
            paddingLeft:16,
            paddingRight:16,
            paddingTop:16
        },
        textTime:{
            alignSelf:'center',
            marginBottom:14,
            color:'gray'
        }
      });
}
export default styles;