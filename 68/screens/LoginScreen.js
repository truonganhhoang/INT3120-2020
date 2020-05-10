import React from 'react'
import Login from '../components/Login'

export default class LoginScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'Login',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        },
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#006265',
        },
      });
    render(){
        const {navigation} = this.props;

        return (
            <Login onPress={() => navigation.navigate('Levels')}/>
        )
    }
}