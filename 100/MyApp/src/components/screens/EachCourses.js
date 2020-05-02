import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title } from 'native-base'
export default class EachCourses extends Component {
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
                        <Title>Moi khoa hoc</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    
                </Content>
            </Container>
        )
    }
}
