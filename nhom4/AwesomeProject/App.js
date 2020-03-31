
import React,{Component} from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SelectCourse from './src/Component/SelectCourse';
import ListSelect from './src/Component/ListSelect';
import Test from './src/Component/Test';
import * as firebase from 'firebase';
const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
    super(props);
    var firebaseConfig = {
      apiKey: "AIzaSyB08o4hGFdBu6Rusm9MjNBTQr6rnhEAyQY",
      authDomain: "datagplx.firebaseapp.com",
      databaseURL: "https://datagplx.firebaseio.com",
      projectId: "datagplx",
      storageBucket: "datagplx.appspot.com",
      messagingSenderId: "439320476600",
      appId: "1:439320476600:web:e2fdfa1ccfeb9040936d4d",
      measurementId: "G-MFGZNWCEKW"
    };
  // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="SelectCourse" 
            component={SelectCourse} />
        <Stack.Screen options={{headerShown:false}}
          name="ListSelect" 
          component={ListSelect} />
        <Stack.Screen options={{headerShown:false}}
          name="Test" 
          component={Test} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

