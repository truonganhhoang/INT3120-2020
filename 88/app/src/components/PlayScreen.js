import * as React from 'react';
import { Button, Text, View, Alert, StyleSheet } from 'react-native';

const PlayScreen = () => {
    return (
      <View style={styles.screenStyle}>
        <Text style={styles.textStyle}>Play Section Moved</Text>
        <Text style={styles.textStyle, {fontSize: 15, textAlign: 'center', margin: 6, marginBottom: 20}}>Challenge peers, gain XP, and get better in our free all-in-one app!</Text>
        <Button
          title="              INSTALL FROM THE STORE              "
          color="#53c653"
          style={{overflow: 'hidden'}}
          onPress={() => Alert.alert('Please install SoloLearn')}
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

export default PlayScreen;