import React from 'react';
import {  View,Text, FlatList, Button, Alert, Modal } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Question from '../components/Question';
import db from './../data/SQLite';
import styles from '../AppStyles/Exam';
import PickColor from '../Config/Color'

export default class Exam extends React.Component{
    index = 0;
    constructor(props){
        super(props);
        this.state = {
          modalVisible:false ,
          data: db.getQuestion(this,this.props.navigation.state.params.type,this.index),
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

    async nextQuestion(){
        if(Object.keys(this.state.data).length>0){
            this.index+=2;
            this.setState({
                data: await db.getQuestion(this,this.props.navigation.state.params.type,this.index)
            })
        }else{
            this.setState({
                modalVisible:true
            })
        }
    }

    backQuestion(){
        this.index-=2;
        this.setState({
            data: db.getQuestion(this,this.props.navigation.state.params.type,this.index)
        })
    }

    renderItem = ({ item, index }) => {
        return(
        <Animatable.View animation={"fadeInLeft"} delay={200}>
            <View style={styles().view}>
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
        const color = PickColor(global.darkmode);
        const {navigate} = this.props.navigation;
        return(
            <View style={styles().container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: this.props.navigation.state.params.type, style: { color: '#fff' } }}
                    backgroundColor={color.headerColor}
                /> 
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                />
                <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
                    <View style={styles().centeredView}>
                        <View style={styles().modalView}>
                            <Text>You have completed {this.props.navigation.state.params.type}</Text>
                            <Button buttonStyle={styles().closeModalButton} title="OK" onPress={()=>{this.setState({modalVisible: false})}}/>
                        </View>
                    </View>
                </Modal>
                <View style={{flexDirection:'row'}}>
                    {this.index==0 ?
                        <View style={{width:'50%', }}>
                        </View>:
                        <View style={styles().viewButtonLeft}>
                            <Button title="Back" onPress={() => this.backQuestion()}/>
                        </View>
                    }
                    <View style={styles().viewButtonRight}>
                        <Button title="Next" onPress={() => this.nextQuestion()}/>
                    </View>
                </View>
            </View>
            
        );
    }
}
