import React,{Component} from 'react'
import {ListItem} from 'react-native-elements'
import{
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native'

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

export default class CategoryListItem extends Component{
    render(){
        const { navigate } = this.props.navigation;
        return (
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
          )
    }
}

