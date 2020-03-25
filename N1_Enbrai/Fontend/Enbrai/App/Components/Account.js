import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Account extends Component {

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#0592D2', '#39D57F']}
                />
            </View>
        );
    }
}

export default Account;

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
})