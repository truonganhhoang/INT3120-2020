import React, { Component } from 'react';
import { getSignsInstruction } from '../firebase/config';
import GridList from './GridList';

export default class Instruction extends Component {
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
    getSignsInstruction(this.onFoodsReceived);
  }

  render() {
    return (
      <GridList item={this.state.signsList}></GridList>
    )
  }
}