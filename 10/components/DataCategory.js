import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function DataCategory(props) {
    const { data, onPress } = props;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title} >{data.title1}</Text>
                <Text style={styles.data} >{data.content1}</Text>
                <Text style={styles.title} >{data.title2}</Text>
                <Text style={styles.data} >{data.content2}</Text>
                <Text style={styles.title} >{data.title3}</Text>
                <Text style={styles.data} >{data.content3}</Text>
                <Text style={styles.title} >{data.title4}</Text>
                <Text style={styles.data} >{data.content4}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 10
        // paddingLeft: 10,
        // paddingRight: 10,
        //backgroundColor: '#f7f7f7'
    },
    title: {
        fontWeight: 'bold',
    },
    data: {
        color: 'black'
    }
})