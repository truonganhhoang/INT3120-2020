import React, {Component, useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {withNavigation} from 'react-navigation';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/AntDesign'
import Flash from 'react-native-vector-icons/FontAwesome'
const SetNumberWord = props => {
  const [number, setNumber] = useState(4);
  const radio_props = [
    {label: '4 từ', value: 4},
    {label: '8 từ', value: 8},
  ];
  const maxHeigh = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 9}}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text style={{fontSize: 18, color: '#0288D1'}}>Chọn số lượng từ mỗi ngày</Text>
        </View>
        <View style={{marginTop: maxHeigh*0.05, marginLeft: maxHeigh*0.05, marginBottom:maxHeigh*0.05}}>
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
              setNumber(value);
            }}
            labelStyle={{marginRight: 30, fontSize: 16}}
          />
        </View>
        <Text style = {{fontSize: 20,color: 'gray', fontWeight: 'bold', marginLeft: maxHeigh*0.05}}>{number} từ mỗi ngày</Text>
        <View style = {{marginTop: maxHeigh*0.03, marginLeft: maxHeigh
        *0.06, marginRight: maxHeigh*0.05, flexDirection: 'column'}}>
            <View style = {{marginTop: maxHeigh*0.03, flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                    name = 'retweet'
                    type = 'AntDesign'
                    size = {25}
                    style = {{color: '#0288D1'}}
                />
                <Text style = {{fontSize: 14, marginLeft: 20}}>
                    Mỗi từ được thực hành nhiều lần vào thời điểm thích hợp
                </Text> 
            </View>
            <View style = {{marginTop: maxHeigh*0.03, flexDirection: 'row', alignItems: 'center'}}>
            <Flash
                    name = 'flash'
                    size = {25}
                    style = {{color: '#FFB74D'}}
                    containerStyle = {{}}
                />
                <Text style = {{fontSize: 14, marginLeft: 20}}>
                    Các bài tập đơn giản để ghi nhớ nhanh
                </Text>
            </View>
            <View style = {{marginTop: maxHeigh*0.03, flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                    name = 'checkcircle'
                    type = 'AntDesign'
                    size = {25}
                    style = {{color: '#64DD17'}}
                />
                <Text style = {{fontSize: 14, marginLeft:20}}>
                Và bạn sẽ nhớ được những từ đó mãi mãi
                </Text>
            </View>
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
        onPress = {()=>{props.navigation.navigate('HomeScreen')}}>
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
export default withNavigation(SetNumberWord);
