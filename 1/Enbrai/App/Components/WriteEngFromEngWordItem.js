import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView, Keyboard } from "react-native";
import { Text, Icon } from "react-native-elements";
import Tts from 'react-native-tts'
import { withNavigation } from "react-navigation";
Tts.setDefaultLanguage('en-US')

const ChooseEngFromVieWordItem = (props) => {

  const [isNull, setIsNull] = useState(true)
  const [value, setValue] = useState('')
  const [bgColor, setBGColor] = useState('#ffffff')
  const [isShow, setIsShow] = useState(false)

  const handleChangeValue = (data) => {
    setValue(data)
    if (data.length > 0) {
      setIsNull(false)
    }
    else {
      setIsNull(true)
    }
  }

  const checkAnswer = () => {
    if (value == props.question.word) {
      setBGColor('#81C784')
      setIsShow(false)
    } else {
      setBGColor('#e57373')
      setIsShow(true)
    }
  }
  useEffect(() => {
    return () => {
    }
  }, [props, bgColor])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={{ flex: 8, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>Viết từ này bằng Tiếng Anh</Text>
        </View>

        <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => Tts.speak(props.question.word)}
          >
            <Icon
              name='volume-up'
              color='#009dd6'
              type='font-awesome-5'
              reverse
              size={30}
            ></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ borderWidth: 0.5, borderColor: 'gray', borderRadius: 15, width: '70%', backgroundColor: bgColor }}
          textAlign='center'
          autoFocus={true}
          defaultValue=''
          value={value}
          onChangeText={(value) => handleChangeValue(value)}
        ></TextInput>
      </View>
      {isShow&&<View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{ width: '70%', backgroundColor: '#81C784', borderRadius: 15, textAlign: 'center', padding: 10 }}
          >
            {props.question.word}
          </Text>
        </View>
      }
      
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title='XONG'
          disabled={isNull}
          buttonStyle={{ backgroundColor: 'white', borderRadius: 30, height: 50 }}
          titleStyle={{ color: '#0592D2', fontSize: 15 }}
          containerStyle={{ width: 265, display: 'flex', alignSelf: 'center' }}
          onPress={() => {
            if (props.count <= 2) {
              checkAnswer()
              var newCount = props.count
              newCount++
              setTimeout(() => {
                props.updateCount(newCount)
                props.handleChangeQuestion(newCount)
                setValue('')
                setBGColor('#ffffff')
                setIsNull(true)
                setIsShow(false)
              }, 500)
            }
            else {
              checkAnswer()
              setTimeout(() => {
                Keyboard.dismiss()
                props.navigation.navigate('HomeScreen')
              }, 500)
            }
            
          }}
        />
      </View>
      <View style={{ flex: 2 }}></View>
    </KeyboardAvoidingView>
  );
}

export default withNavigation(ChooseEngFromVieWordItem)