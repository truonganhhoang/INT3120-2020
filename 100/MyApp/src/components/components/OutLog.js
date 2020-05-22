import React, { Component } from 'react'
import { TouchableHighlight, View, Text, Alert } from 'react-native';
import { Container, Header, Body, Title, Content } from 'native-base';
export default class OutLog extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Cá nhân</Title>
                    </Body>
                </Header>
                <Content>
                    <View
                        style={{
                            padding: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 32,
                        }}
                    >
                        <Text
                        style = {{
                            fontSize: 24,
                            marginBottom: 16,
                        }}
                        >
                            Bạn chưa đăng nhập
                        </Text>
                        <Text
                        style = {{
                            fontSize: 14,
                            marginBottom: 16,
                        }}
                        >
                            Hãy đăng nhập để sử dụng đầy đủ dịch vụ của chúng tôi
                        </Text>
                        <TouchableHighlight
                        style={{
                            backgroundColor: "#0288D1",
                            borderRadius: 8,
                            width: 200,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onPress = {this.props.goLogin}
                        >
                            <Text style={{fontSize: 16, color:"white"}}>Đăng nhập</Text>
                        </TouchableHighlight>
                    </View>
                </Content>
            
        </Container>
        )
    }
}
