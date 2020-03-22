import React from 'react';
import {View, Text,Picker,TextInput,} from 'react-native';
import {Header,Input} from 'react-native-elements';
import {Ionicons } from '@expo/vector-icons';

class NewTask extends React.Component {
    state={
      table:[
        {name:"Toan"},
        {name:"Tieng Viet"},
        {name:"Tieng Anh"}
      ],
      selectedLesson:'',
      selectedType:'',

    }
  
  render () {
    return (
    <View style={{ flex: 1, backgroundColor:'#fff'}}>
      <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{ text: 'New Tasks', style: { color: '#fff', fontSize:25, paddingTop:30 } }}
          containerStyle={{
            backgroundColor: '#000',
            height:120,
            justifyContent: 'center',
          }}
      />
      <View style={{padding:10}}/>
      <Input
        placeholder='Set name for Task'
        leftIcon={
          <Ionicons name='md-checkbox-outline' size={30} style={{ paddingRight:20 }} />
        }
      />
      <View style={{padding:10}}/>
      <View style={{flexDirection: 'row'}}>
        <Ionicons name='ios-list-box' size={30} style={{padding: 10, marginLeft: 15}} />
        <Picker
          selectedValue={this.state.selectedLesson} 
          style={{height: 50, width: 130 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({selectedLesson:itemValue})
          }>
          {this.state.table.map((item,i)=>(  
            <Picker.Item label={item.name} value={item.name} key={i}/>
          ))}
        </Picker>
        <Ionicons name='ios-browsers' size={30} style={{padding: 10, marginLeft: 15}} />
        <Picker
          selectedValue={this.state.selectedType}
          style={{height: 50, width: 140 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({selectedType:itemValue})
          }>
          <Picker.Item label="Task" value="Task" />
          <Picker.Item label="Exam" value="Exam" />
        </Picker>
      </View>
      <View
        style={{
        marginLeft:10, marginRight:10,
        borderBottomColor: '#B7B7B7',
        borderBottomWidth: 1.75,
       }}
      />
      <View style={{padding:10}}/>
      <TextInput
        style={{padding:10, fontSize: 15}}
        underlineColorAndroid="transparent"
        placeholder="Description"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
  }
}

export default NewTask;
