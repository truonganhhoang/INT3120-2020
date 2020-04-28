import * as React from 'react';
import { View, Image, Text, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Dimensions } from "react-native"
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';


export class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '1'
        }
    }

    handleChangeInput = (text1) => {
        this.setState({ input: text1 })
    }
    handleSubmitInput = () => {
        this.setState( {input: this.state.input + 0} )
    }

    render() {
        const { input } = this.state
        return (
            <View>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={this.handleChangeInput}
                    onSubmitEditing={this.handleSubmitInput}
                />
                <Button title={this.state.input.toString()} onPress={this.handleSubmitInput}/>
            </View>
        )
    }
}