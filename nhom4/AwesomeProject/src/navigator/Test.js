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

import React, { Component, useState, useEffect } from 'react';
import {
  Text, View
} from 'react-native';
import {
  Container, Header, Tab, Tabs,
  ScrollableTab, Button, Body,
  Icon, Title, Right, Content,
  ListItem, CheckBox
} from 'native-base';
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    const { namePage } = this.props.route.params;
    const { navigation } = this.props;
    const { data } = this.props.route.params;
    console.log(data);
    return (
      <Container>
        <Header >
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
              navigation.navigate("Result", { "namePage": "Kết quả thi", "data": data });
            }}
              style={{ backgroundColor: 'green' }} >
              <Text style={{ color: '#fff' }}>Nộp bài</Text>
            </Button>
          </Right>
        </Header>
        <Content style={{ marginTop: 1 }}>
          <Header style={{ height: 30 }}>
            <Content>
              <CountDown startM={20} navigation={navigation} data={data} />
            </Content>
          </Header>

          <Tabs renderTabBar={() => <ScrollableTab />}>
            {
              data.map((obj, i) => {
                let count=i+1;
                return (
                  <Tab heading={"Cau "+ count} key={i}>
                    <ShowTabContent obj={obj} />
                    <Tab />
                  </Tab>)
              })}
          </Tabs>
        </Content>
      </Container>
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
  return (
    <ListItem stype={{ flexDirection: 'row' }}>
      <CheckBox style={{ marginRight: 20 }} checked={select} onPress={() => {
        props.answer.select = !select;
        setSelect(!select);
      }} />
      <Text >{props.answer.AnswerText}</Text>
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