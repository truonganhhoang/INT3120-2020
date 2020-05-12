import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import StackScreen from './screens/Stack';
import MyDrawer from './screens/Drawer';
import { Text } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
      // <Text> hgjhghjghjghjghjjiaakijia  </Text>
    );
  }

}
