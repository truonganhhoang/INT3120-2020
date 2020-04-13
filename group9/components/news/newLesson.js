import React from 'react';
import { View, Text, Picker, TextInput, StyleScheet, Dimensions, Alert } from 'react-native';
import { Header, Input, Button, ButtonGroup } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { addLesson } from '../firebaseApi/lesson';

let widthPhone = Dimensions.get('window').width;

class NewLesson extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedType: '',
    name: '',
    abbreviation: '',
    teacher: '',
    location: '',
    week: '',
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    isTimePickerVisible1: false,
    datePicked: 'Pick Start Date',
    date: Date.now(),
    timePicked: 'Pick Time Start',
    timePicked1: 'Pick Time End',
    time: new Date().getHours(),
    time1: new Date().getHours(),
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    const day = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
    this.setState({ date: date });
    this.setState({ datePicked: day });
    this.hideDateTimePicker();
  };

  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handleTimePicked = (time) => {
    const timeP = time.getHours() + ':' + time.getMinutes();
    this.setState({ time: time });
    this.setState({ timePicked: timeP });
    this.hideTimePicker();
  };
  showTimePicker1 = () => {
    this.setState({ isTimePickerVisible1: true });
  };

  hideTimePicker1 = () => {
    this.setState({ isTimePickerVisible1: false });
  };

  handleTimePicked1 = (time) => {
    const timeP = time.getHours() + ':' + time.getMinutes();
    this.setState({ time1: time });
    this.setState({ timePicked1: timeP });
    this.hideTimePicker1();
  };

  createLesson = async () => {
    let lesson = {
      name: this.state.name,
      abbreviation: this.state.abbreviation,
      teacher: this.state.teacher,
      week: this.state.week,
      type: this.state.selectedType,
      location: this.state.location,
      day: this.state.date,
      start: this.state.time,
      end: this.state.time1,
    };
    let ret = await addLesson(lesson);
    console.log(ret);
  };

  updateIndex = (selectedIndex) => {
    if (selectedIndex == 1) this.props.navigation.navigate('NewTaskScreen');
  };

  render() {
    const buttons = ['New Lesson', 'New Task'];

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          leftComponent={
            <Ionicons
              name="ios-arrow-back"
              size={30}
              style={{ top: -15, paddingLeft: '20%', color: '#fff' }}
            />
          }
          rightComponent={
            <Ionicons
              name="ios-create"
              size={30}
              style={{ top: -22, paddingRight: '18%', color: '#fff' }}
              onPress={() =>
                Alert.alert(
                  'Create New Lesson',
                  'Do You Want Create New Lesson?',
                  [{ text: 'YES', onPress: this.createLesson }, { text: 'NO' }],
                  { cancelable: false }
                )
              }
            />
          }
          centerComponent={
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={0}
              buttons={buttons}
              containerStyle={{
                backgroundColor: '#1976D2',
                marginTop: 60,

                width: widthPhone,
                borderColor: '#1976D2',
              }}
              textStyle={{ color: '#fff', fontSize: 19 }}
            />
          }
          containerStyle={{
            backgroundColor: '#1976D2',
            height: 120,
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Subject"
          leftIcon={
            <Ionicons name="md-cog" size={30} style={{ paddingRight: 20, color: '#1976D2' }} />
          }
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Abbreviation"
          leftIcon={
            <Ionicons
              name="ios-color-palette"
              size={30}
              style={{ paddingRight: 20, color: '#1976D2' }}
            />
          }
          onChangeText={(text) => {
            this.setState({ abbreviation: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Teacher"
          leftIcon={
            <Ionicons name="ios-person" size={30} style={{ paddingRight: 20, color: '#1976D2' }} />
          }
          onChangeText={(text) => {
            this.setState({ teacher: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Place"
          leftIcon={
            <Ionicons
              name="ios-pin"
              size={30}
              style={{ paddingRight: 20, color: '#1976D2', paddingLeft: 3 }}
            />
          }
          onChangeText={(text) => {
            this.setState({ location: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Num of study weeks"
          leftIcon={
            <Ionicons
              name="ios-clipboard"
              size={30}
              style={{ paddingRight: 20, color: '#1976D2', paddingLeft: 2 }}
            />
          }
          onChangeText={(text) => {
            this.setState({ week: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Ionicons
            name="ios-browsers"
            size={30}
            style={{ paddingLeft: 30, color: '#1976D2', top: 5 }}
          />
          <Picker
            selectedValue={this.state.selectedType}
            style={{ height: 40, width: '40%', color: '#1976D2' }}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectedType: itemValue })}
          >
            <Picker.Item label="Choose..." value="" />
            <Picker.Item label="Theory" value="Theory" />
            <Picker.Item label="Practice" value="Practice" />
          </Picker>
          <View>
            <Button
              title={this.state.datePicked}
              icon={
                <Ionicons
                  name="ios-calendar"
                  size={30}
                  style={{ color: '#1976D2', paddingRight: '2.5%' }}
                />
              }
              type="clear"
              onPress={this.showDateTimePicker}
              buttonStyle={{ marginRight: '2.5%', marginLeft: '1.5%' }}
            />
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1.75,
            paddingTop: 15,
          }}
        />

        <View style={{ padding: 10 }} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 15,
            marginLeft: '2.5%',
            marginRight: '2.5%',
          }}
        >
          <View>
            <Button
              title={this.state.timePicked}
              icon={
                <Ionicons
                  name="ios-clock"
                  size={30}
                  style={{ color: '#1976D2', paddingRight: '2.5%', paddingLeft: 0 }}
                />
              }
              type="clear"
              onPress={this.showTimePicker}
              buttonStyle={{ color: '#1976D2', marginRight: '1.5%', marginLeft: '0.5%' }}
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
          <View>
            <Button
              title={this.state.timePicked1}
              icon={
                <Ionicons
                  name="ios-clock"
                  size={30}
                  style={{ color: '#1976D2', paddingRight: '2.5%' }}
                />
              }
              type="clear"
              onPress={this.showTimePicker1}
              buttonStyle={{ color: '#1976D2', paddingRight: 0, marginLeft: '0.5%' }}
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
    );
  }
}

export default NewLesson;
