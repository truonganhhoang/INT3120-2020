import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title } from 'native-base'
import Course from '../components/Course'

export default class FilterCourses extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Theo danh muc</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <Course GoEach={()=> navigation.navigate('EachCourses')}/>
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </Content>
            </Container>
        )
    }
}
