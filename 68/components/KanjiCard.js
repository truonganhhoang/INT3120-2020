import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default function KanjiCard (props){
    return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    <Text style={styles.title}>字</Text>
                    <Text style={styles.titleSmall}>Tự</Text>
                </View>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 107,
        height:150,
        backgroundColor: 'white',
        margin:6,
        elevation: 3
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        color: '#006265'
    },
    titleSmall:{
        textAlign: 'center',
        color: 'rgb(170, 170, 170)'
    }
});
