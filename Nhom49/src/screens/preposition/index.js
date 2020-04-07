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
    route: "Header1",
    text: "Định nghĩa, cách dùng",
    subtitle: "Định nghĩa, vị trí, hình thức,..."
  },
  {
    route: "Header2",
    text: "Các loại giới từ",
    subtitle: "Các loại giới từ và ý nghĩa của các loại"
  }
];

class Preposition extends Component {

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
            <Text>Giới từ</Text>
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

export default Preposition;

