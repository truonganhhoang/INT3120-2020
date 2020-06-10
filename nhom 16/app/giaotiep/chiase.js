import React, { Component } from 'react';
import { TextInput, View,Button,Alert } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('https://drive.google.com/drive/folders/1w2X5ss-ESPOR_Yz649YobhUWKaVa_9Yv');

  return (
   <View>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
   </View>
  );
}
