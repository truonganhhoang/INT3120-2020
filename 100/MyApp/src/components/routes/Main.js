import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen5 from '../screens/Screen5';
import Screen4 from '../screens/Screen4';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
const Tab = createMaterialTopTabNavigator();
// const {screenOn} = props;
function Main( {screenOn} ) {
  // Alert.alert(screenOn);
  return (
      <Tab.Navigator
        tabBarPosition = "bottom"
        initialRouteName = {screenOn}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#90CAF9',
          showIcon: true,
          style: {height: 50, backgroundColor: "#0D47A1"}
        }}
      >
        <Tab.Screen name="Screen1" 
          component={Screen1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name='md-home' style={{fontSize : 28, color}}/>
            ),
          }}
        />
        <Tab.Screen name="Screen2" component={Screen2}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <Icon name="md-list-box" style={{fontSize : 28, color}} />
            ),}}
        />
        <Tab.Screen name="Screen3" component={Screen3} 
          options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-basket" style={{fontSize : 28, color}} />
          ),
          style: {height: 0, backgroundColor: "#0D47A1"}
        }}
        />
        <Tab.Screen name="Screen4" component={Screen4}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" style={{fontSize : 28, color}} />
          ),}}
        />
        <Tab.Screen name="Screen5" component={Screen5}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" style={{fontSize : 28, color}} />
          ),}}
        />
      </Tab.Navigator>
  );
}
function mapStateToProps(state){
  return{ 
    screenOn: state.screenOn
  };
}
export default connect(mapStateToProps)(Main);