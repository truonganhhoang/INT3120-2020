/*data[
  {
    QuestionText:,
    {
      AnswerText:,
      select:,
      AnswerResult:
    }
  },{}
]

*/

import React, { Component } from 'react';
import {Text, View,Image} from 'react-native';
import { Container,Icon,Title,Tab,Tabs,ScrollableTab,Header, Button, Body, Content,ListItem, CheckBox} from 'native-base';
import {FirebaseApp} from '../component/FirebaseConfig';


export default class AllQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount(){
    FirebaseApp.database().ref('Question/').once('value').then(snapshot => {
      this.setState({data:Object.values(snapshot.val())});
    })
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={{}}>
          <Button onPress={() => { navigation.goBack() }
          }>
            <Icon name="menu" ></Icon>
          </Button>
          <Body style={{ paddingLeft: 20 }}>
            <Title>Ôn tập câu hỏi</Title>
          </Body>
        </Header>
        <Content style={{ margin:1 }}>
          <Tabs renderTabBar={() => <ScrollableTab />}>
            {this.state.data.map((question, i) => {
                let count=i+1;
                return (
                  <Tab heading={"Câu "+ count} key={i}>
                    {this.ShowTabContent( question)}
                    <Tab />
                  </Tab>)
              })}
          </Tabs>
        </Content>
      </Container>
    );
  }
  ShowTabContent(question){
    const show = [];
    for(var key in question.Answers){
      show.push(<ShowCheckBox answer={question.Answers[key]} key={key} />)
    };
    return (
      <View style={{ paddingTop: 10,paddingRight: 10 }}>
        <View >
          <Text style={{ color: 'blue', fontSize: 16,paddingLeft:10 }}>   {question.QuestionText}</Text>
          <Image style={{resizeMode:'center'}} source={{uri:question.LinkImage,height:200}}/>
          

        </View>
        {show}
      </View>
    );
  }
}

const ShowCheckBox = (props) => {
  return (
    <ListItem stype={{ flexDirection: 'row' }}>
      <CheckBox style={{ marginRight: 20 }} checked={props.answer.AnswerResult} onPress={() => {
        
        setSelect(!select);
      }} />
      <Text >{props.answer.AnswerText}</Text>
    </ListItem>
  );
}
