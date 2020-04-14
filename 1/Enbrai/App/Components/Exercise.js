import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import {Button,Icon} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
import {withNavigation} from 'react-navigation';
const Exercise = props => {
  useEffect(() => {

    return () => {};
  }, []);
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
      }}>
      <StatusBar backgroundColor="#0592D2" barStyle="light-content" />
      <LinearGradient
        style={{flex: 1, paddingLeft: 15, paddingRight: 15}}
        colors={['#0592D2', '#39D57F']}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Button
            title="Bài tập nâng cao"
            buttonStyle={{
              backgroundColor: 'white',
              borderRadius: 30,
              height: 50,
              padding:20
            }}
            titleStyle={{color: '#0592D2', fontSize: 15}}
            containerStyle={{
              display: 'flex',
              alignSelf: 'center',
              marginBottom: 25,
            }}
            onPress={()=>{
              props.navigation.navigate('SelectSectionScreen')
            }}
          />
          <Text style={{textAlign:'center', marginLeft:30, marginRight:30, fontSize:14, color:'#F5F5F5'}}> Hãy nâng cao trình độ của bản thân bằng cách thử sức với các bài tập bằng tiếng anh nhé!</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default withNavigation(Exercise);
