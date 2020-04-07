import React, { useEffect } from "react";
import { View, AsyncStorage, StatusBar, BackHandler} from "react-native";
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'
console.disableYellowBox = true
const Loading =props=> {
    useEffect( ()=>{
        SplashScreen.hide();
        const fetchData = async()=>{
            //await AsyncStorage.removeItem("once")
        var once = await AsyncStorage.getItem("once")
        if(once){
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'AppStackNavigation' })],
            });
            props.navigation.dispatch(resetAction)
            //props.navigation.navigate('StackNavigator')
        }
        else{
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'OnceSetNumberWordScreen' })],
            });
            props.navigation.dispatch(resetAction)
            //props.navigation.navigate('OnceSetNumberWordScreen')
        }
        }
        fetchData();
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return()=>{
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    },[])
    const backAction = () => {
        BackHandler.exitApp()
      }
    return (
        <View>
        </View>
    );
}

export default Loading;