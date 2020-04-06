import React from 'react'
import { View, Text, Picker, TextInput, StyleScheet, Dimensions} from 'react-native'
import { Header, Input, Button, ButtonGroup } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { addTask } from '../firebaseApi/task'
let widthPhone = Dimensions.get('window').width;

class NewLesson extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedLesson: '',
    selectedType: '',
    isDateTimePickerVisible: false,
    isDateTimePickerVisible1: false,
    isTimePickerVisible: false,
    isTimePickerVisible1:false,
    datePicked: 'Pick Start Date',
    datePicked1: 'Pick End Date',
    date: Date.now(),
    date1: Date.now(),
    name: '',
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
  showDateTimePicker1 = () => {
    this.setState({ isDateTimePickerVisible1: true });
  };

  hideDateTimePicker1 = () => {
    this.setState({ isDateTimePickerVisible1: false });
  };

  handleDatePicked1 = (date) => {
    const day = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
    this.setState({ date1: date });
    this.setState({ datePicked1: day });
    this.hideDateTimePicker1();
  };
  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handleTimePicked = (time) => {
    const timeP = time.getHours() + ":" + time.getMinutes()
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
    const timeP = time.getHours() + ":" + time.getMinutes()
   this.setState({ time1: time });
    this.setState({ timePicked1: timeP });
    this.hideTimePicker1();
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
    if (selectedIndex==1) this.props.navigation.navigate('NewTaskScreen');
  }

  render() {
    const buttons = ['New Lesson', 'New Task']

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          leftComponent={
            <Ionicons name="ios-arrow-back" size={30} style={{ top: -15, paddingLeft: '20%', color:'#fff' }} />
          }
          rightComponent={
            <Ionicons
              name="ios-create"
              size={30}
              style={{ top: -22, paddingRight: '18%', color:'#fff' }}
              onPress={this.createTask}
            />
          }
          centerComponent={
            <ButtonGroup
              onPress={this.updateIndex}         
              selectedIndex={0}
              buttons={buttons}
              containerStyle={{backgroundColor:'#1976D2', marginTop: 60, width : widthPhone, borderColor:'#1976D2' }}
              textStyle={{color:'#fff', fontSize: 19 }}
          
            />
          }
          containerStyle={{
            backgroundColor: '#1976D2',
            height:120,
          }}
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Subject"
          leftIcon={
            <Ionicons
              name="md-cog"
              size={30}
              style={{ paddingRight: 20, color:'#1976D2' }}
            />
          }
              onChangeText={(text) => {
                this.setState({ name: text })
              }}
        />
          <View style={{ padding: 10 }} />
        <Input
          placeholder="Abbreviation"
          leftIcon={
            <Ionicons
              name="ios-color-palette"
              size={30}
              style={{ paddingRight: 20, color:'#1976D2' }}
            />
          }
              onChangeText={(text) => {
                this.setState({ name: text })
              }}
        />
          <View style={{ padding: 10 }} />
        <Input
          placeholder="Teacher"
          leftIcon={
            <Ionicons
              name="ios-person"
              size={30}
              style={{ paddingRight: 20, color:'#1976D2' }}
            />
          }
              onChangeText={(text) => {
                this.setState({ name: text })
              }}
        />
          <View style={{ padding: 10 }} />
        <Input
          placeholder="Place"
          leftIcon={
            <Ionicons
              name="ios-pin"
              size={30}
              style={{ paddingRight: 20, color:'#1976D2',paddingLeft:8 }}
            />
          }
              onChangeText={(text) => {
                this.setState({ name: text })
              }}
        />
      
        <View style={{ padding: 10 }} />
        <View style={{ flexDirection: 'row'  }}>
          <Ionicons name="ios-browsers" size={30} style={{ paddingLeft:22, color: '#1976D2' , top:5}} />
          <Picker
            selectedValue={this.state.selectedType}
            style={{ height: 50, width: '50%' }}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectedType: itemValue })}
          >
            <Picker.Item label="Theory" value="Theory" />
            <Picker.Item label="Practice" value="Practice" />
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
        <Text style={{ paddingLeft:110, fontSize:17}}>
          Set date and time
        </Text>
        <View style={{ padding: 10 }} />
        <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingLeft:10,paddingRight:15,
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1.75,
          }}>
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
            type= "clear"
            onPress={this.showDateTimePicker}
            buttonStyle={{ color: '#1976D2', marginRight: '2.5%', marginLeft: '2.5%' }}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
        <View>
          <Button
            title={this.state.datePicked1}
            icon={
              <Ionicons
                name="ios-calendar"
                size={30}
                style={{ color: '#1976D2', paddingRight: '2.5%' }}
              />
            }
            type= "clear"
            onPress={this.showDateTimePicker1}
            buttonStyle={{ color: '#1976D2', marginRight: '2.5%', marginLeft: '2.5%' }}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible1}
            onConfirm={this.handleDatePicked1}
            onCancel={this.hideDateTimePicker1}
            
          />
        </View>
        </View>
        <View style={{ padding: 10 }} />
        <View style={{flexDirection: 'row',justifyContent: 'space-between', paddingLeft:10,paddingRight:15,
            marginLeft: '2.5%',
            marginRight: '2.5%',
            borderBottomColor: '#B7B7B7',
            borderBottomWidth: 1.75,
          }}>
        <View>
          <Button
            title={this.state.timePicked}
            icon={
              <Ionicons
                name="ios-clock"
                size={30}
                style={{ color: '#1976D2', paddingRight: '2.5%' }}
              />
            }
            type= "clear"
            onPress={this.showTimePicker}
            buttonStyle={{ color: '#1976D2', marginRight: '2.5%', marginLeft: '2.5%' }}
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
            type= "clear"
            onPress={this.showTimePicker1}
            buttonStyle={{ color: '#1976D2', marginRight: '2.5%', marginLeft: '2.5%' }}
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
        <View style={{ padding: 10 }} />
        <Text style={{ color:'#a9a9a9',paddingLeft:15, fontSize:15}}>
          When enabled using"save" won't close this screen, allowing you to create multiple similar lessons without re-entering everything again and again
        </Text>

      </View>
    );
  }
}

export default NewLesson;


