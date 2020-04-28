import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//

import MapScreen from '../../screens/Map/MapScreen';


//



const Stack = createStackNavigator();


export default function Map() {

  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
        }}
      />
      
    </Stack.Navigator>
  );
}

