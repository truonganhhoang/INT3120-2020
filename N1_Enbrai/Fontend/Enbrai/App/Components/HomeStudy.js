import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HomeStudy extends Component {
    render() {
        return (
            <View style ={{flex: 1}}>
                <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#0592D2', '#40DA6C']}
                />
            </View>
        );
    }
}

export default HomeStudy;