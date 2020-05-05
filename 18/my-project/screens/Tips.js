import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Practice from './Tips/Practive';
import Theory from './Tips/Theory';
const Tab = createMaterialTopTabNavigator();

export default class Tips extends React.Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          labelStyle: { fontSize: 12, fontWeight: 'bold' },
          style: { backgroundColor: '#66bb6a' },
          pressColor: 'green',
          scrollEnabled: false,
          indicatorStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen name="Mẹo lý thuyết" component={Theory} />
        <Tab.Screen name="Mẹo thực hành" component={Practice} />
      </Tab.Navigator>
    );
  }
}
