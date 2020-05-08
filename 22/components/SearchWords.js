import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,Image,FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/css/css';

class SearchWords extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data:[],
    };
  }
  GetItem(item) {
    Alert.alert(item);
  }
  Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
      <View>
        <View style={styles.banner}>
          <Text
            style={[styles.text_banner, { flex: 1, flexDirection: 'column' }]}
            onPress={this._Done}>
            <Image
              style={styles.icon_back}
              source={require('../assets/icon/back.png')}
            />
            Tra từ
          </Text>
          <Text style={{ flex: 1, flexDirection: 'column' }} />
        </View>
        <View style={styles1.container}>
          <TextInput
            title="Tìm kiếm"
            placeholder="Tìm Kiếm..."
            style={styles1.TextInput}
            onChangeText={text => this.SearchFilterFunction(text)}
          />
        </View>
      </View>
    );

    return Sticky_header_View;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles1.button}>
              <Text
                style={styles1.text}
                onPress={this.GetItem.bind(this, item.key)}>
                {item.key}
              </Text>
            </View>
          )}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
 
  _Done= async () => {
    this.props.navigation.navigate('Menu');
    }

}

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: '#dfeae1',
    padding: 10,
  },
  button: {
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#ffffff',
    height: 50,
    borderWidth: 1,
    borderColor: '#dfeae1',
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 20,
    marginLeft: 15,
  },
  TextInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
    borderColor: '#65a844',
  },
});
export default SearchWords;
