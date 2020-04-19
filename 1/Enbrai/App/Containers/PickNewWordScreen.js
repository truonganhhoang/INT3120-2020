import React, { Component } from 'react'
import PickNewWord from '../Components/PickNewWord'
export default class PickNewWordScreen extends Component {
  
  render() {
    const {navigation} = this.props.navigation
    
    return (
      <PickNewWord {...this.props} navigation={navigation} />
    )
  }
}