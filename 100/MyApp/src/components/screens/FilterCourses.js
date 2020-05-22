import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title } from 'native-base'
import Course from '../components/Course'
import { connect } from 'react-redux';

class FilterCourses extends Component {
    constructor(props){
        super(props);
    }
    getCourses(){
        const {courses} = this.props;
        const { key } = this.props.route.params;
        return courses.filter( (item) => {return item.type == key});
    }
    render() {
        const {navigation, authors} = this.props;
        const  courses  = this.getCourses();
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Theo danh muc</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    {courses.map( (item) => {
                        let a = authors.filter( (e)=>(e.id == item.idAuthor));
                        return(
                            <Course 
                            GoEach={()=> navigation.navigate('EachCourses', {course: item})} 
                            GoAuthor={()=> navigation.navigate('Author', {author : a})}
                            course = {item}
                            author = {a}
                            key={item.id}
                        />
                        );
                    })}
                </Content>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{ 
        courses: state.courses,
        authors: state.authors,
    };
}
export default connect(mapStateToProps)(FilterCourses);