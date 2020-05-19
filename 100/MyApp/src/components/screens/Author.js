import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title, Text } from 'native-base';
export default class Author extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        const { author } = this.props.route.params;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Text style={{color: "#fff", fontSize: 18, fontWeight: "700"}}>{author[0].name}</Text>
                    </Body>
                    {/* <Right></Right> */}
                </Header>
                <Content>
                    <Text>{author[0].name}</Text>
                </Content>
            </Container>
        )
    }
}
