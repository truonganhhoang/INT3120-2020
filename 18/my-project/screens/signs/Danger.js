import React, { Component } from 'react';
import { getSignsDanger } from '../firebase/config';
import GridList from './GridList';

export default class Danger extends Component {
  state = {
    signsList: [],
  };
  onFoodsReceived = (signsList) => {
    this.setState((prevState) => ({
      signsList: (prevState.signsList = signsList),
    }));
    // console.log('List: ', signsList);
  };

  componentDidMount() {
    getSignsDanger(this.onFoodsReceived);
  }
  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     animals: [],
  //     loading: false,
  //   })
  // }
  // componentDidMount() {//lấy dữ liệu trong firebase
  //   arrDanger.on('value', (childSnapshot) => {
  //     const animals = [];
  //     childSnapshot.forEach((doc) => {
  //       animals.push({
  //         key: doc.key,
  //         name1: doc.toJSON().name,
  //         content1: doc.toJSON().content,
  //         image1: doc.toJSON().image,
  //       });
  //       console.log('timeout database3')
  //       this.setState({
  //         animals: animals,
  //         loading: false,
  //       })
  //     })
  //   })
  // }

  render() {
    return <GridList item={this.state.signsList}></GridList>;
  }
}
