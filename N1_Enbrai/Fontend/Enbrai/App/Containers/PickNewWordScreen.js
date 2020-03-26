import React, { Component } from 'react'
import PickNewWord from '../Components/PickNewWord'
export default class PickNewWordScreen extends Component {
  
  render() {
    return (
      <PickNewWord {...this.props} />
    )
  }
}