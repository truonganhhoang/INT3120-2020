import React, { useState, useEffect } from 'react'
import { View, FlatList, StatusBar, Dimensions } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation';

const ReadyDetail = (props) => {

  const heightW = Dimensions.get('window').height
  const widthW = Dimensions.get('window').width

  const data = props.navigation.getParam('dataSelected')
  useEffect(() => {
    return () => {
    }
  }, [props])
  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
      <View style={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Text style={{ color: '#0592D2', fontSize: 18 }}>Cố gắng ghi nhớ các từ sau đây</Text>
      </View>
      <View style={{ flex: 8, marginTop: heightW * 0.05 }}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              paddingTop: heightW * 0.03,
              paddingBottom: heightW * 0.01,
              borderBottomWidth: (item.order % 4 != 3) ? 0.7 : 0,
              width: widthW * 0.7,
              borderBottomColor: '#D0D0D0'
            }}>
              <Text style={{ marginBottom: heightW * 0.01, fontSize: 18, fontWeight: 'bold' }}>{item.word}</Text>
              <Text style={{ marginBottom: heightW * 0.01, fontSize: 16, color: '#6E6E6E' }}>{item.meaning}</Text>
            </View>
          }
          keyExtractor={item => item.id}
        ></FlatList>
      </View>
      <View style={{ flex: 3, display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          title='BẮT ĐẦU'
          buttonStyle={{ backgroundColor: '#0592D2', borderRadius: 30, height: 50 }}
          titleStyle={{ color: 'white', fontSize: 15 }}
          containerStyle={{ width: 150, display: 'flex', alignSelf: 'center', marginBottom: 25 }}
          onPress={() => { props.navigation.navigate('ChooseCorrespondingScreen', { data: data }) }}
        ></Button>
      </View>
    </View>
  )
}

export default withNavigation(ReadyDetail);