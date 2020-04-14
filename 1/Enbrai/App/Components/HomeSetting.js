import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  AsyncStorage,
  BackHandler
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import RadioForm from 'react-native-simple-radio-button'
import {withNavigation} from 'react-navigation'
import TopicScreen from '../Containers/TopicScreen';
const HomeSetting = props=> {
    const [voice, setVoice] = useState()
    const [language, setLanguage] = useState('');
    const [topic, setTopic] = useState('');
    const [topicChoice, setTopicChoice] = useState('');
    const [numberWord, setNumberWord] = useState();
    const [time, setTime] = useState(0);
    useEffect( ()=>{
      const fetchReload = async()=>{
        try {
          var data = await AsyncStorage.getItem('NumberWord');
          console.log(data)
          setNumberWord(data) 
        } catch (error) {
          console.log(error)
        }
      }
      if(props.reload == true){
        fetchReload()
      }
      return()=>{}
    },[props])
    useEffect(()=>{
      fetchData()
      return()=>{}
    },[]);
    const fetchData = async ()=>{
      var data = await AsyncStorage.multiGet(["Language", "Topic","NumberWord","Voice", "Time"]);
      if(data[0][1] !=null) {
        setLanguage(parseInt(data[0][1]))
      } else {setLanguage(0)}

      if(data[1][1] !=null) {
        var temp = JSON.parse(data[1][1]);
        setTopic(temp)
        var newdata = temp.filter(item=>item.checked == true);
        setTopicChoice(newdata[0].translations.vi)
      } else {setTopic('Chưa chọn chủ đề')}

      if(data[2][1] !=null) {
        setNumberWord(parseInt(data[2][1]))
      } else {setNumberWord(4)}

      if(data[3][1] !=null) {
        setVoice(parseInt(data[3][1]))
      } else {setVoice(0)}
      if(data[4][1] !=null) {
        setTime(data[4][1])
      } else {setTime(20)}
    }
    const radio_props = [
        {label: 'US', value: 0 },
        {label: 'UK', value: 1 }
      ];
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar
          backgroundColor="#0592D2"
          barStyle="light-content"></StatusBar>
        <TouchableOpacity
          style={{
            height: '12%',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingLeft: 20,
          }}
            onPress = {()=> props.navigation.navigate('ChangeLanguageScreen')}  
        >
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column',}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Ngôn ngữ</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>{language ==0? 'Tiếng Việt': 'Tiếng Anh'}</Text>
              </View>
              <View style = {{flex: 2, alignItems: 'flex-end'}}>
                  <Icon
                  name = 'edit'
                  size = {22}
                  color= '#FFB74D'
                  style = {{marginRight: 20}}
              />
              </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '12%',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingLeft: 20,
            backgroundColor: '#fff'
          }}
          onPress = {()=>{props.navigation.navigate('TopicScreen',{topic: topic})}}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Chủ đề yêu thích</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>{topicChoice}</Text>
              </View>
              <View style = {{flex: 2, alignItems: 'flex-end'}}>
                  <Icon
                  name = 'edit'
                  size = {22}
                  color= '#FFB74D'
                  style = {{marginRight: 20}}
              />
              </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: '15%',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingLeft: 20,
          }}
          onPress = {()=>{props.navigation.navigate('SetNumberWordScreen',{numberWord:numberWord})}}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Số lượng từ mỗi ngày</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>{numberWord} từ</Text>
              </View>
              <View style = {{flex: 2, alignItems: 'flex-end'}}>
                  <Icon
                  name = 'edit'
                  size = {22}
                  color= '#FFB74D'
                  style = {{marginRight: 20}}
              />
              </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: '15%',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'column', marginTop: 20}}>
            <Text style = {{fontSize: 18, fontWeight: '600'}}>Phát âm</Text>
            <View style = {{marginTop: 10, marginLeft: 15}}>
                <RadioForm
                radio_props={radio_props}
                initial={props.voice}
                formHorizontal={true}
                labelHorizontal={true}
                animation={true}
                buttonSize ={12}
                buttonColor = '#9E9E9E'
                selectedButtonColor = '#FFB74D'
                onPress={async(value)=> {
                  setVoice(value);
                  console.log(value)
                  try {
                    const result = await AsyncStorage.setItem('Voice',value.toString());
                  } catch (error) {
                    console.log(error)
                  }
                }}
                labelStyle = {{marginRight: 30, color: '#9E9E9E'}}
                />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: '15%',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
            paddingLeft: 20,
          }}
          onPress = {()=>{props.navigation.navigate('SetNotificationScreen',{time: time})}}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Lời nhắc</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>{time}:00 hằng ngày</Text>
              </View>
              <View style = {{flex: 2, alignItems: 'flex-end'}}>
                  <Icon
                  name = 'edit'
                  size = {22}
                  color= '#FFB74D'
                  style = {{marginRight: 20}}
              />
              </View>
          </View>
        </TouchableOpacity>
      </View>
    );
}

export default withNavigation(HomeSetting);
