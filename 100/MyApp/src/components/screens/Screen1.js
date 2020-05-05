import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Container, Content, H3, Fab, Icon, Button } from 'native-base';
import { useScrollToTop } from '@react-navigation/native';
import HeaderScreen1 from '../components/HeaderScreen1';
import Course from '../components/Course';
import { connect } from 'react-redux';
import FilterScreen1 from '../components/FilterScreen1';
class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }
    getCourses(){
        const {filterCourses, courses} = this.props;
        if (filterCourses === 'SHOW_ALL') return courses;
        if (filterCourses === 'BOOK_MARK') return courses.filter( (item) => {return item.onMark == true});
        if (filterCourses === 'SHOW_HOT') return courses.filter( (item) => {return item.hot == true});
        return courses;
    }
    render() {
        
        const { navigation } = this.props;
        const  courses  = this.getCourses();
        return (
            <Container >
                <HeaderScreen1 
                    onPress1= {()=> navigation.navigate('Search')}
                    onPress2= {()=> navigation.navigate('MyCourses')}
                />
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}> 
                    <Content>
                        {courses.map( (item) => (
                            <Course 
                                GoEach={()=> navigation.navigate('EachCourses', {course: item})} 
                                GoAuthor={()=> navigation.navigate('Author')}
                                course = {item}
                                key={item.id}
                            />
                        ))}
                    </Content>
                </ScrollView>
                <FilterScreen1 />
            </Container>
        )
    }
}
function Screen1(props) {
    const ref = React.useRef(null);
  
    useScrollToTop(ref);
  
    return <Store {...props} scrollRef={ref} />;
}
function mapStateToProps(state){
    return{ 
        courses: state.courses,
        filterCourses: state.filterCourses
    };
}
export default connect(mapStateToProps)(Screen1);