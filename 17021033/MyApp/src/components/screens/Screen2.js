import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
                <Text style={styles.danhmuc}>Danh muc 1</Text>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    danhmuc: {
        borderWidth: 1,
        height: 80,
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 10,
        width: "100%",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
})