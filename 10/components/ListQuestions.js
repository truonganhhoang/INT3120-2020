import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TestLession(props) {
    const { listQuestions, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text> {listQuestions.id} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        //width: '80%',
        // height: 90,
        // alignItems: 'center',
        // marginBottom: 10,
        // flexDirection: 'row',
        // backgroundColor: 'white',
        // borderRadius: 5,
        // borderLeftWidth: 6,
        // borderLeftColor: '#0d658d'
        //flex: 1,
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 2,
        justifyContent: 'center',
        marginRight: 20
    }
})