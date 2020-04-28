import React, { Component } from 'react';
import { getSignsCommand } from '../firebase/config';
import GridList from './GridList';

export default class Command extends Component {
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
    getSignsCommand(this.onFoodsReceived);
  }

  render() {
    return (
      <GridList item={this.state.signsList}></GridList>
    )
  }
}