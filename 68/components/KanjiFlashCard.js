import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default function WordItem (){
    return (
            <View style={styles.container}>
               <View style={styles.content}>
               <View style={styles.kanji}>
                   <Text style={styles.kanjiFont} >習</Text>
               </View>
               <View>
                   <Text style={styles.Vi} >Học</Text>
               </View>
               <View style={styles.OnKun} >
                   <Text>シュウ  ジュ</Text>
                   <Text>なら.う  なら.い</Text>
               </View>
               </View>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:0,
        alignItems:'center',
        justifyContent:'center'
    },
    content: {
        flex:0,
        height: '90%',
        alignItems:'center',
        backgroundColor: '#fff',
        elevation:3,
        borderRadius:5,
        width: 300,
        margin: 15

    },
    kanji: {
        paddingTop: '4%',
        height: '50%',
    },
    kanjiFont: {
        fontSize: 160,
        color: '#006265',
    },
    Vi: {
        fontSize: 25
    },
    OnKun: {
        paddingTop: '28%'
    }
});
