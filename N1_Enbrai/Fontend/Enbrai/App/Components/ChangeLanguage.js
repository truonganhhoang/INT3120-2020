import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import {Icon} from 'react-native-elements'
const ChangeLanguage = props => {
  const [language, setLanguage] = useState(0);
  const radio_props = [
    {label: 'Tiếng Việt', value: 0},
    {label: 'Tiếng Anh', value: 1},
  ];

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 9}}>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{fontSize: 18, color: '#0288D1'}}>Chọn ngôn ngữ</Text>
          <Text>{I18n.t('greeting')}</Text>
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
            onPress={value => {
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
        <TouchableOpacity style={{padding: 5, marginRight: 20}}>
          <Text style={{fontSize: 18, color: '#fff'}}>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 8, backgroundColor: '#FFB74D', flexDirection: 'row', borderRadius: 5}}>
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
I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  fr: {
    greeting: 'Bonjour!',
  },
};
export default withNavigation(ChangeLanguage);
