import React from 'react';
import {
  StyleSheet,
  // FlatList,
  View
} from 'react-native';

import CategoryListItem from '../components/CategoryListItem';

export default class Levels extends React.Component {
  static navigationOptions = {
    title: 'Chọn Level',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: '#006265',
    },
    headerTintColor: '#006265',
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Sơ Cấp 1' },
        { id: 2, name: 'Sơ Cấp 2' },
        { id: 3, name: 'Tiền Trung Cấp 1' },
        { id: 4, name: 'Tiền Trung Cấp 2' },
        { id: 5, name: 'Kanji của bạn' }
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        {/* <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              level={item}
              onPress={() => navigation.navigate('KanjiGroup', {
                kanjiGroupName: item.name
              })}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={styles.container}
        /> */}
        <CategoryListItem
          level={categories[0]}
          onPress={() => navigation.navigate('KanjiGroup', {
            kanjiGroupName: categories[0].name
          })}
        />
        <CategoryListItem
          level={categories[1]}
          onPress={() => navigation.navigate('KanjiGroup', {
            kanjiGroupName: categories[1].name
          })}
        />
        <CategoryListItem
          level={categories[2]}
          onPress={() => navigation.navigate('KanjiGroup', {
            kanjiGroupName: categories[2].name
          })}
        />
        <CategoryListItem
          level={categories[3]}
          onPress={() => navigation.navigate('KanjiGroup', {
            kanjiGroupName: categories[3].name
          })}
        />
        <CategoryListItem
          level={categories[4]}
          onPress={() => navigation.navigate('FavoriteKanjiScreen', {
            kanjiGroupName: categories[4].name
          })}
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
