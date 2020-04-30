import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Styles from '../../styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Body, Title, Content, ListItem, Left, Button, Right, List, Thumbnail, Card, CardItem, Footer, H3 } from 'native-base';
export default class Screen5 extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Cá nhân</Title>
                    </Body>
                </Header>
                <Content>
                    <List> 
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square large source={require('../../img/avt.png')} />
                            </Left>
                            <Body>
                                <H3>Sankhadeep</H3>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                            </Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button info >
                                    <Icon size={30} color="#fff" name="md-contact" />
                                </Button>
                                
                            </Left>
                            <Body><H3>Thiết lập tài khoản</H3></Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button danger >
                                    <Icon size={24} color="#fff" name="md-lock" />
                                </Button>
                            </Left>
                            <Body><H3>Kích hoạt khóa học</H3></Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon size={24} color="#fff"active name="md-paper" />
                                </Button>
                            </Left>
                            <Body><H3>Điều khoản chính sách</H3></Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button success >
                                    <Icon size={24} color="#fff" active name="md-help-buoy" />
                                </Button>
                            </Left>
                            <Body><H3>Trợ giúp</H3></Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button info>
                                    <Icon size={24} color="#fff" active name="md-star-half" />
                                </Button>
                            </Left>
                            <Body><H3>Đánh giá Edumall</H3></Body>
                            <Right></Right>
                        </ListItem>
                        <ListItem icon style={{marginBottom: 10, marginTop: 10}}>
                            <Left>
                                <Button danger>
                                    <Icon size={24} color="#fff" active name="md-log-out" />
                                </Button>
                            </Left>
                            <Body><H3>Đăng xuất</H3></Body>
                            <Right></Right>
                        </ListItem>
                    </List>
                </Content>
                
            </Container>
        )
    }
}

const localStyles = StyleSheet.create({
    header: {
        flex: 1.6,
        padding: 8,
        borderColor: "gray",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    name: {
        marginHorizontal: 8,
        marginLeft: 20,
    },
    text:{
        marginLeft: 20,
    }
})