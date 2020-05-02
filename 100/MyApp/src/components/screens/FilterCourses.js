import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title } from 'native-base'
import Course from '../components/Course'
import { connect } from 'react-redux';

class FilterCourses extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation, courses} = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Theo danh muc</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    {
                        courses.map( (item) => (
                            <Course 
                                GoEach={()=> navigation.navigate('EachCourses')} 
                                GoAuthor={()=> navigation.navigate('Author')}
                                course = {item}
                                key={item.id}
                            />
                        ))
                    }
                </Content>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{ 
        courses: state.courses
    };
}
export default connect(mapStateToProps)(FilterCourses);