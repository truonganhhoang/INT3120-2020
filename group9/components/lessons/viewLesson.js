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
  Alert,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { Header, CheckBox, Button} from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { getLessons } from '../firebaseApi/lesson';
import DateTimePicker from 'react-native-modal-datetime-picker';

let heightPhone = Dimensions.get("window").height;
let widthPhone = Dimensions.get("window").width;

export default class ViewLesson extends React.Component {
    state = {
      data:  [],
      table: [],
      idSelected: 0,
      editModal: false, 
      dataSelected: {},
      refreshing: false,
      isDateTimePickerVisible: false,
    };

  modal = React.createRef();

  componentDidMount = async () => {
    let arrret = [];
    try {
    arrret = await getLessons();
    this.setState({ data: arrret });
    } catch (err) {
      console.log(err);
    }
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
    const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
    let newState = Object.assign({}, this.state);
    newState.dataSelected.date = date;
    newState.dataSelected.day = day;
    this.setState(newState);
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

  renderRow = (item,id) => {
   // let id = this.state.data.indexOf(item);
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
        autoClose={true}
        key ={id}
        style={styles.block}
        backgroundColor="transparent"
      >
        <View>
          <TouchableOpacity onPress={() => this.openModal(item,id)} key ={id}>
            <View style={styles.rowContainer}> 
              <Text style={styles.note}>
                {id + 1}. {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  };

  changeData = () => {
    this.setState({ editModal: false});
    let newData = this.state.data;
    newData[this.state.idSelected] = this.state.dataSelected;
    this.setState({data: newData});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{
            text: 'LIST LESSON',
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
          {this.state.data.map((item,id) => this.renderRow(item, id))}
        </ScrollView>
        <Modalize ref={this.modal} modalHeight={heightPhone*0.7}>
          <View>
            <View style={styles.content_header}>
              <TextInput
                value={this.state.dataSelected.name}
                style={styles.titleModal} 
                placeholderTextColor='#1976D2'
                editable={this.state.editModal}
                onChangeText={(text) => this.setState(prevState => ({
                  dataSelected: {
                    ...prevState.dataSelected,
                    name: text,
                  }}
                ))}
              />
              <Ionicons 
                name="ios-brush" 
                style={styles.edit}
                size={25} 
                onPress={() => {
                  if (!this.state.editModal) {
                  Alert.alert(
                    'Edit Task',
                    'Do you want to edit this task?',
                    [{ text: 'YES', onPress: () => this.setState({ editModal: true})}, {text: 'NO' }],
                    { caoncelable: false }
                  )} else {
                  Alert.alert(
                    'Edit Task',
                    'Do you want to finish?',
                    [{ text: 'YES', onPress:() => this.changeData()}, {text: 'NO' }],
                    { caoncelable: false }
                  )}}}
                />
            </View> 
              <TextInput
                value={this.state.dataSelected.location}
                style={styles.titleModal} 
                placeholderTextColor='#1976D2'
                editable={this.state.editModal}
                onChangeText={(text) => this.setState(prevState => ({
                  dataSelected: {
                    ...prevState.dataSelected,
                    location: text,
                  }}
                ))}
              />
              <TextInput
                value={this.state.dataSelected.teacher}
                style={styles.titleModal} 
                placeholderTextColor='#1976D2'
                editable={this.state.editModal}
                onChangeText={(text) => this.setState(prevState => ({
                  dataSelected: {
                    ...prevState.dataSelected,
                    teacher: text,
                  }}
                ))}
              />
              <TextInput
                value={this.state.dataSelected.week}
                style={styles.titleModal} 
                placeholderTextColor='#1976D2'
                editable={this.state.editModal}
                onChangeText={(text) => this.setState(prevState => ({
                  dataSelected: {
                    ...prevState.dataSelected,
                    week: text,
                  }}
                ))}
              />
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="ios-list-box" size={30} style={{ padding: 20, color:'#d32f2f' }} />
              <Picker
                selectedValue={this.state.dataSelected.type}
                enabled = {this.state.editModal}
                style={styles.lessonModal}
                onValueChange={(itemValue, itemIndex) => this.setState( prevState => ({
                  dataSelected: {
                    ...prevState.dataSelected,
                    type: itemValue,
                  }
                }))}
              >
                <Picker.Item label='Theory' value='Theory' /> 
                <Picker.Item label='Practice' value='Practice' />
              </Picker>
              <Button
                title={this.state.dataSelected.day}
                type='clear'
                icon = {
                  <Ionicons
                    name="ios-calendar"
                    size={30}
                    style={{ color: '#ffc107', paddingLeft: 20, paddingTop: 5, paddingRight: 10,}}
                  />
                }
                onPress={this.showDateTimePicker}
                disabled={!this.state.editModal}
                disabledTitleStyle={{color:'#ffc107'}}
                buttonStyle={{ width: widthPhone*0.5, paddingTop:15}}
                titleStyle={{fontSize: 18, color:'#ffc107'}}
              />
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                />
            </View>
            <View>
              <Text>{this.state.dataSelected.startTime}</Text>
              <Text>{this.state.dataSelected.endTime}</Text>
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
    paddingLeft: 20,
  },
  lessonModal: {
    marginTop:10,
    color:'#d32f2f',
    height: 50,
    width: widthPhone*0.3,
  },
  edit: {
    marginLeft:'auto',
    color: '#1976D2',
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
    fontWeight: '600',
    paddingLeft: 25,
  },
});
