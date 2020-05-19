import React, { Component } from 'react'
import ReadyDetail from '../Components/ReadyDetail'
export default class ReadyScreen extends Component {
  render() {
    const { navigation } = this.props.navigation
    return (
      <ReadyDetail {...this.props} navigation={navigation} />
    )
  }
}