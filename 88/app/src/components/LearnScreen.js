import * as React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';
import CustomListview from './CustomView';

const LearnScreen = () => {
    return (
        <CustomListview />
    );
}

const styles = StyleSheet.create({
    screenStyle:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 21, 
      color: 'gray'
    },
  
})

export default LearnScreen;