import React from "react";
import {Component} from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TheoryTips from "./TheoryTips";
import PracticeTips from "./PracticeTips";


const Tab = createMaterialTopTabNavigator();

export default function TrafficLaws() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Mẹo lý thuyết" component={TheoryTips} />
        <Tab.Screen name="Mẹo thực hành" component={PracticeTips} />
      </Tab.Navigator>
    );
  }