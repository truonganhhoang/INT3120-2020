import React from 'react';
import { 
  StyleSheet,
  FlatList,
  Text,
  View 
} from 'react-native';
export default class Category extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
        title: navigation.getParam('categoryName'),
        headerTitleStyle: {
          textAlign: 'center',
          color: '#006265',
      }
    };
  };
  render(){
    return (
     <View><Text>Category</Text></View>
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
