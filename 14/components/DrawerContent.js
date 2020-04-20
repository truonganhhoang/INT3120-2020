import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from '../AppStyles/DrawerContent';
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
                <View style={[styles.item, (this.props.activeItemKey=='')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('')}>Part I</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('')}>Part II</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('')}>Part III</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='')?styles.activeBackground:null]}>
                    <Text  onPress={this.navigateToScreen('')}>Cài đặt</Text>
                </View>
            </ImageBackground>
        
    )
  }
}
