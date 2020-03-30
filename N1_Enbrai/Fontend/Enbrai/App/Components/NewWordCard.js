import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { Card, Text, Icon, Button } from 'react-native-elements'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const NewWordCard = (props) => {

  useEffect(() => {
    return () => {
    }
  }, [props])

  return (
    <>
      <View style={{
        flex: 9,
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: windowWidth*0.05
      }}>
        <Card
          containerStyle={{
            width: windowWidth * 0.7,
            height: windowHeight * 0.35,
            margin: 0,
            alignSelf: 'center',
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <View style={{
            flex: 3,
            width: '100%',
            display: 'flex',
            alignContent: 'center'
          }}>
            <Button
              type='clear'
              icon={
                <Icon
                  name='volume-up'
                  size={30}
                />
              }></Button>
          </View>
          <View style={{
            flex: 13,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{ color: '#33B3F1', fontSize: 30, marginBottom: 10 }}>{props.word}</Text>
            <Text style={{ color: '#747474', fontSize: 18 }}>{props.meaning}</Text>
          </View>
          <View style={{
            flex: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%'
          }}>
            <Button title='ĐÃ BIẾT' type="clear" titleStyle={{ color: '#cacaca' }} />
            <Button title='LỰA CHỌN' type="clear" titleStyle={{ color: '#feb52b' }} />
          </View>
        </Card>
      </View>

    </>
  )
}

export default NewWordCard;