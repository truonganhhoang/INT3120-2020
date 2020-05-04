import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation';

const ChooseCorresponding = (props) => {
  const data = props.navigation.getParam('data')
  var list = []
  data.map(i => {
    list.push(i.word)
    list.push(i.meaning)
  })


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#0592D2', fontSize: 18 }}>Chọn các từ và bản dịch theo cặp</Text>
      </View>
      <View style={{ flex: 7, display: 'none' }}>
        {list!=[]&&list.map(item => {return (
          <Text>{item}</Text>
        )})}
      </View>
    </View>
  )
}

export default withNavigation(ChooseCorresponding);