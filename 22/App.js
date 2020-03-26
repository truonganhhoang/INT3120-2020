import * as React from 'react';
import { Text, View, StyleSheet, Image, Botton, } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Welcome from './components/Welcome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
        <Text style={styles.paragraph}>
         3000 Từ Vựng Tiếng Anh
         </Text>
        </View>
        
        <Card>
          <Welcome/>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    
  },
  paragraph: {
    color: 'white',
    paddingBottom:15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',

  },

  banner:{
    paddingTop: Constants.statusBarHeight,
    height:'100px',
    width:'100%',
    backgroundColor:'#0cbb66',
  },
});
