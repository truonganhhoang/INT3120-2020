import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
// import soccer from '../assets/cup.png';

export default function WordListItem (props){
    const {words} = props;
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Text style={styles.title}>{words.name}</Text>
                
            </View>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: 150,
        marginHorizontal: 8,
        shadowOffset: {width: 10, height: 10},
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 10,
        marginBottom: 30
    },
    title: {
        fontSize: 17,
        marginBottom: 8,
        color: '#006265'
    }
});
