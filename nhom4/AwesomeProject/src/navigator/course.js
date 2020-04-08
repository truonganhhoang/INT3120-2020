import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Container,List, Header, Title, Content, Right, Body, Icon,  ListItem  } from 'native-base';
import { FirebaseApp } from '../component/FirebaseConfig';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePage: "kooooo",
      dataCourse: []
    }
    this.readUserData();
  }
  readUserData() {
    FirebaseApp.database().ref('Categories/').once('value').then(snapshot => {
      this.setState({ dataCourse: Object.values(snapshot.val()) });
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header >
          <Body>
            <Title>Chọn </Title>
          </Body>
        </Header>
        <Content>
          <List>
            {this.state.dataCourse.map((obj, i) => {
              return <ShowLicense sub={obj} navigation={navigation} key={i} />
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
      onPress={() => {
        props.navigation.push("ListSelects", { "namePage": props.sub.name })
      }
      }>
      <Body >
        <Text >{props.sub.name}</Text>
        <Text note numberOfLines={1}>{props.sub.title}</Text>
      </Body>
      <Right >
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>);
}