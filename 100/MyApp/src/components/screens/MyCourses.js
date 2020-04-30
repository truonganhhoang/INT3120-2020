import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class MyCourses extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#E1F5FE" }}>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}
