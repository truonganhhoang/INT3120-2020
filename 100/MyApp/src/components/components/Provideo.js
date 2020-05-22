import { ScrollView, TouchableOpacity } from 'react-native'
import BoxLearn from './BoxLearn';
import React, { Component } from 'react'
import { connect } from 'react-redux';
class Provideo extends Component {
    render() {
        const { courses } = this.props;
        return (
            <ScrollView 
            horizontal={true} 
            style={{flexDirection: "row"}} 
            showsHorizontalScrollIndicator={false}
        >
            {
                courses.map((value)=>(
                    <TouchableOpacity key={value.key}>
                        <BoxLearn course={value} />
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        )
    }
}
function mapStateToProps(state){
    return{ 
        courses: state.courses,
        authors: state.authors
    };
}
export default connect(mapStateToProps)(Provideo);