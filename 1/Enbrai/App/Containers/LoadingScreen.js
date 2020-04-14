import React, { Component } from 'react'
import Loading from '../Components/Loading'
export default class LoadingScreen extends Component {
    render() {
        return (
            <Loading {...this.props}/>
        )
    }
}
