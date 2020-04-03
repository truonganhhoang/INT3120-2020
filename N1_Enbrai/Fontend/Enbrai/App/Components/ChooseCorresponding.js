import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'

const ChooseCorresponding = (props) => {
  const data = props.navigation.getParam('data')
  useEffect(() => {
    console.log(data)
    return () => {
      
    }
  }, [props])
  return (
    <View>
      <Text>Chọn các từ và bản dịch theo cặp</Text>
    </View>
  )
}

export default ChooseCorresponding;