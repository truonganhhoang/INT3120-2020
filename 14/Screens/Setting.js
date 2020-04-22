import React from 'react';
import {  View, Text, FlatList, ScrollView, Modal, Switch } from 'react-native';
import { ListItem, Header, CheckBox, Card, Button } from 'react-native-elements';
import styles from '../AppStyles/setting';
import db from '../data/SQLite';
import host from '../Config/host';
import PickColor from '../Config/Color';

export default class Setting extends React.Component{
    constructor(){
        super();
        this.state = {
            time: Date.now(),
            modalVisible: false,
            data: {
                words: [],
                questions: []
            },
            refesh: false
        }
    }

    updateData = async () => {
        // db.dropUpdateTable();
        this.setState({time: await db.getLatestUpdatedTime()});
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
            leftAvatar={{ source: { uri: item.picture } }}
            title={`Chủ đề: ${item.category}\n${item.eng}`}
            titleStyle={styles().textColor}
            subtitle={item.vie}
            subtitleStyle={styles().textColor}
            containerStyle={styles().listItemContainer}
            bottomDivider
        />)
    }

    renderQuestions = ({item}) => {
        return (
        <ListItem
            title={item.category}
            titleStyle={styles().textColor}
            subtitle={item.question.length <= 30 ? item.question : item.question.substring(0, 30) + '...'}
            subtitleStyle={styles().textColor}
            containerStyle={styles().listItemContainer}
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
        <View style={styles().modalView}>
            { hasWords ? 
            <View style={styles().textContainer}>
                <Text style={{color: "#ffffff", fontSize: 18}}>Từ mới cập nhật</Text>
            </View> : 
            null }
            
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data.words}
                renderItem={this.renderWords}
                showsVerticalScrollIndicator={false}
                style={styles().flatList}
            />
            {hasQuestions ?
            <View style={styles().textContainer}>
                <Text style={{color: "#ffffff", fontSize: 18}}>Câu hỏi mới cập nhật</Text>
            </View> : 
            null}
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data.questions}
                renderItem={this.renderQuestions}
                showsVerticalScrollIndicator={false}
                style={styles().flatList}
            />
            {nothingToUpdate ?
            <View style={{width: 250, alignItems: 'center'}}>
                <Text style={styles().textColor}>Dữ liệu của bạn đang là mới nhất!</Text>
            </View> : 
            null}
            <Button buttonStyle={styles().closeModalButton} title="OK" onPress={()=>{this.setState({modalVisible: false})}}/>
        </View>);
    }

    toggleSwitch = (value) => {
        this.setState({refesh: true})
        db.changeMode(!value? 1:0);
        global.darkmode = !value;
        this.props.navigation.state.params.reload();
    }

    render(){
        const color = PickColor(global.darkmode);
        const {navigate,state} = this.props.navigation;
        return(
            <View style={styles().container}>
                <Header
                        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                        centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
                        backgroundColor={color.headerColor}
                    />
                <ScrollView>
                    <Card containerStyle={styles().card}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles().textColor}>Cài đặt trò chơi</Text>
                        </View>
                        <CheckBox containerStyle={styles().checkboxColor} textStyle={styles().textColor} title="Âm thanh"/>
                        <CheckBox containerStyle={styles().checkboxColor} textStyle={styles().textColor} title="Thông báo"/>
                        
                    </Card>
                    <Card containerStyle={styles().card}>
                        <View Style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={[{alignSelf: 'flex-start', marginBottom: -15, marginTop: 5}, styles().textColor]}>Giao diện tối</Text>
                            <Switch 
                                style={{alignSelf: 'flex-end', marginTop: -10}}
                                onValueChange={() => this.toggleSwitch(global.darkmode)}
                                value={global.darkmode}
                            />
                        </View>
                    </Card>
                    <Card containerStyle={styles().card}>
                        <Text style={styles().textColor}>Đánh giá 5*</Text>
                    </Card>
                    <Card containerStyle={styles().card}>
                        <Text style={styles().textColor}>Chia sẻ ứng dụng</Text>
                    </Card>
                    <Card containerStyle={styles().card}>
                        <Text style={styles().textColor}>Thông tin liên hệ</Text>
                    </Card>
                    <Card containerStyle={styles().card}>
                        <Button buttonStyle={styles().updateButton} title='Cập nhật dữ liệu' onPress={() => this.updateData()}/>
                    </Card>
                </ScrollView>
                <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                    <View style={styles().centeredView}>
                        <this.list/>
                    </View>
                </Modal>
            </View>
        );
    }
}