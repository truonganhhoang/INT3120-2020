import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Alert} from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp'
import Loading from './screens/Loading';
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
      token: userToken,
      signIn: (phone, password) => {
        setLoadingComplete(false);
        fetch('https://mobile-uet.herokuapp.com/api/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numberPhone:phone,
            password: password,
          })
        })
        .then((response) => response.json())
        .then((json) => {
          if(json.code != "success") Alert.alert("Có lỗi xảy ra!\nVui lòng thử lại.");
          else setUserToken(json.response);
        })
        .catch(() => Alert.alert(json.code.toUpperCase()))
        .finally(() => setLoadingComplete(true));
      },
      signUp: (phone,password, name, email, school) => {
        fetch('https://mobile-uet.herokuapp.com/api/create-user', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
            numberPhone: phone,
            school: school,
            username: name,
            role: "ROLE_STUDENT"
          })
        })
        .then((response) => response.json())
        .then((json) => {
          setLoadingComplete(false);
        })
        .catch(() => Alert.alert("json.massage"))
        .finally(() => setLoadingComplete(true));
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
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AuthContext.Provider value={authContext}>
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            {userToken ? (
              <Stack.Navigator
                screenOptions={{
                  headerOptions: {
                    headerShown: false,
                  },
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
                <AuthStack.Screen name="SignIn" component={SignIn} />
                <AuthStack.Screen name="SignUp" component={SignUp} />
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
