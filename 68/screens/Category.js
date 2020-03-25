import React from 'react';
import { 
  StyleSheet,
  FlatList,
  View 
} from 'react-native';
export default class Category extends React.Component {
  render(){
    return (
     <View>Category</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});
