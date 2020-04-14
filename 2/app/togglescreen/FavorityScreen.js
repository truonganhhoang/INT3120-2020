/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Data from './data.js';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Bạn có chắc chắn muốn xóa không?',
              [
                {
                  text: 'Không',
                  onPress: () => console.log('Không'),
                  style: 'cancel',
                },
                {
                  text: 'Có',
                  onPress: () => {
                    Data.splice(this.props.index, 1);
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View>
          <TouchableOpacity>
            <View style={styles.item}>
              <View style={({flex: 1}, styles.canchinh)}>
                <FontAwesome5 name={'volume-up'} size={30} />
              </View>
              <View style={{flex: 4, alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    marginBottom: 5,
                  }}>
                  {this.props.item.eng}
                </Text>
                <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                  {this.props.item.vn}
                </Text>
                <Text>
                  <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                  <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                  <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                  <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                  <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                </Text>
              </View>
              <View style={({flex: 1}, styles.canchinh)}>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}

export default class FavorityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
    };
  }
  refreshFlatList = deleteKey => {
    this.setState(prevState => {
      return {
        deleteRowKey: deleteKey,
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <FontAwesome5 name={'bars'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
              Yêu thích
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 name={'heart'} color={'#fff'} size={30} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <FontAwesome5 name={'user-circle'} color={'#fff'} size={30} />
          </View>
        </View>
        <FlatList
          data={Data}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#12a6e4',
  },
  search: {
    height: 50,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  canchinh: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
