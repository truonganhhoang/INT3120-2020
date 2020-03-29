import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

export class Test extends React.Component {
    render () {
      return (
        <View >
          <Text style={styles.container}>abc</Text>
        </View>
      )
    }
  
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      textAlign:"center",
    },
 
  });