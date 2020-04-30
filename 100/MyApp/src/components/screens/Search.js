import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon, Body, Title, Right} from 'native-base';
export default class Search extends Component {
    render() {
        return (   
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Tim kiem</Title>
                    </Body>
                    <Right></Right>
                </Header>
            </Container>
        )
    }
}