import React from 'react';
import { Text,View, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Question from '../components/Question';
import db from './../data/SQLite';
import styles from '../AppStyles/FavoriteQuestion';
import PickColor from '../Config/Color'

export default class RecentQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: db.getRecentQuestion(this)
        }
    }
    keyExtractor = (item, index) => index.toString()

    favoriteQuestionSwitch = ques =>{
        if (ques.favorite == 1){
            ques.favorite = 0;
          }else{
            ques.favorite = 1;
          }
        db.updateFavoriteQuestion(ques.question, ques.favorite);
        let filterData = this.state.data.filter(item => item.question != ques.question);
        this.setState({data: filterData});
    }

    caculateTime(time) {
        time = Date.now()-time;
        let second = Math.floor(time/1000);
        let days = Math.floor(second/86400);
        let hours = Math.floor(second/3600);
        let minutes = Math.floor(second/60);
        if(days > 0){
            return days + " ngày trước";
        }else{
            if(hours>0){
                return hours + " giờ trước";
            }else{
                if(minutes>0){
                    return minutes + " phút trước";
                }else{
                    return second + " giây trước";
                }
            }
        }
    }

    renderItem = ({ item, index }) => {
        return(
        <Animatable.View animation={"fadeInLeft"} delay={200}>
            <View style={styles().view}>
            <Text style={styles().textTime}>{this.caculateTime(item.createdAt)}</Text>
                <Question
                    question={item.question}
                    answer1={item.answer1}
                    answer2={item.answer2}
                    answer3={item.answer3}
                    result={item.result}
                />
                <TouchableOpacity style={styles().normal} onPress={() => this.favoriteQuestionSwitch(item)}>
                    <Icon
                        //style={styles.normal}
                        name={'star'}
                        type='material-community'
                        color={item.favorite == 1 ? 'yellow' : 'gray'}
                        size={40}
                    />
                </TouchableOpacity>
            </View>
        </Animatable.View>
      )
    }
    render(){
        const color = PickColor(global.darkmode)
        const {navigate} = this.props.navigation;
        return(
            <View style={styles().container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: 'Câu làm gần đây', style: { color: '#fff' } }}
                    backgroundColor={color.headerColor}
                /> 
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            
        );
    }
}
