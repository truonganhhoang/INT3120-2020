import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, ScrollView } from 'react-native';
import { ListItem, Header, CheckBox, Card } from 'react-native-elements';
import Question from '../components/Question';

const questions =[
    {
        question:"The data can be used to make useful economic ...",
        answer1:"Forms",
        answer2:"Outcasts",
        answer3:"Predictions",
        result:"three"
    },
    {
        question:"Eagles ... during the cooler months of the year.",
        answer1:"Expel",
        answer2:"Breed",
        answer3:"Break",
        result:"two"
    },
    {
        question:"Demonstrators claimed they had been ... by police officers.",
        answer1:"Brutalized",
        answer2:"Sloshed",
        answer3:"Bubbled",
        result:"one"
    },
    {
        question:"Henry ... through the window into the kitchen.",
        answer1:"Called down",
        answer2:"Peeped",
        answer3:"Canceled",
        result:"two"
    },
    
];

export default class Exam extends React.Component{
    
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('name'),
        };
    };

    keyExtractor = (item, index) => index.toString()

   
    render(){
        const {navigate,state} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: 'Exam', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <View style={{backgroundColor:'#d2d6d9'}}>
                        {
                            questions.map((item, i) => (
                            <Question
                                key={i}
                                question={item.question}
                                answer1={item.answer1}
                                answer2={item.answer2}
                                answer3={item.answer3}
                                result={item.result}
                            />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginBottom:75
    },
});