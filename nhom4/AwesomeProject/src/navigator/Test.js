
import React, { Component, useState, useEffect } from 'react';
import {
  Text, View, Image
} from 'react-native';
import {
  Container, Header, Tab, Tabs,
  ScrollableTab, Button, Body,
  Icon, Title, Right, Content,
  ListItem, CheckBox
} from 'native-base';
import { FirebaseApp } from '../component/FirebaseConfig';
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    var listQuestion = this.props.route.params.data.Question.split(" ");
    for (var i = 0; i < listQuestion.length; i++) {
      FirebaseApp.database().ref('Question').child(listQuestion[i]).once('value').then(snapshot => {
        this.setState({ data: [...this.state.data, snapshot.val()] });
      })
    }
  }
  render() {
    const { namePage } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={{}}>
          <Button onPress={() => { navigation.goBack() }
          }>
            <Icon name="menu" ></Icon>
          </Button>
          <Body style={{ paddingLeft: 20 }}>
            <Title>{namePage}</Title>
          </Body>
          <Right>
            <Button onPress={() => {
              navigation.pop();
              navigation.navigate("Result", { "namePage": "Kết quả thi", "data": this.state.data });
            }}
              style={{ backgroundColor: 'green' }} >
              <Text style={{ color: '#fff' }}>Nộp bài</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{ margin: 1 }}>
          <Header style={{ height: 30 }}>
            <Content>
              <CountDown startM={20} navigation={navigation} data={this.state.data} />
            </Content>
          </Header>

          <Tabs renderTabBar={() => <ScrollableTab />}>
            {this.state.data.map((question, i) => {
              let count = i + 1;
              return (
                <Tab heading={"Câu " + count} key={i}>
                  {this.ShowTabContent(question)}
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
          <Text style={{ color: 'blue', fontSize: 16, paddingLeft: 10 }}>{question.QuestionText}</Text>
          <Image style={{ resizeMode: 'center' }} source={{ uri: question.LinkImage, height: 200 }} />
        </View>
        {show}
      </View>
    );
  }
}

//input: startM (minute)
const CountDown = (props) => {
  const [m, setM] = useState(props.startM);
  const [s, setS] = useState(0);
  useEffect(() => {
    let mounted = true;
    if (m === 0 && s === 0) {
      props.navigation.pop();
      props.navigation.navigate("Result", { "namePage": "Kết quả thi", "data": props.data });
    }
    setTimeout(() => {
      if (mounted) {
        if (s == 0) {
          setS(59);
          setM(m - 1);
        }
        else {
          setS(s - 1);
        }
      }
    }, 1000);
    return () => mounted = false;
  })
  return (
    <Text style={{ color: '#fff', fontSize: 18 }}>Thời gian: {m}:{s}</Text>
  )
}

const ShowCheckBox = (props) => {
  const [select, setSelect] = useState(false);
  props.answer.select = select;
  return (
    <ListItem stype={{ flexDirection: 'row' }}>
      <CheckBox style={{ marginRight: 20 }} checked={select} onPress={() => {
        setSelect(!select);
      }} />
      <Text >{props.answer.AnswerText}</Text>
    </ListItem>
  );
}
