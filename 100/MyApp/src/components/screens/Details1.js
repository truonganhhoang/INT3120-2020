import React from 'react'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content, Text} from 'native-base';
import { TouchableOpacity } from 'react-native';
export default function Details1({ navigation }) {
    return (
        <Container>
            <Header>
                <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={32} />
                </Button>
                </Left>
                <Body>
                    <Title>Chi tiet</Title>
                </Body>
                <Right></Right>
            </Header>
            <Content>
                <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
                    <Text>vao gio hang</Text>
                </TouchableOpacity>
            </Content>
        </Container>
    )
}

