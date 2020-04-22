import React, { Component } from 'react';
import { getSignsBan } from '../firebase/config';
import GridList from './GridList'

export default class Ban extends Component {
  state = {
    signsList: [],
  }
  onFoodsReceived = (signsList) => {
    this.setState(prevState => ({
      signsList: prevState.signsList = signsList
    }));
    console.log('List: ',signsList)
  }

  componentDidMount() {
    getSignsBan(this.onFoodsReceived);
  }

  render() {
    return (
      <GridList item={this.state.signsList}></GridList>
    )
  }
}