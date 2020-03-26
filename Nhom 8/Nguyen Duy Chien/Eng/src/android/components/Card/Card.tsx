import React from 'react';  
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 400,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});

const CardExtend = (props: { nameCard: any; }) => {
  const { nameCard }  = props; 
  const onPress = () => {
    console.log('OKOKOKOK'); 
  }
  return (
    <View style={styles.container}>
        <TouchableHighlight onPress={onPress} underlayColor="white">
          <View style={styles.button}>
          <Text style={styles.buttonText}>{nameCard}</Text>
          </View>
        </TouchableHighlight>
      </View>
  );
}

export default CardExtend