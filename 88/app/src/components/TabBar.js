import * as React from 'react';
import { Button, Text, View, Alert, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


function LearnScreen() {
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

function PlayScreen() {
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

const Tab = createMaterialTopTabNavigator();

const Menu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          labelStyle: {
            fontSize: 16,
          },
          tabStyle: {
            borderColor: '#ffffff',
            // width: 'auto',

          },
          style: {backgroundColor: '#00BCD4'},
        }}>
        <Tab.Screen name="LEARN" component={LearnScreen} />
        <Tab.Screen name="PLAY" component={PlayScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


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
export default Menu;
  
