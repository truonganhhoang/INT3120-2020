import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header(){

    return (

        <ImageBackground style={styles.header} source={require('../image/student.png')} >
            <Text>
                Hahaha
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: "center",
    }
})