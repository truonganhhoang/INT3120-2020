import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressComponent({ propsStyle }) {
  return (
    <View>
      <View style={{ ...propsStyle.bar, ...styles.bar }} />
      <View style={{ ...propsStyle.progress, ...styles.progress }} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    position: 'absolute',
    borderRadius: 20,
  },
  progress: {
    position: 'relative',
    borderRadius: 20,
  }
});
