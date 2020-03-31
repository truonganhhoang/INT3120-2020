import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import challenge1 from '../assets/mission.png'

export default function KanjiLearn (props){
    const {image, onPress} = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image.url} style={styles.ImageChallenge}></Image>
                <Text style={styles.title}>{image.name}</Text>
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
        marginBottom: 11,
        borderWidth: 0,
        flexDirection: 'row',
        
    },
    title: {
        fontSize: 19,
        color: '#006265',
        marginLeft: '15%',
        textAlign: 'center'
    },
    ImageChallenge: {
        width: 30,
        height: 30,
        marginLeft: '2%'
    }
});
