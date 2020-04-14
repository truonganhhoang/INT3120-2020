
import React, {
  Component,
} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppComponents from './src/navigator';
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Course",
    }
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={this.state.screen}>
          <Stack.Screen options={{ headerShown: false }}
            name="Course"
            component={AppComponents.Course} />
          <Stack.Screen options={{ headerShown: false }}
            name="ListSelects"
            component={AppComponents.ListSelects} />
          <Stack.Screen options={{ headerShown: false }}
            name="Test"
            component={AppComponents.Test} />
          <Stack.Screen options={{ headerShown: false }}
            name="Result"
            component={AppComponents.Result} />
          <Stack.Screen options={{ headerShown: false }}
            name="ListTests"
            component={AppComponents.ListTests} />
          <Stack.Screen options={{ headerShown: false }}
            name="TrafficSigns"
            component={AppComponents.TrafficSigns} />
          <Stack.Screen options={{ headerShown: false }}
            name="Practice"
            component={AppComponents.Practice} />
          <Stack.Screen options={{ headerShown: false }}
            name="AllQuestion"
            component={AppComponents.AllQuestion} />
          <Stack.Screen options={{ headerShown: false }}
            name="Tips"
            component={AppComponents.Tips} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

