import {
    StyleSheet
} from 'react-native';
const StyleCommon = StyleSheet.create({
    viewMain: {
        padding: 20
    },
    button1: {
        backgroundColor: 'red',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    ColSelect:{
        height: 150,
        margin:5, 
        paddingTop: 10
    },
    IconSelect:{
        height: 40, 
        resizeMode: 'contain'
    }
});
export default StyleCommon;