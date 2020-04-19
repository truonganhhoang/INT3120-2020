import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {Profile} from './components/Profile';
import {Man} from './components/Man';
import {Home} from './components/Home';


const Stack = createStackNavigator();

export default function App() {  

    return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Ôn thi giấy phép lái xe",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "green"
              }              
            }}
            
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
          />

          <Stack.Screen
            name="Man"
            component={Man}
          />

          

        </Stack.Navigator>
      </NavigationContainer>
    );
  
}
