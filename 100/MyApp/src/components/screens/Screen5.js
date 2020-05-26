import React, { Component } from 'react'
import { connect } from 'react-redux';
import User from '../components/User';
import OutLog from '../components/OutLog';
import auth from '@react-native-firebase/auth';
class Screen5 extends Component {
    constructor(props){
        super(props);
    }
    goLogout = () =>{
        this.props.dispatch({ type: 'ON_LOGOUT' });
        this.props.navigation.navigate('Login');
    }
    onSignOut(){
        auth()
        .signOut()
        .then(() => {this.goLogout()});
        
    }
    render() {
        const{navigation, onLogin} = this.props;
            return(
                onLogin == false 
                ? <OutLog 
                    goLogin = {() => navigation.navigate('Login')}
                /> 
                : <User 
                onSignOut = {()=> this.onSignOut()}
                goOldUi = {() => navigation.navigate('OldUi')}
                />
            )
    }
}
function mapStateToProps(state){
    return{ 
        onLogin: state.onLogin,
    };
}
export default connect(mapStateToProps)(Screen5);