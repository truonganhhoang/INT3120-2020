import React, { useState, useEffect } from 'react';
import { View, AsyncStorage,StatusBar } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import HomeSetting from './HomeSetting'
import HomeStudy from './HomeStudy'
import HomeTabBar from './HomeTabBar'
import Exercise from './Exercise'
import Account from './Account'
import firebase from 'react-native-firebase'
import SplashScreen from 'react-native-splash-screen'
import SQLite from 'react-native-sqlite-storage';
const Home = (props)=> {
    const [voice,setVoice] = useState(0);
    const [user,setUser] = useState();
    useEffect(()=>{
        SplashScreen.hide();
        const fetchVoice = async()=>{
            try {
                var data = await AsyncStorage.getItem('Voice')
                if(data){
                    setVoice(parseInt(data));
                    console.log(parseInt(data))
                } else setVoice(0)
            } catch (error) {
                console.log(error)
            }
        }
        fetchVoice();
        
        return()=>{
            
        }
    },[props])
    useEffect(() => {
        const fetchUser=()=>{
            const param = props.navigation.getParam('user');
            if(param){
                setUser(param)
            } else{
                var user = firebase.auth().currentUser
                user? setUser(true): setUser(false)
            }
            //console.log(user)
        }
        fetchUser()
        return () => {
        }
    }, [props.navigation.getParam('user')])
        return (
            <View style={{ flex: 1 }}>
                 <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
                <ScrollableTabView
                    tabBarPosition='bottom'
                    tabBarTextStyle={{ fontSize: 20 }}
                    initialPage={1}
                    renderTabBar={() => <HomeTabBar />}
                >
                    <Account login ={user?true:false}/>
                    <HomeStudy/>
                    <Exercise/>
                    <HomeSetting reload ={props.navigation.getParam('reload')} voice = {voice}/>
                </ScrollableTabView>
            </View>
        );
}

export default Home;