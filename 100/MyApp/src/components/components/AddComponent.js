import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({ 
            newTaskName: ''
         });
    }
    render() {
        return (
            <View style={{
                backgroundColor: "tomato",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 64
            }}>
                <TextInput 
                style={{
                    padding: 24,
                    color: "#fff",
                    borderRadius: 8,
                    borderWidth: 1,
                }}
                keyboardType="default"
                placeholder="Nhap vao ten task"
                autoCapitalize="none"
                onChangeText={
                    ( text ) => {
                        this.setState({newTaskName: text});
                    }
                }
                />
                <TouchableHighlight
                    style={{margin: 12}}
                    onPress = {(event) =>{
                        if (!this.state.newTaskName.trim()){
                            return;
                        }
                        this.props.onClickAdd(this.state.newTaskName);
                    }}
                >
                    <Text style={{ fontSize: 32 }}>ADD</Text>
                </TouchableHighlight>
            </View>
        );
    }
}