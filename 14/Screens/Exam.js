import React from 'react';
import {  View, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Question from '../components/Question';
import db from './../data/SQLite';
import styles from '../AppStyles/Exam';
export default class Exam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: db.getQuestion(this,this.props.navigation.state.params.type)
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
            let filterData = this.state.data.filter(item => item);
            this.setState({data: filterData});
    }

    renderItem = ({ item, index }) => {
        return(
        <View style={styles.view}>
            <Question
                question={item.question}
                answer1={item.answer1}
                answer2={item.answer2}
                answer3={item.answer3}
                result={item.result}
            />
            <TouchableOpacity style={styles.normal} onPress={() => this.favoriteQuestionSwitch(item)}>
                <Icon
                    //style={styles.normal}
                    name={'star'}
                    type='material-community'
                    color={item.favorite == 1 ? 'yellow' : 'gray'}
                    size={40}
                />
            </TouchableOpacity>
        </View>
      )
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: this.props.navigation.state.params.type, style: { color: '#fff' } }}
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
