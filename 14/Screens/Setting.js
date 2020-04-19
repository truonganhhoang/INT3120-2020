import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { ListItem, Header, CheckBox, Card, Icon, Button } from 'react-native-elements';
import db from '../data/SQLite';

export default class Setting extends React.Component{
    constructor(){
        super();
        this.state = {
            time: Date.now()
        }
    }
    updateData = async () => {
      // db.dropUpdateTable();
      this.setState({time: await db.getLatestUpdateTime()});
      console.log(this.state.time);
      const response = await fetch('http://192.168.0.104:3299/update-data',{ // local ipv4
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({time: this.state.time})
      });
      const data = await response.json();
      console.log(data);
    }
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
                    <Card>
                        <Button title='Cập nhật dữ liệu' onPress={() => this.updateData()}/>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}