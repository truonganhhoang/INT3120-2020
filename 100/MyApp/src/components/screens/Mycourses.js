import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class Mycourses extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        )
    }
}
