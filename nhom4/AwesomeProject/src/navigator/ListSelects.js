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
import BoxSelect from '../component/BoxSelect';
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
                  FirebaseApp.database().ref('ListTest/').once('value').then(snapshot => {
                    let arr=[];
                    for(var key in snapshot.val()){
                      if(snapshot.val()[key].Categoris===namePage) arr.push(snapshot.val()[key]);
                    }
                    let random=Math.floor(Math.random() * arr.length);
                    navigation.navigate("Test", { "namePage": "Đề ngẫu nhiên", "data": arr[random] })
                  });
                }}>
                <BoxSelect srcImage={require('../asset/Layer1.png')} text={"Đề ngẫu nhiên"}  />
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, {backgroundColor: '#ff3334'}]}
              onPress={() => navigation.navigate("ListTests", { "namePage": "Bộ đề thi"})}>
                <BoxSelect srcImage={require('../asset/Layer2.png')} text={'Thi theo bộ đề'}/>
              </Col>
            </Row>
            <Row>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#795547' }]}
                onPress={()=>{
                  let arr={};
                  FirebaseApp.database().ref('Categories').child("B2").child("help").once('value').then(snapshot => {
                    arr=Object.values(snapshot.val());
                    navigation.navigate("Practice",{'data':arr});
                  })
                  }}>
                  <BoxSelect srcImage={require('../asset/Layer6.png')}  text={'Bài thi sa hình'}/>
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#34bbbf' }]}
                onPress={()=>{
                    navigation.navigate("AllQuestion")
                  }}>
                <BoxSelect srcImage={require('../asset/Layer8.png')}  text={'Ôn tập câu hỏi'}/>
              </Col>
            </Row>
            <Row>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#338bd5' }]}
                onPress={()=>{navigation.navigate("TrafficSigns")}}
              >
                <BoxSelect srcImage={require('../asset/Layer4.png')}  text={'Các biển báo'}/>
              </Col>
              <Col style={[AppStyle.StyleCommon.ColSelect, { backgroundColor: '#338bd5' }]}
                onPress={()=>{
                  FirebaseApp.database().ref('tips/').once('value').then(snapshot => {
                    let arr=snapshot.val();
                    navigation.navigate("Tips", {"data": arr });
                  })
                }}>
                <BoxSelect srcImage={require('../asset/Layer7.png')}  text={'Mẹo ghi nhớ'}/>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}