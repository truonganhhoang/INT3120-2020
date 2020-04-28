import { StyleSheet } from 'react-native';
import PickColor from '../Config/Color';

const styles = () => {
    const color = PickColor(global.darkmode);
    return StyleSheet.create({
        container:{
            marginLeft:16,
            marginRight:16,
            paddingLeft:8,
            paddingTop:8,
            paddingBottom:8,
            borderRadius:8,
            borderColor: 'black',
            borderWidth:1,
            backgroundColor: color.cardColor,
        },
        item:{
            marginTop: 18,
            color: color.textColor,
        },
        Keycorrect:{
            color:'green',
            fontWeight:'bold',
            textDecorationLine:'underline'
        },
        correct:{
            marginRight:80,
            color:'green'
        },
        notcorrect:{
            marginRight:80,
            color:'red'
        },
        questionText: {
            color: color.textColor,
        }
      })
}
export default styles;
