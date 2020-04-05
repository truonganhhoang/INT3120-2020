import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import SignIn from './screens/SignIn'
import useLinking from './navigation/useLinking';
import {AuthContext} from './Context';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [userToken, setUserToken] = React.useState(null);
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('something');
      },
      signOut: () => {
        setUserToken(null);
      },
    }
  }, []);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        setInitialNavigationState(await getInitialState());

        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AuthContext.Provider value={authContext}>
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            {userToken ? (
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0,
                  },
                  headerTintColor: '#666',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              >
                <Stack.Screen name="Nhật ký" component={BottomTabNavigator} />
              </Stack.Navigator>
            ) : (
              <AuthStack.Navigator 
                 screenOptions={{
                  headerStyle: {
                    height: 0,
                  },
                  headerTitleStyle: {
                    fontSize: 0,
                  },
                 }}
              >
                <AuthStack.Screen
                  name="SignIn"
                  component={SignIn}
                />
              </AuthStack.Navigator>
            )}
            
          </NavigationContainer>
        </AuthContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
