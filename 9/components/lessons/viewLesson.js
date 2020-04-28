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
import { Header, CheckBox, Button } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { getLessons, updateLesson } from '../firebaseApi/lesson';
import DateTimePicker from 'react-native-modal-datetime-picker';

let heightPhone = Dimensions.get('window').height;
let widthPhone = Dimensions.get('window').width;

export default class ViewLesson extends React.Component {
  state = {
    data: [],
    idSelected: 0,
    editModal: false,
    dataSelected: {},
    refreshing: false,
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    isTimePickerVisible1: false,
  };

  modal = React.createRef();

  componentDidMount = async () => {
    let arrret = [];
    try {
      arrret = await getLessons();
      console.log(arrret);
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
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
    let newState = Object.assign({}, this.state);
    newState.dataSelected.date = date;
    newState.dataSelected.day = day;
    this.setState(newState);
    this.hideDateTimePicker();
  };

  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handleTimePicked = (time) => {
    const timeP = time.getHours() + ': ' + time.getMinutes();
    let data = this.state.dataSelected;
    data.start = time;
    data.startTime = timeP;
    this.setState({ dataSelected: data });
    this.hideTimePicker();
  };
  showTimePicker1 = () => {
    this.setState({ isTimePickerVisible1: true });
  };

  hideTimePicker1 = () => {
    this.setState({ isTimePickerVisible1: false });
  };

  handleTimePicked1 = (time) => {
    const timeP = time.getHours() + ': ' + time.getMinutes();
    let data = this.state.dataSelected;
    data.end = time;
    data.endTime = timeP;
    this.setState({ dataSelected: data });
    this.hideTimePicker1();
  };
  openModal = (item, id) => {
    this.setState({ dataSelected: item });
    this.setState({ idSelected: id });
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  closeModal = () => {
    if (this.modal.current) {
      this.modal.current.close();
    }
  };

  deleteItem = async (id) => {
    console.log(id);
    this.state.data.splice(id, 1);
    this.setState({ data: this.state.data.filter((i) => i !== id) });
  };

  renderRow = (item, id) => {
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
        key={id}
        style={styles.block}
        backgroundColor="transparent"
      >
        <View>
          <TouchableOpacity onPress={() => this.openModal(item, id)} key={id}>
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
    this.setState({ editModal: false });
    let newData = this.state.data;
    newData[this.state.idSelected] = this.state.dataSelected;
    //await updateLesson(this.state.dataSelected);
    this.setState({ data: newData });
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
          {this.state.data.map((item, id) => this.renderRow(item, id))}
        </ScrollView>
        <Modalize ref={this.modal} modalHeight={heightPhone * 0.7}>
          <View>
            <View style={styles.content_header}>
              <TextInput
                value={this.state.dataSelected.name}
                style={styles.titleModal}
                placeholderTextColor="#1976D2"
                editable={this.state.editModal}
                onChangeText={(text) =>
                  this.setState((prevState) => ({
                    dataSelected: {
                      ...prevState.dataSelected,
                      name: text,
                    },
                  }))
                }
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
                      [
                        { text: 'YES', onPress: () => this.setState({ editModal: true }) },
                        { text: 'NO' },
                      ],
                      { caoncelable: false }
                    );
                  } else {
                    Alert.alert(
                      'Edit Task',
                      'Do you want to finish?',
                      [{ text: 'YES', onPress: () => this.changeData() }, { text: 'NO' }],
                      { caoncelable: false }
                    );
                  }
                }}
              />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
              <Ionicons
                name="ios-person"
                size={30}
                style={{ paddingLeft: 40, color: '#ec407a', paddingTop: 6 }}
              />
              <TextInput
                value={this.state.dataSelected.teacher}
                style={styles.lesson}
                editable={this.state.editModal}
                onChangeText={(text) =>
                  this.setState((prevState) => ({
                    dataSelected: {
                      ...prevState.dataSelected,
                      teacher: text,
                    },
                  }))
                }
              />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
              <Ionicons
                name="ios-pin"
                size={30}
                style={{ paddingLeft: 44, color: '#7e57c2', paddingTop: 6 }}
              />
              <TextInput
                value={this.state.dataSelected.location}
                style={styles.location}
                editable={this.state.editModal}
                onChangeText={(text) =>
                  this.setState((prevState) => ({
                    dataSelected: {
                      ...prevState.dataSelected,
                      location: text,
                    },
                  }))
                }
              />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
              <Ionicons
                name="ios-clipboard"
                size={30}
                style={{ paddingLeft: 40, color: '#26a69a', paddingTop: 6 }}
              />
              <TextInput
                value={this.state.dataSelected.week}
                style={styles.week}
                editable={this.state.editModal}
                onChangeText={(text) =>
                  this.setState((prevState) => ({
                    dataSelected: {
                      ...prevState.dataSelected,
                      week: text,
                    },
                  }))
                }
              />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
              <Ionicons
                name="ios-list-box"
                size={30}
                style={{ paddingLeft: 40, color: '#d32f2f', paddingTop: 6 }}
              />
              <Picker
                selectedValue={this.state.dataSelected.type}
                enabled={this.state.editModal}
                style={styles.lessonModal}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState((prevState) => ({
                    dataSelected: {
                      ...prevState.dataSelected,
                      type: itemValue,
                    },
                  }))
                }
              >
                <Picker.Item label="Theory" value="Theory" />
                <Picker.Item label="Practice" value="Practice" />
              </Picker>
              <Button
                title={this.state.dataSelected.day}
                type="clear"
                icon={
                  <Ionicons
                    name="ios-calendar"
                    size={30}
                    style={{ color: '#ffc107', paddingRight: 10 }}
                  />
                }
                onPress={this.showDateTimePicker}
                disabled={!this.state.editModal}
                disabledTitleStyle={{ color: '#ffc107' }}
                buttonStyle={{ width: widthPhone * 0.5 }}
                titleStyle={{ fontSize: 18, color: '#ffc107' }}
              />
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <View style={{ width: widthPhone * 0.5 }}>
                <Button
                  title={this.state.dataSelected.startTime}
                  icon={
                    <Ionicons
                      name="ios-clock"
                      size={30}
                      style={{ color: '#1976D2', paddingRight: 20 }}
                    />
                  }
                  type="clear"
                  onPress={this.showTimePicker}
                  disabledTitleStyle={{ color: '#1976D2' }}
                  disabled={!this.state.editModal}
                  // buttonStyle={{ color: '#1976D2'}}
                />
                <DateTimePicker
                  isVisible={this.state.isTimePickerVisible}
                  onConfirm={this.handleTimePicked}
                  onCancel={this.hideTimePicker}
                  mode="time"
                  is24Hour={true}
                  display="clock"
                />
              </View>
              <View style={{ width: widthPhone * 0.5 }}>
                <Button
                  title={this.state.dataSelected.endTime}
                  icon={
                    <Ionicons
                      name="ios-clock"
                      size={30}
                      style={{ color: '#1976D2', paddingRight: 20 }}
                    />
                  }
                  type="clear"
                  onPress={this.showTimePicker1}
                  disabled={!this.state.editModal}
                  disabledTitleStyle={{ color: '#1976D2' }}
                  // buttonStyle={{ color: '#1976D2'}}
                />
                <DateTimePicker
                  isVisible={this.state.isTimePickerVisible1}
                  onConfirm={this.handleTimePicked1}
                  onCancel={this.hideTimePicker1}
                  mode="time"
                  is24Hour={true}
                  display="clock"
                />
              </View>
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
    backgroundColor: '#bbdefb',
    letterSpacing: 1,
  },
  content_header: {
    paddingTop: 20,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleModal: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#1976D2',
    width: widthPhone * 0.7,
    paddingLeft: 40,
    paddingBottom: 15,
  },
  location: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#7e57c2',
    width: widthPhone * 0.7,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 7,
  },
  week: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#26a69a',
    width: widthPhone * 0.7,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 7,
  },
  lesson: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
    color: '#ec407a',
    width: widthPhone * 0.7,
    paddingLeft: 20,
    paddingBottom: 15,
    paddingTop: 7,
  },
  lessonModal: {
    marginLeft: 18,
    color: '#d32f2f',
    height: 50,
    width: widthPhone * 0.3,
  },
  edit: {
    marginLeft: 'auto',
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
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 25,
  },
});
