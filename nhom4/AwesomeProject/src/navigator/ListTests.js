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
      dataListTest:{},  
    }
  }
  componentDidMount(){
    FirebaseApp.database().ref('ListTest/').once('value').then(snapshot => {
      this.setState({ dataListTest: snapshot.val() });
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
            {this.ShowContent()}
          </List>
        </Content>
      </Container>
    );
  }
  ShowContent(){
    show=[];
    for(var key in this.state.dataListTest){
      show.push(this.ShowLicense(key));
    }
    return show;
  }
  ShowLicense(key){
    const { navigation } = this.props;
    return (
      <ListItem noIndent key={key}
        onPress={() => {
            navigation.navigate("Test", { "namePage":key, "data":this.state.dataListTest[key] });
          }
        }>
        <Body >
          <Text >{key}</Text>
        </Body>
        <Right >
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>);
  }
}