import React, { Component } from 'react';
import {
  Text, View
} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Button, Body, Icon, Title, Content, ListItem, CheckBox } from 'native-base';
export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
              return (
                <Tab heading={"Cau "} key={i}>
                  <ShowTabContent obj={obj} />
                  <Tab />
                </Tab>)
            })}
          </Tabs>
        </Content>
      </Container>
    );
  }
  CheckResult(data) {
    var count = data.length;
    data.map((qs) => {
      var result = true;
      qs.Answers.map((aw) => {
        if (aw.select != aw.AnswerResult) {
          result = false;
        }
      })
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
//show list checkbox ,input:data[i]
const ShowTabContent = (props) => {
  const show = [];
  props.obj.Answers.map((answer, i) => {
    show.push(<ShowCheckBox answer={answer} key={i} />)
  });
  return (
    <View style={{ paddingTop: 10,paddingRight: 10 }}>
      <View >
        <Text style={{ color: 'blue', fontSize: 16,paddingLeft:20 }}>{props.obj.QuestionText}</Text>
      </View>
      {show}
    </View>
  );
}

