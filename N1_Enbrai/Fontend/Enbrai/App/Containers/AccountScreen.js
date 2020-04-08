import React, { Component } from 'react'
import Account from '../Components/Account'
export default class AccountScreen extends Component {
    render() {
        return (
            <Account {...this.props}/>
        )
    }
}
