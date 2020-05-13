import React, { Component } from 'react'
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content} from 'native-base';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import Course from '../components/Course';
class MyCourses extends Component {
    getCourses(){
        const {myCourses, courses} = this.props;

        return null;
    }
    render() {
        const { navigation, authors, courses, myCourses } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back'/>
                    </Button>
                    </Left>
                    <Body>
                        <Title>Khóa học</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}> 
                    <Content>
                        {myCourses.map( (item) => {
                            let course = courses.filter( (e)=>(e.id == item.key));
                            let a = authors.filter( (e)=>(e.id == course[0].idAuthor));
                            return(
                                <Course
                                GoEach={()=> navigation.navigate('EachCourses', {course: course[0]})} 
                                GoAuthor={()=> navigation.navigate('Author', {author : a})}
                                course = {course[0]}
                                author = {a}
                                key={item.id}
                            />
                            );
                        })}
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{ 
        courses: state.courses,
        authors: state.authors,
        myCourses: state.myCourses,
    };
}
export default connect(mapStateToProps)(MyCourses);