import React, { Component } from 'react';
import { TextInput, View,Button,Alert } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
   <View>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:10 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button
          title="Gửi phản hồi "
          onPress={() => Alert.alert('Hệ thống đã nhận được phản hồi của bạn ')}
        />
   </View>
  );
}
