import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView } from 'react-native';
import { ListItem, Header, CheckBox, Card, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Question from '../components/Question';
import db from './../data/SQLite';
export default class Exam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: db.getQuestion(this,this.props.navigation.state.params.type)
        }
    }
    keyExtractor = (item, index) => index.toString()

    favoriteQuestionSwitch = ques =>{
        console.log('change')
        if (ques.favorite == 1){
            ques.favorite = 0;
          }else{
            ques.favorite = 1;
          }
        db.updateFavoriteQuestion(ques.question, ques.favorite);
        
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
                    centerComponent={{ text: 'Exam', style: { color: '#fff' } }}
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

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    view:{
        backgroundColor:'#d2d6d9',
        borderColor:'black',
        borderBottomWidth:1,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:16
    },
    favorite:{
        color:'yellow',
        fontSize:25,
        backgroundColor:'blue',
        borderRadius:15,
    }
});