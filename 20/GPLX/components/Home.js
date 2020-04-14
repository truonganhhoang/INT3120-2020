import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Slideshow from 'react-native-slideshow';
import {Button,Icon,ButtonGroup} from 'react-native-elements';
import { MainScreen,DetailScreen} from './screenNames';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          position: 1,
          interval: null,
          dataSource: [
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: 'https://i.pinimg.com/564x/55/fd/d8/55fdd81ba9ccca9539a58bc3ede8258c.jpg',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: 'https://i.pinimg.com/236x/3f/a1/94/3fa19467dada25e4ca1ad8cb83d0490d.jpg',
            }, {
              title: 'Title 3',
              caption: 'Caption 3',
              url: 'https://i.pinimg.com/564x/d8/70/1b/d8701beea1cc3d4dd1ac6031db7dee71.jpg',
            },
          ],
        };
      }
      componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
      }
     
      componentWillUnmount() {
        clearInterval(this.state.interval);
      }
     
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:3}}>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                        />
                </View>
                <View style={{flex:4}}>
                    <View style={{flexDirection:'row',flex:1}}>
                        <View style={{flex:1}}><Button type="outline" title="THI SÁT HẠCH" buttonStyle={{height:134}} /></View>
                        <View style={{flex:1}}><Button type="outline" title="HỌC LÝ THUYẾT" buttonStyle={{height:134}}/></View>
                        <View style={{flex:1}}><Button type="outline" title="BIỂN BÁO ĐƯỜNG BỘ" buttonStyle={{height:134}} onPress={() => this.props.navigation.navigate(DetailScreen)}/></View>
                    </View>
                    <View style={{flexDirection:'row',flex:1}}>
                        <View style={{flex:1}}><Button type="outline" title="MẸO THI KẾT QUẢ CAO" buttonStyle={{height:133}}/></View>
                        <View style={{flex:1}}><Button type="outline" title="TRA CỨU LUẬT" buttonStyle={{height:133}}/></View>
                        <View style={{flex:1}}><Button type="outline" title="CÁC CÂU HAY SAI" buttonStyle={{height:133}}/></View>
                    </View>
                </View>
                <View style={{flex:2}}>
                    <Image
                        source={require('./resources/car1.jpg')}
                        style={{height:340,width:420}}
                    />
                </View>
            </View>
        );
    }
}