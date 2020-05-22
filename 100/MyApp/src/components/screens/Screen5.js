import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from '../components/User';
import OutLog from '../components/OutLog';
class Screen5 extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const{navigation, onLogin} = this.props;
            return(
                onLogin == false 
                ? <OutLog 
                    goLogin = {() => navigation.navigate('Login')}
                /> 
                : <User/>
            )
    }
}
function mapStateToProps(state){
    return{ 
        onLogin: state.onLogin,
    };
}
export default connect(mapStateToProps)(Screen5);