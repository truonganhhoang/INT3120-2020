import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class Account extends Component {
    render() {
        return (
            <View style ={{flex: 1}}>
                <View style = {{marginTop : "50%"}}>
                <Text style = {{textAlign : "center", color : "gray"}}>Tạo một tài khoản để bảo vệ dữ liệu của bạn</Text>
                <Button 
                    containerStyle = {{margin: "5%", width : "40%", marginLeft : "30%"}} 
                    buttonStyle = {{alignContent:'center'}} 
                    title = "Tạo một tài khoản"
                    onPress = {()=>{this.props.navigation.navigate('SignInScreen')}}
                >                      
                </Button>
                </View>
            </View>
        );
    }
}
export default  withNavigation( Account);

