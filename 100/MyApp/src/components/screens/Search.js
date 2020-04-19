import { Button, View } from 'react-native'
import React, { Component } from 'react'

export default class Search extends Component {
    static navigationOptions = {
        headerShown: false,
        headerTitle: "LoLolo"
      };
    
    render() {
        return (   
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}