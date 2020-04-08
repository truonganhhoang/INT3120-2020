/*
data[

]
*/
import React, { Component } from 'react';
import {
  Text, View
} from 'react-native';
import { Container, Header, Left, Button, Body, Icon, Title, Right, Content, ListItem,List } from 'native-base';
import { FirebaseApp } from '../component/FirebaseConfig';
export default class ListTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePage: "kooooo",
      dataListTest: []
    }
    this.readUserData();
  }
  readUserData() {
    FirebaseApp.database().ref('ListTest/').once('value').then(snapshot => {
      this.setState({ dataListTest: Object.keys(snapshot.val()) });
    });
  }
  render() {
    const { namePage } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <Container>
        <Header >
          <Left>
            <Button onPress={() => navigation.goBack()}>
              <Icon name='menu' ></Icon>
            </Button>
          </Left>
          <Body>
            <Title>{namePage} </Title>
          </Body>
        </Header>
        <Content>
          <List>
            {this.state.dataListTest.map((obj, i) => {
              return <ShowLicense obj={obj} navigation={navigation} key={i} />
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
const ShowLicense = (props) => {
  return (
    <ListItem noIndent
      /*onPress={() => {
        let arr=[]
        FirebaseApp.database().ref('ListTest/'+props.obj).once('value').then(snapshot => {
          arr=Object.keys(snapshot.val()) ;
        });
        FirebaseApp.database().ref('Question/').child(["Question1/"]).once('value').then(snapshot => {
          arr = Object.keys(snapshot.val());
          console.log(arr);
          for (var i = 0; i < arr.length; i++) {
            arr[i].Answers = Object.values(arr[i].Answers);
            for (var a = 0; a < arr[i].Answers.length; a++) {
              arr[i].Answers[a].select = false;
            };
          };
          //navigation.navigate("Test", { "namePage": "Đề ngẫu nhiên", "data": arr });
        })
      }}*/
      >
      <Body >
        <Text >{props.obj}</Text>
      </Body>
      <Right >
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>);
}