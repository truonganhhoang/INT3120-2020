import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { firebaseApp } from '../../firebaseconfig';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
    Dangky(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Thong bao',
                'Dang ky thanh cong',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    { text: 'Quay lai dang nhap', onPress: () => this.props.navigation.goBack()},
                ],
            );
            this.setState({
                email: '',
                password: ''
            })
        })
        .catch(function(error) {
            Alert.alert(
                'Thong bao',
                'Dang ky that bai',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    { text: 'Quay lai dang nhap', onPress: () => this.props.navigation.goBack()},
                ],
            );
        });
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Dang Ky</Text>
            <TextInput
            style={Styles.input}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email} placeholder="Nhap email"
            />
            <TextInput
            style={Styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password} placeholder="Nhap mat khau"
            secureTextEntry={true}
            />

            <TouchableOpacity style={{alignItems:"center"}}
             onPress={()=>(this.Dangky())}
            >
                <Text style={Styles.input}>Dong y dang ky</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:"center"}}
                onPress = {() => this.props.navigation.navigate('Login')}
            >
                <Text style={Styles.input}>Quay ve dang nhap</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const Styles = StyleSheet.create({
    input:{
        width: 300, padding: 20, margin: 10, fontSize: 24, fontWeight: "800", borderRadius: 8,
        backgroundColor: "#0288B1",
        color: "white"
    }
    
})