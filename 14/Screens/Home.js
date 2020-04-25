import React from 'react';
import {ListItem} from 'react-native-elements'
import {  View, ScrollView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as Permissions from 'expo-permissions';
import styles from '../AppStyles/Home';
import db from '../data/SQLite';
import host from '../Config/host';
import PickColor from '../Config/Color'

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
        this.state = {
            loading: true
        }
        this.init();
    }

    async init(){
        const existTabletWords = await (db.checkIfTableWordsExist());
        if (existTabletWords == false){
            console.log('home creates table Words')
            const response = await fetch(`https://toeic-test-server.herokuapp.com/getAllWords`) //local ipv4
            const data = await response.json();
            //console.log(data.words.length);
            db.createTable(data.words);
        };
        const existTableQuestions = await (db.checkIfTablesQuestionExist());
        if (existTableQuestions == false){
            console.log('home creates tabe Question');
            const responseQuestion = await fetch(`https://toeic-test-server.herokuapp.com/getAllQuestions`) //local ipv4
            const dataQuestion = await responseQuestion.json();
            db.createQuestionTable(dataQuestion.questions);
        }
        const existSettingsTable = await db.checkIfSettingsTableExist();
        if (!existSettingsTable){
            db.createSettingsTable()
        }
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if (existingStatus !== 'granted') {
            await Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        db.getCurrentMode(this);
    }
    static navigationOptions = {
        title: 'Home',
    }

    render(){
        const {navigate} = this.props.navigation;
        if (!this.state.loading){
            const color = PickColor(global.darkmode);
            return(       
                <View style={styles().container}>
                    <Header
                        centerComponent={{ text: 'THI TOEIC - TFLAT', style: { color: '#fff' } }}
                        backgroundColor={color.headerColor}
                    />
                    <ScrollView style={styles().scrollview} showsVerticalScrollIndicator={false}>
                        <View>
                        {
                            list.map((item, i) => {
                                return (
                                    <Animatable.View key={i} animation="fadeInDown" delay={i*100} duration={500}>
                                        <TouchableOpacity 
                                            onPress={()=> navigate(
                                                item.navigate, {type: item.title, reload: ()=>{this.setState({reload: true})}}
                                            )}
                                            activeOpacity={0.5}
                                        >
                                            <ListItem
                                                key={i}
                                                title={item.title}
                                                leftIcon={{ name: item.icon, color: color.iconColor }}
                                                titleStyle={styles().textColor}
                                                containerStyle={styles().listItemContainer}
                                                bottomDivider
                                                chevron={{color: color.iconColor}}
                                            />
                                        </TouchableOpacity>
                                    </Animatable.View>
                                    
                                )
                            })
                        }
                        </View>
                    </ScrollView>
                </View>
            );
        }else{
        return <View></View>
        }
    }
    
}
