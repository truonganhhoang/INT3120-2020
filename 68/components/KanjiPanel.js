import React, {useEffect} from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet} from 'react-native';
import firebase from '../config/firebase';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';
const deviceWidth = Dimensions.get('window').width;

const screen = (percent)=> deviceWidth * percent / 100;
var storage = firebase.storage();
var storageRef = storage.ref('imgKanji/19968.svg');

export default function Speaker({kanji}){
    useEffect(()=>{
        console.log("as");
        
    },[]);
    return (
        <TouchableOpacity
         onPress={()=>{}}>
            <View style={styles.KanjiPanel}>
                <View style={styles.centerAlighElement}>
                    <Text style={{color: '#006265', fontSize:100}}>{kanji}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
} 
const styles = StyleSheet.create({
    centerAlighElement: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    KanjiPanel: {
        width: screen(45),
        height: screen(40),
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,
        elevation: 5,
        marginTop: -20,
    },
})