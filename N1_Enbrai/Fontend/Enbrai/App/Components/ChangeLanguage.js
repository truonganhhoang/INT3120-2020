import React, {Component, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Dimensions, AsyncStorage} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon} from 'react-native-elements'
const ChangeLanguage = props => {
  const [language, setLanguage] = useState(0);
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const value = await AsyncStorage.getItem('Language');
        if(value !== null){
          setLanguage(parseInt(value))
        } else setLanguage(0)
      } catch (error) {
        // Error retrieving data
      }
    }
    fetchData();
  })
  const radio_props = [
    {label: 'Tiếng Việt', value: 0},
    {label: 'Tiếng Anh', value: 1},
  ];
  const saveData = async (value) => {
    value = value.toString()
    try {
      const result = await AsyncStorage.setItem('Language',value);
    } catch (error) {
      console.log(error)
    }
    props.navigation.navigate('HomeScreen');
  };
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 9}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 18, color: '#0288D1'}}>Chọn ngôn ngữ</Text>
        </View>
        <View style={{marginTop: 10, marginLeft: 15}}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            animation={true}
            buttonSize={12}
            buttonColor="#9E9E9E"
            selectedButtonColor="#FFB74D"
            onPress={ value  => {
              setLanguage(value);
            }}
            labelStyle={{marginRight: 30, fontSize: 16}}
          />
        </View>
      </View>
      <View
        style={{
          height: 60,
          backgroundColor: '#0592D2',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{padding: 5, marginRight: 20}} onPress = {()=>{props.navigation.goBack()}}>
          <Text style={{fontSize: 18, color: '#fff'}}>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{ padding: 8, backgroundColor: '#FFB74D', flexDirection: 'row', borderRadius: 5}}
        onPress = {()=>{saveData(language)}}>
          <Icon
            name = 'check'
            size = {25}
            color= '#fff'
            containerStyle = {{justifyContent: 'center'}}
          />
          <Text style={{fontSize: 18, color: '#fff'}}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default withNavigation(ChangeLanguage);
