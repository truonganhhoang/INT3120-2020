import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Card extends React.Component {
  render() {
    const {cards} = this.state;
    return (
      <View>
        <Text>Card Screen</Text>
      </View>
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
export default Card;
