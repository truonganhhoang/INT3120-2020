import React from 'react';
import { 
  StyleSheet,
  FlatList,
  View 
} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'
export default class Levels extends React.Component {
        static navigationOptions = {
            title: 'Chọn Level',
            headerTitleStyle: {
                textAlign: 'center',
                color: '#006265',
            }
          };
  constructor(props){
    super(props);
      this.state = {
        categories: [
          {id: 1, name: 'Sơ Cấp 1'},
          {id: 2, name: 'Sơ Cấp 2'},
          {id: 3, name: 'Tiền Trung Cấp 1'},
          {id: 4, name: 'Tiền Trung Cấp 2'}
        ]
      }
  }

  render(){
    const {navigation} =  this.props;
    const {categories} = this.state;
    return (
      <View>
          <FlatList 
            data={categories}
            renderItem = {({item}) => <CategoryListItem level={item} onPress={() => navigation.navigate('KanjiGroup', {
              kanjiGroupName: item.name
            })}/>}
            keyExtractor= {item => `${item.id}`}
            contentContainerStyle={styles.container}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 30
  }
});
