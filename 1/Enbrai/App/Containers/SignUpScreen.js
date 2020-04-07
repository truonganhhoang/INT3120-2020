import React, { Component } from 'react'
import SignUp from '../Components/SignUp'
export default class SignUpScreen extends Component {
    render() {
        return (
            <SignUp {...this.props}/>
        )
    }
}
