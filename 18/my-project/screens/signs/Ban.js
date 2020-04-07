import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { rootRef } from '../firebase/config';
import { ListItem } from 'react-native-elements';



const animalRef = rootRef.child('ban');
console.log(animalRef);
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
        setTimeout(() => {
          this.setState({
            animals: animals,
            loading: false,
          })
        }, 3)
      })
      console.log(animals);
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