import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './Components/TabBar';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('LookUpScreen')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
    //     <Stack.Screen name="LookUpScreen" component={LookUpScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flex: 1
  }
});
