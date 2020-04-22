import React, { Component } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Styles } from '../../styles'
import Moikhoahoc from '../components/Moikhoahoc'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Screen3 extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "space-evenly"}}>
                <View style={Styles.header}>
                    <Text style={[Styles.h1text, {color: "#E1F5FE", margin: 8}]}>Giỏ hàng</Text>
                </View>
                <View style={[Styles.container]}>
                    <ScrollView >
                        <Moikhoahoc />
                    </ScrollView>
                   
                </View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")}>
                    <View style={{
                        width: "100%",
                        height: 60,
                        backgroundColor: "#42A5F5",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{color: "#212121", fontSize: 24, fontWeight: "600"}}>Thanh toán</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }
}
