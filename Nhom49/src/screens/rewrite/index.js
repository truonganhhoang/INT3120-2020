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
  CardItem,
  List,
  Card
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Header8",
    text: "Phần 1",
    subtitle: "Tổng hợp công thức viết lại câu phần 1"
  },
  {
    route: "HeaderSpan",
    text: "Phần 2",

  },
  {
    route: "HeaderNoShadow",
    text: "Phần 3",

  },
  {
    route: "HeaderNoLeft",
    text: "Phần 4",
    subtitle: "Tổng hợp công thức viết lại câu phần 3"
  }
];

class Rewrite extends Component {

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
            <Text>Công thức viết lại câu</Text>
          </Body>
        </Header>

        <Content padder>
            <List
              dataArray={datas}
              renderRow={data =>
              <Card style={styles.mb}>
                <CardItem button
                    onPress={() => this.props.navigation.navigate(data.route)}
                >
                <Body>
                  <Text style={{fontWeight: "bold"}}>{data.text}</Text>
                  <Text>{data.subtitle}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
                </CardItem>
              </Card>}
            />
        </Content>
      </Container>
    );
  }
}

export default Rewrite;

