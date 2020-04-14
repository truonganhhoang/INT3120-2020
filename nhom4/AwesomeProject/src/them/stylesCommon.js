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
        height: 140,
        margin:5, 
        paddingTop: 5
    },
    IconSelect:{
        height: 45,
        resizeMode: 'contain'
    }
});
export default StyleCommon;