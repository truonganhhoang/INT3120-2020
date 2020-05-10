import  React,{useState} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ProgressComponent({style}) {
  return (
    <View>
      <View style={{...style.bar,...styles.bar}}>
      </View>
      <View style={{...style.progress,...styles.progress}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#fff',
     zIndex: 2,
  },
  progress:{
    position: 'relative',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#fff'
  }

});
