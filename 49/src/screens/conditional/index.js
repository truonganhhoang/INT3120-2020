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
  Card,
  List
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Header1",
    text: "Câu điều kiện loại 1",
    subtitle: "Khái niệm, công thức, cách dùng câu điều kiện loại 1"
  },
  {
    route: "Header2",
    text: "Câu điều kiện loại 2",
    subtitle: "Khái niệm, công thức, cách dùng câu điều kiện loại 2"
  },
  {
    route: "Header3",
    text: "Câu điều kiện loại 3",
    subtitle: "Khái niệm, công thức, cách dùng câu điều kiện loại 3"
  },
  {
    route: "Header4",
    text: "Câu điều kiện dạng đảo ngữ",
    subtitle: "Đảo ngữ câu điều kiện loại 1, loại 2, loại 3"
  },
  {
    route: "Header5",
    text: "Câu điều kiện dạng đặc biệt",
    subtitle: "Câu điều kiện hỗn hợp, câu điều kiện với UNLESS,..."
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

export default Conditional;

