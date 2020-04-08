import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {id: 1, text: 'card 1'},
        {id: 2, text: 'card 2'},
        {id: 3, text: 'card 3'},
        {id: 4, text: 'card 4'},
        {id: 5, text: 'card 5'},
        {id: 6, text: 'card 6'},
      ],
    };
  }

  render() {
    const {cards} = this.state;
    return (
      <FlatList
        data={cards}
        renderItem={({item}) => <Card card={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Cards;
