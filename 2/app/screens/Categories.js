import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './homescreen';
import GreetingScreen from './GreetingScreen';
import HelloScreen from './wordscreen/hello';
import NoticeScreen from '../togglescreen/NoticeScreen';
import Toggle from '../components/Toggle';
import GeneralConversationScreen from './GeneralConversation';
import NumberScreen from './NumberScreen';
import TimeandDateScreen from './TimeandDateScreen';
import DirectionsandPlaceScreen from './DirectionsandPlaceScreen';
import AcocommodationScreen from './AcocommodationScreen';
import EatingOutScreen from './EatingOutScreen';
import ShoppingScreen from './ShoppingScreen';
import CountriesScreen from './CountriesScreen';
import FamilyScreen from './FamilyScreen';
import DatingScreen from './DatingScreen';
import EmergencyScreen from './EmergencyScreen';
import MedicalExaminationScreen from './MedicalExaminationScreen';
import ColoursScreen from './ColoursScreen';
import SubStructureScreen from '../structuremenu.js/SubStructureScreen';

const Stack = createStackNavigator();

export default function Categories() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Toggle" component={Toggle} />
        <Stack.Screen name="Greeting" component={GreetingScreen} />
        <Stack.Screen
          name="GeneralConversation"
          component={GeneralConversationScreen}
        />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="TimeandDate" component={TimeandDateScreen} />
        <Stack.Screen
          name="DirectionsandPlace"
          component={DirectionsandPlaceScreen}
        />
        <Stack.Screen name="Acocommodation" component={AcocommodationScreen} />
        <Stack.Screen name="EatingOut" component={EatingOutScreen} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Family" component={FamilyScreen} />
        <Stack.Screen name="Dating" component={DatingScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen
          name="MedicalExamination"
          component={MedicalExaminationScreen}
        />
        <Stack.Screen name="Colours" component={ColoursScreen} />

        <Stack.Screen name="SubStructure" component={SubStructureScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hello" component={HelloScreen} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
