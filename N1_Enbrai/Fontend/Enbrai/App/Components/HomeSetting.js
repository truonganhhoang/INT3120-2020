import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import RadioForm from 'react-native-simple-radio-button'
import {withNavigation} from 'react-navigation'
const HomeSetting = props=> {
    const [voice, setVoice] = useState(0)
    const radio_props = [
        {label: 'US', value: 0 },
        {label: 'UK', value: 1 }
      ];
    return (
      <View style={{flex: 1}}>
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
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>Tiếng việt</Text>
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
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Chủ đề yêu thích</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>Từ vựng TOEIC</Text>
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
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Số lượng từ mỗi ngày</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>4 từ</Text>
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
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                animation={true}
                buttonSize ={12}
                buttonColor = '#9E9E9E'
                selectedButtonColor = '#FFB74D'
                onPress={(value)=> setVoice(value)}
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
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
              <View style = {{flex: 8, flexDirection: 'column'}}>
                <Text style = {{fontSize: 18, fontWeight: '600'}}>Lời nhắc</Text>
                <Text style = {{fontSize: 14, marginTop: 8, color: '#757575'}}>21:00 hằng ngày</Text>
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
