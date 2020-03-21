import React, { Component } from 'react'
import { StatusBar, StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              onPress={()=>this.props.navigation.openDrawer()}
            >
            <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleMenu}>10 vạn câu hỏi vì sao</Title>
          </Body>
          
        </Header>
      </Container>
    )
  }
}

export default HomeScreen

styles = StyleSheet.create({
  titleMenu: {
    fontWeight: "bold",
    fontSize: 20
  }
})