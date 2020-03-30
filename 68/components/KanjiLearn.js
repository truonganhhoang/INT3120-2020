import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import challenge from '../assets/mission.png'

export default function KanjiLearn (props){
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Image source={challenge} style={styles.ImageChallenge}></Image>
                <Text style={styles.title}>Thử thách 1</Text>
            </View>
        </TouchableOpacity>
    )
    
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        elevation: 4,
        borderRadius: 5,
        backgroundColor:'white',
        marginBottom: 30,
        borderWidth: 0,
        flexDirection: 'row',
        
    },
    title: {
        fontSize: 21,
        color: '#006265',
        marginLeft: '20%'
    },
    ImageChallenge: {
        width: 30,
        height: 30,
        marginLeft: '2%'
    }
});
