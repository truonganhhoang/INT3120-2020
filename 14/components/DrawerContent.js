import React from 'react';
import {Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from '../AppStyles/DrawerContent';
import IconFont from 'react-native-vector-icons/FontAwesome';
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
            <View style={{flex:1}}>
            <Image source={require('../assets/icon.png')} style={{ width: '40%',height:150, alignSelf:'center',justifyContent:'center'}}/>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={[styles.item, (this.props.activeItemKey=='Home')?styles.activeBackground:null]}>
                    <IconFont name='home' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('Home')}>Trang chủ</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='Word')?styles.activeBackground:null]}>
                    <IconFont name='book' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('Word')}>Từ vựng</Text>
                </View>
                {/* <View style={[styles.item, (this.props.activeItemKey=='FavoriteQuestion')?styles.activeBackground:null]}>
                    <IconFont name='star' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('FavoriteQuestion')}>Câu yêu thích</Text>
                </View> */}
                <View style={[styles.item, (this.props.activeItemKey=='EnglishApp')?styles.activeBackground:null]}>
                    <IconFont name='adn' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('EnglishApp')}>English App</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='Setting')?styles.activeBackground:null]}>
                    <IconFont name='cog' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('Setting')}>Cài đặt</Text>
                </View>
                <View style={[styles.item, (this.props.activeItemKey=='')?styles.activeBackground:null]}>
                    <IconFont name='bug' size={25} style={styles.icon}/>
                    <Text  onPress={this.navigateToScreen('')}>Developers</Text>
                </View>
            </ScrollView>
        </View>
        
    )
  }
}
