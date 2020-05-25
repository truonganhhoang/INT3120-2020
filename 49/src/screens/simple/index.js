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
    route: "PresentSimple",
    text: "Hiện tại đơn",
    subtitle: "Present simple"
  },
  {
    route: "Header2",
    text: "Hiện tại tiếp diễn",
    subtitle: "Present continuous"
  },
  {
    route: "Header3",
    text: "Hiện tại hoàn thành",
    subtitle: "Present perfect"
  },
  {
    route: "Header4",
    text: "Hiện tại hoàn thành tiếp diễn",
    subtitle: "Present perfect continuous"
  },
  {
    route: "Header5",
    text: "Quá khứ đơn",
    subtitle: "Simple past"
  },
  {
    route: "Header6",
    text: "Quá khứ tiếp diễn",
    subtitle: "Past continuous"
  },
  {
    route: "Header7",
    text: "Quá khứ hoàn thành",
    subtitle: "Past perfect"
  },
  {
    route: "Header8",
    text: "Quá khứ hoàn thành tiếp diễn",
    subtitle: "Past perfect continuous"
  },
  {
    route: "HeaderSpan",
    text: "Tương lai đơn",
    subtitle: "Simple future"
  },
  {
    route: "HeaderNoShadow",
    text: "Tương lai tiếp diễn",
    subtitle: "Future continuous"
  },
  {
    route: "HeaderNoLeft",
    text: "Tương lai hoàn thành",
    subtitle: "Future perfect"
  },
  {
    route: "HeaderTransparent",
    text: "Tương lai hoàn thành tiếp diễn",
    subtitle: "Future perfect continuous"
  }
];

class Simple extends Component {

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
            <Text style={{color:"white", fontWeight: "bold", fontSize: 20, marginLeft: -75}}>Các thì trong tiếng Anh</Text>
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

export default Simple;

