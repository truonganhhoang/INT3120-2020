import React, { Component } from 'react'
import { Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Body, Title, Content, ListItem, Left, Button, Right, List, Thumbnail, H3 } from 'native-base';
import { connect } from 'react-redux';
class User extends Component {
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
                        <ListItem 
                            icon style={{marginBottom: 10, marginTop: 10}}
                            button
                            onPress = {this.props.onSignOut}
                        >
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
export default connect(null)(User);