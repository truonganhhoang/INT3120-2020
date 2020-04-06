import React from 'react';
import { View, Text, Picker, TextInput, StyleScheet, Dimensions } from 'react-native';
import { Header, Input, Button, ButtonGroup } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { addTask } from '../firebaseApi/task';

let widthPhone = Dimensions.get('window').width;

class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    table: [{ name: 'Toan' }, { name: 'Tieng Viet' }, { name: 'Tieng Anh' }],
    selectedLesson: '',
    selectedType: '',
    isDateTimePickerVisible: false,
    datePicked: 'Pick a Date',
    date: Date.now(),
    name: '',
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

  createTask = async () => {
    let task = {
      name: this.state.name,
      lesson: this.state.selectedLesson,
      type: this.state.selectedType,
      date: this.state.date,
      description: '',
    };
    let ret = await addTask(task);
    console.log(ret);
  };

  updateIndex = (selectedIndex) => {
    if (selectedIndex == 0) this.props.navigation.navigate('NewLessonScreen');
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
              onPress={this.createTask}
            />
          }
          centerComponent={
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={1}
              buttons={buttons}
              containerStyle={{backgroundColor:'#1976D2', marginTop: 60, width : widthPhone, borderColor:'#1976D2' }}
              textStyle={{color:'#fff', fontSize: 19 }}
            />
          }
          containerStyle={{
            backgroundColor: '#1976D2',
            height: 120,
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Set name for Task"
          leftIcon={
            <Ionicons
              name="md-checkbox-outline"
              size={30}
              style={{ paddingRight: 20, color: '#1976D2' }}
            />
          }
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        />
        <View style={{ padding: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="ios-list-box"
            size={30}
            style={{ padding: 10, marginLeft: 15, color: '#1976D2' }}
          />
          <Picker
            selectedValue={this.state.selectedLesson}
            style={{ height: 50, width: '35%' }}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectedLesson: itemValue })}
          >
            {this.state.table.map((item, i) => (
              <Picker.Item label={item.name} value={item.name} key={i} />
            ))}
          </Picker>
          <Ionicons name="ios-browsers" size={30} style={{ padding: 10, color: '#1976D2' }} />
          <Picker
            selectedValue={this.state.selectedType}
            style={{ height: 50, width: '35%' }}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectedType: itemValue })}
          >
            <Picker.Item label="Task" value="Task" />
            <Picker.Item label="Exam" value="Exam" />
          </Picker>
        </View>
        <View
          style={{
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1.75,
          }}
        />
        <View style={{ padding: 10 }} />
        <View>
          <Button
            title={this.state.datePicked}
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
        <TextInput
          style={{ padding: '2.5%', fontSize: 20 }}
          underlineColorAndroid="transparent"
          placeholder="Description"
          placeholderTextColor="grey"
          numberOfLines={2}
          multiline={true}
        />
      </View>
    );
  }
}

export default NewTask;
