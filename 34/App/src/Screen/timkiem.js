import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, AppRegistry, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

export default class TimKiem extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.input}>
                <TextInput
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
            <View style={styles.buttonsubmit}>
                <View style={styles.buttonleft}>
                    <Button title = 'Anh - Việt'></Button>
                </View>
                <View style={styles.buttonright}>
                    <Button title = 'Việt - Anh'></Button>
                </View>
            </View>
            <View style={styles.output}>
                <Text style={{fontSize: 20}}>
                    
                </Text>
            </View>
          </View>
        );
    }
}
AppRegistry.registerComponent('TimKiem', () => TimKiem);

const styles = StyleSheet.create({
    container:{
        padding: 10
    },

    input: {
        width: "100%",
        backgroundColor: "white",
        height: "35%"
    },

    buttonsubmit:{
        height: "10%",
        width: "100%",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonleft:{
        flex: 1,
        paddingRight:5
    },

    buttonright:{
        flex: 1,
        paddingLeft:5
    },

    output:{
        height: "55%",
        width: "100%",
        backgroundColor: "white"
    }
    
});