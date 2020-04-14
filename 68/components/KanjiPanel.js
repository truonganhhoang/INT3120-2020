import React, {useEffect} from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet} from 'react-native';
import firebase from '../config/firebase';
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg';
const deviceWidth = Dimensions.get('window').width;

const screen = (percent)=> deviceWidth * percent / 100;
var storage = firebase.storage();
var storageRef = storage.ref();

export default function Speaker({kanji}){
    useEffect(()=>{
        console.log("as");
        storageRef.child('imgKanji/19968.svg').getDownloadURL().then(function(url) {
            console.log(url);
        });
    },[]);
    return (
        <TouchableOpacity
         onPress={()=>{}}>
            <View style={styles.KanjiPanel}>
                <View style={styles.centerAlighElement}>
                <SvgUri
       width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"/>
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