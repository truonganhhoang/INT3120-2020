import React from 'react';
import {ListItem} from 'react-native-elements'
import {  View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as Permissions from 'expo-permissions';
import styles from '../AppStyles/Home';
import db from '../data/SQLite';
import host from '../Config/host';

const list = [
    {
      title: 'Từ vựng Toeic',
      icon: 'assignment',
      navigate: 'Word'
    },
    {
      title: 'Part I',
      icon: 'school',
      navigate: 'Exam'
    },
    {
        title: 'Part II',
        icon: 'school',
        navigate: 'Exam'
    },
    {
        title: 'Part III',
        icon: 'school',
        navigate: 'Exam'
    },
    {
        title: 'Part IV',
        icon: 'school',
        navigate: 'Exam'
    },
    {
        title: 'Part V',
        icon: 'school',
        navigate: 'Exam'
    },
    {
        title: 'Câu yêu thích',
        icon: 'star',
        navigate: 'FavoriteQuestion'
    },
    {
        title: 'Câu làm gần đây',
        icon: 'timelapse',
        navigate: 'Exam'
    },
    {
        title: 'Phần mềm học tiếng anh',
        icon: 'laptop',
        navigate: 'EnglishApp'
    },
    {
        title: 'Cài đặt',
        icon: 'settings',
        navigate: 'Setting'
    }
  ]

export default class Home extends React.Component{
    constructor(){
        super();
        this.init();
    }
    async init(){
        const existTabletWords = await (db.checkIfTableWordsExist());
        if (existTabletWords == false){
            console.log('home creates table Words')
            const response = await fetch(`http://${host.hostname}:${host.port}/getAllWords`) //local ipv4
            const data = await response.json();
            //console.log(data.words.length);
            db.createTable(data.words);
        };
        const existTableQuestions = await (db.checkIfTablesQuestionExist());
        if (existTableQuestions == false){
            console.log('home creates tabe Question');
            const responseQuestion = await fetch(`http://${host.hostname}:${host.port}/getAllQuestions`) //local ipv4
            const dataQuestion = await responseQuestion.json();
            db.createQuestionTable(dataQuestion.questions);
        }
        const existUpdateTable = await db.checkIfUpdateTableExist();
        if (!existUpdateTable){
            db.createUpdateTable()
        }
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if (existingStatus !== 'granted') {
            await Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
    }
    static navigationOptions = {
        title: 'Home',
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            
            <View style={styles.container}>
                <Header
                    style={{height:20}}
                    centerComponent={{ text: 'THI TOEIC - TFLAT', style: { color: '#fff' } }}
                />
                <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                    <View>
                    {
                        list.map((item, i) => {
                            return (
                                <Animatable.View key={i} animation="fadeInDown" delay={i*100} duration={500}>
                                    <ListItem
                                        onPress={()=> navigate(
                                            item.navigate, {type: item.title}
                                        )}
                                        key={i}
                                        title={item.title}
                                        leftIcon={{ name: item.icon }}
                                        bottomDivider
                                        chevron
                                    />
                                </Animatable.View>
                            )
                        })
                    }
                    </View>
                </ScrollView>
            </View>
        );
    }
    
}
