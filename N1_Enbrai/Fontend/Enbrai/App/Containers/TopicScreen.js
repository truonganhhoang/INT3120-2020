import React, { Component } from 'react'
import Topic from '../Components/Topic'
export default class TopicScreen extends Component {
    render() {
        return (
            <Topic {...this.props}/>
        )
    }
}
