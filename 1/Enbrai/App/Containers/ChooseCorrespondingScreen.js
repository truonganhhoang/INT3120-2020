import React, { Component } from 'react'
import ChooseCorresponding from '../Components/ChooseCorresponding'
export default class ChooseCorrespondingScreen extends Component {
  render() {
    const { navigation } = this.props.navigation
    return (
      <ChooseCorresponding {...this.props} navigation={navigation} />
    )
  }
}