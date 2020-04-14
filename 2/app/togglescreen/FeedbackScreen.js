/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';

export default function FeedbackScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="back" />
      <Text>Feedback Screen</Text>
    </View>
  );
}
