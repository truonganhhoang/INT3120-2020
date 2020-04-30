import React, { Component } from 'react'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class HeaderScreen1 extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onPress2}>
                    <Icon name='md-albums' size={24} />
                    </Button>
                </Left>
                <Body>
                    <Title>Trang chủ</Title>
                </Body>
                <Right>
                    <Button transparent onPress={this.props.onPress1}>
                    <Icon name='md-search' size={24} />
                    </Button>
                </Right>
            </Header>
        )
    }
}