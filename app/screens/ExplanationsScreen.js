import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

export default function ExplanationsScreen(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text style={styles.bold}>Bold text</Text>
            <Text style={styles.italic}>Italic text</Text>
            <Text style={styles.underline}>Underlined Text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'}
})