import React from 'react'
import { View, Text, Picker, TextInput, StyleScheet } from 'react-native'
import { Header, Input, Button,Switch} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { addTask } from '../api/task'


class NewLesson extends React.Component {
  state = {
    table: [{ name: 'Lesson 1' }, { name: 'Lesson 2' }, { name: 'Lesson 3' },{ name: 'Lesson 4' }, { name: 'Lesson 5' }, { name: 'Lesson 6' },{ name: 'Lesson 7' }, { name: 'Lesson 8' }, { name: 'Lesson 9' },{ name: 'Lesson 10' }, { name: 'Lesson 11' }, { name: 'Lesson 12' },{ name: 'Lesson 13' }, { name: 'Lesson 14' }, { name: 'Lesson 15' }],
    selectedLesson: '',
    selectedType: '',
    isDateTimePickerVisible: false,
    datePicked: 'Pick a Date',
    date: Date.now(),
    name: '',
  }
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  handleDatePicked = (date) => {
    const day = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear()
    this.setState({date: date});
    this.setState({ datePicked: day })
    this.hideDateTimePicker()
  }
 

  createTask = () => {
    let task = {
      name: this.state.name,
      lesson: this.state.selectedLesson,
      type: this.state.selectedType,
      date: this.state.date,
      description: "",
    } 
    addTask(task);
  }

  render() {
    return (
      <View style={{ flex: 1  }}>
        <Header 
          leftComponent={
            <Ionicons name="ios-arrow-back" size={30} style={{ top: -15, paddingLeft: '20%' }} />
          }
          rightComponent={
            <Button
               title='Save'
              buttonStyle={{backgroundColor:'#ffc0cb', top: -15, paddingRight: '18%' }}
              onPress={this.createTask}
            />
          }
          centerComponent={{
            text: 'New Lesson',
            style: { fontSize: 25, paddingTop: '2%' },
          }}
          containerStyle={{
            backgroundColor: '#ffc0cb',
            height: '17%',
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          }}
        />
        <Input
          placeholder='Subject'
          style={{flex:1, paddingBottom:1}}
          />
          <Input
          placeholder='Abbreviation'
          style={{flex:1, paddingBottom:1}}
          />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Type"
          leftIcon={
            <Ionicons
              name="ios-information-circle"
              size={30}
              style={{ paddingRight: 20 }}
              onChangeText={(text) => {
                this.setState({ name: text })
                console.log(this.state.name)
              }}
            />
          }
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Teacher"
          leftIcon={
            <Ionicons
              name="md-person"
              size={30}
              style={{ paddingRight: 20 }}
              onChangeText={(text) => {
                this.setState({ name: text })
                console.log(this.state.name)
              }}
            />
          }
        />
        <View style={{ padding: 10 }} />
        <Input
          placeholder="Place"
          leftIcon={
            <Ionicons
              name="md-pin"
              size={30}
              style={{ paddingRight: 20 }}
              onChangeText={(text) => {
                this.setState({ name: text })
                console.log(this.state.name)
              }}
            />
          }
        />
        <View style={{ padding: 10 }} />
        <Text style={{paddingLeft:20, color:'blue'}}>
          select date & time
        </Text>

        <View style={{ padding: 10 }} />
        
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth:0.5, paddingBottom: 15}}>
          <Picker
            selectedValue={this.state.selectedLesson}
            style={{width:130,height:40, backgroundColor:'#ffc0cb'}}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectedLesson: itemValue })}
          >
            {this.state.table.map((item, i) => (
              <Picker.Item label={item.name} value={item.name} key={i} />
            ))}
          </Picker>
          <Button
            title='Start time'
            onPress={()=> alert('start time')}
            buttonStyle={{ backgroundColor: '#ffc0cb'}}
          />
         
          <Button
            title='Finish time'
            onPress={()=> alert('finish time')}
            buttonStyle={{ backgroundColor: '#ffc0cb'}}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
        <View style={{ padding: 10 }} />
        <Button
            title={this.state.datePicked}
            onPress={this.showDateTimePicker}
            buttonStyle={{ backgroundColor: '#ffc0cb', marginRight: '2.5%', marginLeft: '2.5%' }}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        <View style={{ padding: 20 }} />
        <Text>Batch mode</Text>
        <View style={{ padding: 10 }} />
        <Text style={{  fontSize: 15, color:'#9E9E9E' }}>
          when enabled using "Save" won't close this screen, allowing you to create miltiple similar lessons without re-entering everything again ang again
        </Text>
       
      
  </View>
    )
  }
}


export default NewLesson
