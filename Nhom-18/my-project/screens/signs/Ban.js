import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppConfig } from '../firebase/config';
import { ListItem } from 'react-native-elements';


const rootRef = AppConfig.database().ref();
const animalRef = rootRef.child('sign/ban');

export default class Ban extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      animals: [],
      loading: false,
    })
  }
  componentDidMount() {//lấy dữ liệu trong firebase
    animalRef.on('value', (childSnapshot) => {
      const animals = [];
      childSnapshot.forEach((doc) => {
        animals.push({
          key: doc.key,
          name1: doc.toJSON().name,
          content1: doc.toJSON().content,
          imageout: doc.toJSON().image,
        });
        this.setState({
          animals: animals,
          loading: false,
        })
      })
    })
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.animals.map((item, index) => (
            <ListItem
              key={index}
              leftAvatar={{ source: { uri: item.imageout }, size:80}}
              title={item.name1}
              titleStyle={{ fontWeight: 'bold'}}
              subtitle={item.content1}
              subtitleStyle={{}}
              bottomDivider
            />
          ))
        }

      </ScrollView>
    )
  }
}