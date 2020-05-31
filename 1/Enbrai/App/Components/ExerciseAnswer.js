import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ProgressBarAndroid } from 'react-native';
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import Tts from 'react-native-tts'
import firebase from 'react-native-firebase';
import { firebaseAd, Banner, UNIT_ID_BANNER } from './FirbaseAd'
Tts.setDefaultLanguage('en-US')
//Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact')

const ExerciseAnswer = props => {

  const header = () => {
    var title, backgroundColor, textcolor
    var note = 'Bạn sẽ gặp lại từ này'
    var correct = props.correct;
    if (correct == true) {
      title = 'Chính xác'
      backgroundColor = '#C8E6C9'
      textcolor = '#388E3C'
    } else {
      title = 'Không chính xác'
      backgroundColor = '#ffcdd2'
      textcolor = '#f44336'
    }
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: textcolor,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: 5,
            color: textcolor,
          }}>
          {note}
        </Text>
      </View>
    );
  };
  const renderData = () => {
    var eg = props.quest.explanation.split("<strong>")
    var eg2 = eg[1].split("</strong>")
    var ans = props.quest.choices.filter(item => item.correct == true)
    var buttonColor, buttonTitle
    if (props.questCount == props.questCompleteCount) {
      buttonColor = '#FFB74D'
      buttonTitle = 'Level tiếp theo >'
    } else {
      buttonColor = '#FAFAFA'
      buttonTitle = 'Từ tiếp theo >'
    }
    return (
      <View>
        {header()}
        <View style={{ padding: 15, paddingLeft: 20, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#E0E0E0' }}>
          <Text style={{ fontSize: 24, color: '#424242', fontWeight: 'bold' }}>
            {props.quest.text}
          </Text>
          <Icon
            name='volume-up'
            containerStyle={{ marginLeft: 20 }}
            size={30}
            color='#9E9E9E'
            onPress={() => { Tts.speak(props.quest.text) }}
          />
        </View>
        <View style={{ marginBottom: 10, marginTop: 10, flexDirection: 'row', paddingLeft: 20, alignItems: 'center' }}>
          <Icon
            name='check'
            containerStyle={{ marginRight: 5 }}
            size={25}
            color='#424242'
          />
          <Text style={{ fontSize: 18, color: '#424242' }}>{ans[0].text}</Text>
        </View>
        <Text style={{ fontSize: 20, color: '#424242', fontWeight: 'bold', marginBottom: 5, paddingLeft: 20 }}>Exame:</Text>
        <View style={{ paddingLeft: 30, paddingBottom: 15, borderBottomWidth: 0.5, borderBottomColor: '#E0E0E0' }}>

          <Text style={{ fontSize: 18, color: '#424242' }}>
            {eg[0]}
            <Text style={{ fontSize: 18, color: '#424242', fontWeight: 'bold' }}>
              {eg2[0]}
            </Text>
            <Text style={{ fontSize: 18, color: '#424242' }}>
              {eg2[1]}
            </Text>
          </Text>
        </View>
        <View style={{ paddingLeft: 20, paddingRight: 10, paddingBottom: 15, paddingTop: 10 }}>
          {props.questCount == props.questCompleteCount? (<></>):(<Text style={{ fontSize: 18, color: '#424242', marginBottom: 10 }}>Bạn cần hoàn thành từ <Text style={{ fontWeight: 'bold' }}>{props.questCount - props.questCompleteCount}</Text> nữa để mở khóa <Text style={{ fontWeight: 'bold' }}>level {props.levelIndex}</Text></Text>)}
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={props.questCompleteCount / props.questCount}
            style={{ transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }], marginRight: 20 }}
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            height: 60,
            backgroundColor: buttonColor,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            if (props.questCount == props.questCompleteCount) {
              props.navigation.goBack()
            } else {
              props.setPage(0);
            }
          }}
        >
          <Text style={{ fontSize: 20, color: "#616161" }}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (

    <View
      style={{
        marginLeft: 20,
        marginTop: 30,
        marginRight: 20,
        marginBottom: 15,
        borderRadius: 8,
        borderColor: '#E0E0E0',
        marginTop: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
      }}>
      {renderData()}
    </View>

  );
};
export default withNavigation(ExerciseAnswer);
