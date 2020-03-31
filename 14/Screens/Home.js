import React from 'react';
import {ListItem} from 'react-native-elements'
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { Header } from 'react-native-elements';

const list = [
    {
      title: 'Từ vựng Toeic',
      icon: 'assignment'
    },
    {
      title: 'Part I',
      icon: 'school'
    },
    {
        title: 'Part II',
        icon: 'school'
    },
    {
        title: 'Part III',
        icon: 'school'
    },
    {
        title: 'Part IV',
        icon: 'school'
    },
    {
        title: 'Part V',
        icon: 'school'
    },
    {
        title: 'Câu yêu thích',
        icon: 'star'
    },
    {
        title: 'Câu làm gần đây',
        icon: 'timelapse'
    },
    {
        title: 'Phần mềm học tiếng anh',
        icon: 'laptop'
    },
    {
        title: 'Cài đặt',
        icon: 'settings'
    }
  ]

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Home',
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'THI TOEIC - TFLAT', style: { color: '#fff' } }}
                />
      
                <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <View>
                    {
                        list.map((item, i) => (
                        <ListItem
                            onPress={()=> navigate(
                                'Word',{name:'Word'}
                            )}
                            key={i}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                            bottomDivider
                            chevron
                        />
                        ))
                    }
                    </View>
                </ScrollView>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d2d6d9',
      alignItems: 'center',
    },
    scrollview:{
      width: '100%',
      paddingLeft:16,
      paddingRight:16
    },
  });