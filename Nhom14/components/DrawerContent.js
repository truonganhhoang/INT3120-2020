import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
export default class DrawerContent extends React.Component{

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        
            <ImageBackground source={require('../assets/images/bgmobile.jpg')} style={{ width: 280,height:'100%', alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white', fontWeight:'bold'}}>THI TOEIC - TFLAT</Text>
                <View style={[styles.item, (this.props.activeItemKey=='Home')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('Home')}>Trang chủ</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='Word')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('Word')}>Từ vựng</Text>
                </View>
            </ImageBackground>
        
    )
  }
}

const styles = StyleSheet.create({
    item:{
        width:'100%',
        height:30,
        backgroundColor: '#a7b2c4',
        paddingLeft:8,
        paddingTop:4,
        paddingBottom:4,
        marginTop:4,
        marginBottom:4
    },
    activeBackground:{
        backgroundColor: '#e9edf5'
    }
});