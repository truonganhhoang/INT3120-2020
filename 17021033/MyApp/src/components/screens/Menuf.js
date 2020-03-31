import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default class Menuf extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.footer}>
                <Button title="Home" style={styles.button} onPress={() => navigation.navigate("Home")}></Button>
                <Button title="D/M" style={styles.button} onPress={() => navigation.navigate("Danhmuc")}></Button>               
                <Button title="Cart" style={styles.button}></Button>                
                <Button title="T/B" style={styles.button}></Button>                              
                <Button title="Acc" style={styles.button}></Button>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    footer : {
        flex: 1,
        borderColor: "gray",
        borderWidth: 0,
        borderTopWidth: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        backgroundColor: "aqua"
    },
    button: {
        backgroundColor: "aqua",
        flex: 1
    }
});