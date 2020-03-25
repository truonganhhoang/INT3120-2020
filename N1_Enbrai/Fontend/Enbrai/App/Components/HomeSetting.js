import React, { Component } from 'react';
import {View} from 'react-native'

class HomeSetting extends Component {
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

export default HomeSetting;