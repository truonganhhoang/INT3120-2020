import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment,
  ListItem,
  List
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Header1",
    text: "Câu điều kiện loại 1"
  },
  {
    route: "Header2",
    text: "Câu điều kiện loại 2"
  },
  {
    route: "Header3",
    text: "Câu điều kiện loại 3"
  },
  {
    route: "Header4",
    text: "Câu điều kiện dạng đảo ngữ"
  },
  {
    route: "Header5",
    text: "Câu điều kiện dạng đặc biệt"
  }
];

class Conditional extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text>Câu điều kiện</Text>
          </Body>
        </Header>

        <Content padder>
            <List
                dataArray={datas}
                renderRow={data =>
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data.route)}
                  >
                    <Left>
                      <Text>
                        {data.text}
                      </Text>
                    </Left>
                    <Right>
                      <Icon name="arrow-forward" style={{ color: "#999" }} />
                    </Right>
                  </ListItem>}
             />
        </Content>
      </Container>
    );
  }
}

export default Conditional;

