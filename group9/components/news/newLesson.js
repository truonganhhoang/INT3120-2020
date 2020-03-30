import React ,{useState} from 'react'
import { View, Text, Picker, TextInput, StyleScheet } from 'react-native'
import { Header, Input, Button,Switch} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';


const NewLesson = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const state = {
    
    selectedType: '',
    isDateTimePickerVisible: false,
    datePicked: 'Time Start',
    date: Date.now(),
    name: '',
  };
  
  

 return (
    
   <View>
     <View >
      <Header 
          leftComponent={
            <Ionicons name="ios-arrow-back" size={35} style={{ paddingTop:5, paddingLeft: '20%' }} 
            onPress={()=> alert('back!')}
          />
          }
          rightComponent={
            <Button
               title='Save'
              buttonStyle={{backgroundColor:'#1976D2', paddingTop:5, paddingRight: '18%',width:80,height:50 }}
              onPress={()=> alert('do not save')}
            />
          }
          centerComponent={{
            text: 'New Lesson',
            style: { fontSize: 25, paddingTop: '2%', color:'white'},
          }}
          containerStyle={{
            backgroundColor: '#1976D2',
            height: '25%',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 1,
            paddingTop:20
          }}
        />
        <View style={{ padding: 5 }} />
        <Input
          placeholder='Subject'
          style={{flex:1, paddingBottom:1,borderTopWidth:0}}
          />
          <View style={{ padding: 5 }} />
          <Input
          placeholder='Abbreviation'
          style={{flex:1, paddingBottom:1}}
          />
          <View style={{ padding: 5}} />
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
        <View style={{ padding: 5 }} />
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
        <View style={{ padding: 5 }} />
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
        <Text style={{paddingLeft:20, color:'blue', fontSize:20,paddingTop:5}}>
          select date & time
        </Text>
        </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth:0,  paddingLeft:30,paddingRight:30,}}>
        <View>
        <Button 
        buttonStyle={{backgroundColor:'#1976D2',width:150, height:40}}
        onPress={showTimepicker} 
        title='Time Start'
        
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View >
        <Button 
        buttonStyle={{backgroundColor:'#1976D2',width:150, height:40}}
        onPress={showDatepicker} 
        title="Date Start!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth:0.5,  paddingLeft:30,paddingRight:30, paddingTop:20, paddingBottom:30}}>
      <View >
        <Button 
        buttonStyle={{backgroundColor:'#1976D2',width:150, height:40}}
        onPress={showTimepicker} 
        title='Time Finish'/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <View >
        <Button 
        buttonStyle={{backgroundColor:'#1976D2',width:150, height:40}}
        onPress={showDatepicker} 
        title="Date Finish!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
      <View style={{ padding: 10 }} />
        <Text>Batch mode</Text>
        <View style={{ padding: 10 }} />
        <Text style={{  fontSize: 15, color:'#9E9E9E' }}>
          when enabled using "Save" won't close this screen, allowing you to create miltiple similar lessons without re-entering everything again ang again
        </Text>




    </View>
  );
};

export default NewLesson;
