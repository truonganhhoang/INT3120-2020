import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Setting, SignupWithEmail } from './index';

const LinkEmail = createSwitchNavigator({
  Setting: Setting,
  SignupWithEmail: SignupWithEmail,
});

const AppLink = createAppContainer(LinkEmail);

export default class SettingScreen extends React.Component {
  render() {
    return <AppLink />;
  }
}
