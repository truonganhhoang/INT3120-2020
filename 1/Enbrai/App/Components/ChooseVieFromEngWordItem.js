import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { withNavigation } from 'react-navigation'


const ChooseVieFromEngWordItem = (props) => {
  const [bgcolorList, setbgColorList] = useState(['#ffffff', '#ffffff', '#ffffff', '#ffffff'])
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    return () => { }
  }, [props, bgcolorList])

  const checkAnswer = (item, index) => {
    setIsPressed(true)
    var answerIndex = props.meaningList.indexOf(props.question.meaning)
    var newBGColor = bgcolorList
    newBGColor[answerIndex] = '#81C784'
    setbgColorList(newBGColor)
    if (answerIndex != index) {
      newBGColor[index] = '#e57373'
      setbgColorList(newBGColor)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>Chọn bản dịch đúng</Text>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, color: '#009dd6', fontWeight: 'bold' }}>{props.question.word}</Text>
        </View>

        <View style={{ flex: 3, width: '90%', justifyContent: 'center', flexDirection: 'column' }}>
          <FlatList
            data={props.meaningList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => (
              <TouchableOpacity
                style={{
                  borderWidth: 0.5,
                  borderRadius: 10,
                  alignItems: 'center',
                  padding: 15,
                  backgroundColor: isPressed?bgcolorList[item.index]:bgcolorList[item.index],
                  marginBottom: 10,
                  borderColor: '#BDBDBD'
                }}
                onPress={() => {
                  if (props.count <= 2) {
                    checkAnswer(item.item, item.index)
                    var newCount = props.count
                    newCount++
                    setTimeout(() => {
                      setIsPressed(false)
                      props.updateCount(newCount)
                      props.handleChangeQuestion(newCount)
                      var newbgcolor = ['#ffffff', '#ffffff', '#ffffff', '#ffffff']
                      setbgColorList(newbgcolor)
                    }, 500)
                  }
                  else {
                    checkAnswer(item.item, item.index)
                    setTimeout(() => {
                      props.updatePage(1)
                    },500)
                  }
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '200' }}>
                  {item.item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

export default withNavigation(ChooseVieFromEngWordItem)