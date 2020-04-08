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
  Dimensions,
  TextInput,
  Picker,
  Button,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Header, CheckBox} from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { getTasks } from '../firebaseApi/task';
import DateTimePicker from 'react-native-modal-datetime-picker';

let heightPhone = Dimensions.get("window").height;
let widthPhone = Dimensions.get("window").width;

export default class ViewTask extends React.Component {
  state = {
    data: [],
    idSelected: 0,
    editModal: false,
    table: [{ name: 'Toan' }, { name: 'Tieng Viet' }, { name: 'Tieng Anh' }],
    dataSelected: {id: 0, name: '', lesson: '', date: '', description: '', done: '' },
    refreshing: false,
    isDateTimePickerVisible: false,
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

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    const day = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
//    this.setState({ dataSelected.date: date });
//    this.setState({ : day });
    this.hideDateTimePicker();
  };

  openModal = (item,id) => {
    this.setState({ dataSelected: item });
    this.setState({idSelected: id});
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
          <TouchableOpacity onPress={() => this.openModal(item,id)}>
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

  editContent = () => {
    this.setState({editModal: !this.state.editModal });
  }

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
        <Modalize ref={this.modal} modalHeight={heightPhone*0.7}>
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
              <TextInput
                placeholder={this.state.dataSelected.name}
                style={styles.titleModal} 
                placeholderTextColor='#1976D2'
                editable={this.state.editModal}
              />
              <Ionicons name="ios-brush" style={styles.edit}size={25} onPress={this.editContent}></Ionicons>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-list-box" size={30} style={{ padding: 20 }} />
              <Picker
                selectedValue={this.state.dataSelected.lesson}
                enabled = {this.state.editModal}
                style={styles.lessonModal}
                onValueChange={(itemValue, itemIndex) => this.setState({ selectedLesson: itemValue })}
              >
                {this.state.table.map((item, i) => (
                  <Picker.Item label={item.name} value={item.name} key={i} />
                ))}
              </Picker>
            </View>
            <View> 
              <Button
                title={this.state.dataSelected.date}
                icon={
                  <Ionicons
                    name="ios-calendar"
                    size={30}
                    style={{ color: '#fff', paddingRight: '2.5%' }}
                  />
                }
                onPress={this.showDateTimePicker}
                buttonStyle={{ backgroundColor: '#1976D2', marginRight: '2.5%', marginLeft: '2.5%' }}
              />
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                />
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
    paddingTop: 20, 
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleModal: {
    fontSize: 27,  
    fontWeight:'bold', 
    letterSpacing:1, 
    color:'#1976D2',
    width: widthPhone*0.7,
  },
  lessonModal: {
    marginTop:10,
    //color:'#fdd835',
    height: 50,
    width: widthPhone*0.5,
  },
  edit: {
    marginLeft:'auto',
    color: '#c62828',
    marginRight: 10,
    paddingTop: 10,
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
