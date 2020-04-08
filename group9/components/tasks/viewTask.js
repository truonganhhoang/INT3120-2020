import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Header, CheckBox } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { getTasks } from '../firebaseApi/task';

export default class ViewTask extends React.Component {
  state = {
    data: [],
    dataSelected: { name: '', lesson: '', date: '', description: '', done: '' },
    refreshing: false,
  };

  modal = React.createRef();

  componentDidMount = async () => {
    let ret = await getTasks();
    ret.map((item) => {
      const date = new Date(item.date.seconds * 1000);
      const day = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
      item.date = day;
    });
    this.setState({ data: ret.filter((item) => item.type == 'Task') });
    console.log(this.state.data);
  };

  onRefresh = () => {
    setTimeout(() => this.setState({ refreshing: false }), 3000);
    this.componentDidMount();
  };

  openModal = (item) => {
    this.setState({ dataSelected: item });
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  deleteItem = (id) => {
    console.log(id);
    this.state.data.splice(id, 1);
    this.setState({ data: this.state.data.filter((i) => i !== id) });
  };

  handleChange = (id) => {
    let newState = Object.assign({}, this.state);
    newState.data[id].done = !newState.data[id].done;
    this.setState(newState);
  };

  renderRow = (item) => {
    let id = this.state.data.indexOf(item);
    let swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => {
          this.deleteItem(id);
        },
      },
    ];

    return (
      <Swipeout
        right={swipeBtns}
        key={id}
        autoClose={true}
        style={styles.block}
        backgroundColor="transparent"
      >
        <View>
          <TouchableOpacity onPress={() => this.openModal(item)}>
            <View style={styles.rowContainer}>
              <CheckBox checked={this.state.data[id].done} onPress={() => this.handleChange(id)} />
              <Text style={styles.note}>
                {id + 1}. {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{
            text: 'LIST TASK',
            style: { fontSize: 25, color: '#fff', letterSpacing: 4, fontWeight: 'bold' },
          }}
          containerStyle={{
            backgroundColor: '#1976D2',
            height: 100,
          }}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }
        >
          {this.state.data.map((item) => this.renderRow(item))}
        </ScrollView>
        <Modalize ref={this.modal} modalHeight={550}>
          <View>
            <View style={styles.content_header}>
              <CheckBox
                checked={this.state.dataSelected.done}
                onPress={() => {
                  let select = this.state.dataSelected;
                  select.done = !select.done;
                  this.setState({ dataSelected: select });
                }}
                size={30}
              />
              <Text style={{ fontSize: 25, paddingTop: 10 }}>{this.state.dataSelected.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-list-box" size={30} style={{ padding: 20 }} />
              <Text style={{ padding: 20, fontSize: 20, paddingLeft: 0 }}>
                Lesson: {this.state.dataSelected.lesson}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-calendar" size={30} style={{ padding: 20 }} />
              <Text style={{ padding: 20, fontSize: 20, paddingLeft: 0 }}>
                Date: {this.state.dataSelected.date}
              </Text>
            </View>
            <View style={{ borderTopColor: '#B7B7B7', borderTopWidth: 1.75 }}>
              <Text style={{ paddingLeft: 5, color: '#B7B7B7', fontSize: 18 }}>Note</Text>
              <Text style={{ fontSize: 18, padding: 5 }}>
                {this.state.dataSelected.description}
              </Text>
            </View>
          </View>
        </Modalize>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1976D2',
    letterSpacing: 1,
  },
  content_header: {
    padding: 15,
    paddingBottom: 0,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalTitle: {
    paddingTop: 25,
    fontSize: 30,
    paddingRight: 10,
  },
  block: {
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
  },
  rowContainer: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  note: {
    fontSize: 16,
    fontWeight: '400',
  },
});
