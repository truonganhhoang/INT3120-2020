import React, { Component } from 'react';
import {
  Image,
  Text,
  StyleSheet
} from 'react-native';
import props from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Grid, Col, Row } from 'native-base';

import AppStyle from '../them'

import { FirebaseApp } from '../component/FirebaseConfig';

export default class ListSelects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }
  render() {
    const { namePage } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => navigation.navigate("Course", { "namePage": namePage })}>
              <Icon name='menu' ></Icon>
            </Button>
          </Left>
          <Body>
            <Title>Ôn thi giấy phép {namePage}</Title>
          </Body>
        </Header>
        <Content style={{ padding: 5 }}>
          <Grid>
            <Row>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#ffa101'}]}
                onPress={() => {
                  FirebaseApp.database().ref('Question/').once('value').then(snapshot => {
                    let arr = Object.values(snapshot.val());
                    for (var i = 0; i < arr.length; i++) {
                      arr[i].Answers = Object.values(arr[i].Answers);
                      for (var a = 0; a < arr[i].Answers.length; a++) {
                        arr[i].Answers[a].select = false;
                        console.log(arr[i].Answers[a]);
                      }
                    }
                    navigation.navigate("Test", { "namePage": "Đề ngẫu nhiên", "data": arr })
                  });
                }}>
                <Body>
                  <Image source={require('../asset/Layer1.png')} style={AppStyle.StyleCommon.IconSelect} />
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Đề ngẫu nhiên</Text>
                </Body>
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#ff3334'}]}
              onPress={() => navigation.navigate("ListTests", { "namePage": "Bộ đề thi"})}>
                <Body>
                  <Image source={require('../asset/Layer2.png')} style={AppStyle.StyleCommon.IconSelect} />
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Thi theo bộ đề</Text>
                </Body>
              </Col>
            </Row>
            <Row>
            <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#795547' }]}>
                <Body>
                  <Image source={require('../asset/Layer6.png')} style={AppStyle.StyleCommon.IconSelect}/>
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Bài thi sa hình</Text>
                </Body>
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#34bbbf' }]}>
                <Body>
                  <Image source={require('../asset/Layer8.png')}style={AppStyle.StyleCommon.IconSelect} />
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Ôn tập câu hỏi</Text>
                </Body>
              </Col>
            </Row>
            <Row>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#338bd5' }]}>
                <Body>
                  <Image source={require('../asset/Layer4.png')} style={AppStyle.StyleCommon.IconSelect} />
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Các biển báo</Text>
                </Body>
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#cc73e1' }]}>
                <Body>
                  <Image source={require('../asset/Layer7.png')} style={AppStyle.StyleCommon.IconSelect} />
                </Body>
                <Body>
                  <Text style={{ color: '#fff', fontSize: 22 }}>Mẹo ghi nhớ</Text>
                </Body>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}