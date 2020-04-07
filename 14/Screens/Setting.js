import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { ListItem, Header, CheckBox, Card, Icon } from 'react-native-elements'

export default class Setting extends React.Component{
    render(){
        const {navigate,state} = this.props.navigation;
        return(
            <View style={{backgroundColor:'#d2d6d9',height:'100%'}}>
                <Header
                        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                        centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
                    />
                <ScrollView>
                    <Card>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='tag-faces'/>
                            <Text>Cài đặt trò chơi</Text>
                        </View>
                        <CheckBox title="Âm thanh"/>
                        <CheckBox title="Thông báo"/>
                        
                    </Card>
                    <Card>
                        <Text>Màu sắc giao diện</Text>
                    </Card>
                    <Card>
                        <Text>Đánh giá 5*</Text>
                    </Card>
                    <Card>
                        <Text>Chia sẻ ứng dụng</Text>
                    </Card>
                    <Card>
                        <Text>Thông tin liên hệ</Text>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}