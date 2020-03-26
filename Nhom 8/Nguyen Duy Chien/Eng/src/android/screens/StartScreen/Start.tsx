import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { CardExtend } from '../../components/Card';

const styles = StyleSheet.create({
  stretch: {
    width: 500,
    height: 1920,
    resizeMode: 'stretch'
  }
});

const BackgroudUrl = "../../../../../images/logo.png";

const cardProps = [
  {
    name: "People"
  },
  {
    name: "Home"
  },
  {
    name: "Health"
  },
  {
    name: "Shopping"
  },
  {
    name: "Food"
  },
  {
    name: "Study"
  },
  {
    name: "Appearance"
  },
  {
    name: "Eating out"
  },
  {
    name: "Leisure"
  },
  {
    name: "Environment"
  }
];

const StartScreen = (props: { navigation: any }) => {
  const { navigation } = props; 
  return (
    <ScrollView>
      {cardProps.map(e =>
        <CardExtend nameCard={e.name} navigation={navigation}/>
      )}
    </ScrollView>
  )
}

export default StartScreen