import * as React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';

const LearnScreen = () => {
    return (
      <View style={styles.screenStyle}>
        <Text>Learn screen</Text>
        <Button
          title="Go to Details"
          onPress={() => Alert.alert('Change Screen')}
        />
      </View>
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