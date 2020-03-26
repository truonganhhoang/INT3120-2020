import React from 'react'; 
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native'; 
import { CardExtend } from '../../Card'; 

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

const StartScreen = () => {
  
  return (
    <ScrollView>
      {cardProps.map(e => 
        <CardExtend nameCard={e.name} />
      )}
    </ScrollView>
  )
}

export default StartScreen