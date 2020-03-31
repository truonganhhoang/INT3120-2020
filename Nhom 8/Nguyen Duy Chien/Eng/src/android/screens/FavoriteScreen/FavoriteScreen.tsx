import React from 'react'; 
import { View, ScrollView, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { Header } from 'react-native-elements';
import { Back } from '../../components/Back'; 


import styles from './styles'; 

const Vocabulary = () => {
  return (
    <Text>Vocabulary</Text>
  )
}

const Lesson = () => {
  return (
    <Text>Lesson</Text>
  )
}

const Tab = createMaterialTopTabNavigator(); 

function FavoriteTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Vocabulary"
        component={Vocabulary}
        options={{ tabBarLabel: 'Vocabulary' }}
      />
      <Tab.Screen 
        name="Lesson"
        component={Lesson}
        options={{ tabBarLabel: 'Lesson' }}
      />
    </Tab.Navigator>
  )
}

const FavoriteScreen = (props: {navigation?: any}) => {
  const { navigation } = props; 
  
  return (
    // <View>
    //   <Header containerStyle={styles.header}
    //     leftComponent={
    //       <Back navigation={navigation} backScreen='StartScreen' color='#ff5e00'/>
    //     }
    //     centerComponent={
    //       {
    //         text: "Favorite", 
    //         style: styles.textTitle
    //       }
    //     }
    //   >
    //     <Back navigation={navigation} backScreen='StartScreen' color='#ff5e00'/>
    //   </Header>
    <FavoriteTabs />
    // </View>
  )
}

export default FavoriteScreen; 