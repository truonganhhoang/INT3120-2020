import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function Test() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
           <Text>Nội dung</Text> 
        </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      contentContainer: {
        paddingTop: 30,
      },
});
