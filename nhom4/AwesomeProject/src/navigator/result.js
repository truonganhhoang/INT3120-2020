import React, { Component } from 'react';
import {
  Text, View,Image
} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Button, Body, Icon, Title, Content, ListItem, CheckBox } from 'native-base';
export default class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { namePage } = this.props.route.params;
    const { navigation } = this.props;
    const { data } = this.props.route.params;
    return (
      <Container>
        <Header >
          <Button onPress={() => { navigation.goBack() }}>
            <Icon name='menu'></Icon>
          </Button>
          <Body style={{ paddingLeft: 20 }}>
            <Title>{namePage}</Title>
          </Body>
        </Header>
        <Content style={{ marginTop: 1 }}>
          <Header style={{ height: 30 }}>
            <Body>
              <Text style={{ fontSize: 20, color: '#fff' }}>Đúng: {this.CheckResult(data)}/{data.length} </Text>
            </Body>
          </Header>

          <Tabs renderTabBar={() => <ScrollableTab />}>
            {data.map((obj, i) => {
              let count = i+1;
              return (
                <Tab heading={"Câu " + count} key={i}>
                  {this.ShowTabContent (obj)}
                  <Tab />
                </Tab>)
            })}
          </Tabs>
        </Content>
      </Container>
    );
  }
  ShowTabContent(question) {
    const show = [];
    for (var key in question.Answers) {
      show.push(<ShowCheckBox answer={question.Answers[key]} key={key} />)
    };
    return (
      <View style={{ paddingTop: 10, paddingRight: 10 }}>
        <View >
          <Text style={{ color: 'blue', fontSize: 16, paddingLeft: 20 }}>{question.QuestionText}</Text>
          <Image style={{resizeMode:'center'}} source={{uri:question.LinkImage,height:200}}/>
        </View>
        {show}
      </View>
    );
  }
  CheckResult(data) {
    var count = data.length;
    data.map((question) => {//check one question
      var result = true;
      for (var key in question.Answers) {//check one result
        if (question.Answers[key].select != question.Answers[key].AnswerResult) result = false;
      }
      if (result == false) count--;
    })
    return count;
  }
}
//show 1 checkbox,input:data[i].answer[y]
const ShowCheckBox = (props) => {
  var show = [];
  if (props.answer.AnswerResult === true) {
    show.push(
      <Text key={2} style={{ color: "red" }}>{props.answer.AnswerText}</Text>
    )
  }
  else show.push(
    <Text key={2}>{props.answer.AnswerText}</Text>
  )
  return (
    <ListItem stype={{ flexDirection: 'row' }}>
      <CheckBox style={{ marginRight: 20 }} checked={props.answer.select} />
      {show}
    </ListItem>
  );
}
