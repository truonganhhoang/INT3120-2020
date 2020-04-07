import 'react-native-gesture-handler';
import React from 'react';
//import axios from 'axios';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  // Load data from localhost/REST API/json-server uisng ngrok
  componentDidMount() {
    return fetch('https://532bc0a7.ngrok.io/categories')
      .then( (respone) => respone.json())
      .then((responeJson) => {
        //console.log(responeJson);
        this.setState({
          categories: responeJson
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }


  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <FlatList data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              category={item}
              onPress={() => navigation.navigate('Test', {
                categoryName: item.title,
                id: item.id
              })}
            />
          )}
          keyExtractor={item => `${item.id}`}
          style={styles.scroll} 
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: '#f7f7f7'
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  }
});

