import React, { Component } from 'react'
import Notification from '../Components/Notification'
export default class NotificationScreen extends Component {
    render() {
        return (
            <Notification {...this.props}/>
        )
    }
}
