import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function CategoryListItem(props) {
    const { product, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.data}>{product.content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        //width: '80%',
        height: 90,
        alignItems: 'center',
        marginBottom: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        //borderBottomColor: 'black',
        //borderBottomWidth: 1,
    
        //borderRadius: 5,
        //borderLeftWidth: 6,
        //borderLeftColor: '#0d658d'
    },
    title: {
        color: '#0d658d',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    data: {
        color: '#8a8a8a'
    },
    content: {
        justifyContent: 'center',
        paddingLeft: 12
    },
    margin: {
        width: 5,
        backgroundColor: 'steelblue'
    }
})