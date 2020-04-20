import React from 'react';
import {  View, Text, FlatList, ScrollView, Modal } from 'react-native';
import { ListItem, Header, CheckBox, Card, Button } from 'react-native-elements';
import styles from '../AppStyles/Setting';
import db from '../data/SQLite';
import host from '../Config/host'

export default class Setting extends React.Component{
    constructor(){
        super();
        this.state = {
            time: Date.now(),
            modalVisible: false,
            data: {
                words: [],
                questions: []
            }
        }
    }

    updateData = async () => {
      // db.dropUpdateTable();
        this.setState({time: await db.getLatestUpdateTime()});
        const response = await fetch(`http://${host.hostname}:${host.port}/updateData`,{ // local ipv4
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({time: this.state.time})
        });
        const data = await response.json();
        // console.log(this.state.time, data);
        data.result.words.forEach(word => {db.insertWord(word)});
        data.result.questions.forEach(question => {db.insertQuestion(question)});
        this.setState({modalVisible: true, data: data.result})
    }

    renderWords = ({item}) => {
        return (
        <ListItem
            title={`Chủ đề: ${item.category}\n${item.eng}`}
            subtitle={item.vie}
            leftAvatar={{ source: { uri: item.picture } }}
            bottomDivider
        />)
    }

    renderQuestions = ({item}) => {
        return (
        <ListItem
            title={item.category}
            subtitle={item.question.length <= 30 ? item.question : item.question.substring(0, 30) + '...'}
            bottomDivider
        />)
    }

    list = () => {
        let hasWords = this.state.data.words.length > 0;
        let hasQuestions = this.state.data.questions.length > 0;
        let nothingToUpdate = !(hasWords || hasQuestions);
        if (hasWords || hasQuestions){
            db.updateTime(Date.now());
        }
        return(
        <View style={styles.modalView}>
            { hasWords ? 
            <View style={styles.textContainer}>
                <Text style={{color: "#ffffff", fontSize: 18}}>Từ mới cập nhật</Text>
            </View> : 
            null }
            
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data.words}
                renderItem={this.renderWords}
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
            />
            {hasQuestions ?
            <View style={styles.textContainer}>
                <Text style={{color: "#ffffff", fontSize: 18}}>Câu hỏi mới cập nhật</Text>
            </View> : 
            null}
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data.questions}
                renderItem={this.renderQuestions}
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
            />
            {nothingToUpdate ?
            <View style={styles.textContainer}>
                <Text style={{color: "#ffffff"}}>Dữ liệu của bạn đang là mới nhất</Text>
            </View> : 
            null}
            <Button style={styles.button} title="OK" onPress={()=>{this.setState({modalVisible: false})}}/>
        </View>);
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
                <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                    <View style={styles.centeredView}>
                        <this.list/>
                    </View>
                </Modal>
            </View>
        );
    }
}