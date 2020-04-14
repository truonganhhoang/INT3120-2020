import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ShowAnwser(props) {
    const { listAnswer, onPress } = props;
    console.log('==========');
    console.log(listAnswer);
    return (
        
        // <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.contentAnswer}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View>
                    
                </View>
            </TouchableOpacity>
        </View>
        /* </TouchableOpacity> */
    );
}

const styles = StyleSheet.create({
    // container: {
    //     //width: '80%',
    //     //alignItems: 'center',
    //     //backgroundColor: 'black',
    //     borderRadius: 5,
    // },
    title: {
        color: 'black',
        paddingLeft: 10,
        paddingTop: 10
    },
    contentAnswer: {
        height: 100
    }
})