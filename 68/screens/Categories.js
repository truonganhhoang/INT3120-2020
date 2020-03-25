import React from 'react';
import { 
  StyleSheet,
  FlatList,
  View 
} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
export default class Categories extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        categories: [
          {id: 1, name: 'Sơ cấp 1'},
          {id: 2, name: 'Sơ cấp 2'},
          {id: 3, name: 'Tiền trung cấp 1'},
          {id: 4, name: 'Tiền trung cấp 2'}
        ]
      }
  }

  render(){
    const {categories} = this.state;
    return (
      <View>
          <FlatList 
            data={categories}
            renderItem = {({item}) => <CategoryListItem category={item}/>}
            keyExtractor= {item => `${item.id}`}
            contentContainerStyle={{paddingLeft:16, paddingRight: 16}}
          />
      </View>
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
