import React, { Component } from 'react'
import SignIn from '../Components/SignIn'
export default class SignUpScreen extends Component {
    render() {
        return (
            <SignIn {...this.props}/>
        )
    }
}
