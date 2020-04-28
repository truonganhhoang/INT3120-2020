import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, borderWidth: 1, borderRadius: 8, borderColor: "aqua"}}>
                <TouchableHighlight
                onPress
                >
                    <Text style={{margin: 4, padding: 8, 
                        color: this.props.completed == true ? 'green' : 'aqua'}}>
                        {this.props.taskName}
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
