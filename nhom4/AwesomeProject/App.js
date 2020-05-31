import 'react-native-get-random-values';
import React, {
  Component,
} from 'react';
import { Root, View } from "native-base";
import * as Font from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppComponents from './src/navigator';
import { AppLoading } from 'expo';
const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "Course",
      loading:true
    }
  }
  componentDidMount = async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }
  render() {
    if(this.state.loading){
      return(
        <Root>
          <AppLoading />
        </Root>);
    }

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
            <Stack.Screen options={{ headerShown: false }}
              name="ViewPageWeb"
              component={AppComponents.ViewPageWeb} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

