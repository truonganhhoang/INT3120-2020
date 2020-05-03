import React, { Component } from 'react'
import { Fab, Icon, Button } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Alert, TouchableOpacity } from 'react-native';
class FilterScreen1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }
      setFilter(actionType){
            this.props.dispatch({ type: actionType });
            this.setState({ active: !this.state.active })
      }
    render() {
        return (
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ padding: 0}}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                <Icon name="md-funnel"/>
                <TouchableOpacity 
                    style={{ backgroundColor: '#34A34F' }}
                    onPress={()=>this.setFilter('FILTER_BOOK_MARK')}
                    >
                    <Icon name="md-bookmark" />
                </TouchableOpacity>
                {/* <Button style={{ backgroundColor: '#34A34F' }}>
                    <MaterialIcons name="fiber-new" color="#fff" size={24} />
                </Button> */}
                <TouchableOpacity
                    onPress={()=>this.setFilter('FILTER_HOT')}
                    style={{ backgroundColor: '#DD5144' }}
                    >
                    <Icon name="md-flame" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.setFilter('FILTER_SHOW_ALL')}
                    style={{ backgroundColor: '#3B5998' }}
                    >
                    <Icon name="md-planet" />
                </TouchableOpacity>
            </Fab>
        )
    }
}
function mapStateToProps(state){
    return{ 
        filterCourses: state.filterCourses
    }
}
export default connect(mapStateToProps)(FilterScreen1);