import React, { Component } from 'react'
import Home from '../Components/Home'
export default class HomeScreen extends Component {
    render() {
        return (
            <Home {...this.props}/>
        )
    }
}
