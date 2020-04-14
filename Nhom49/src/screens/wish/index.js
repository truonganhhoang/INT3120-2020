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
    text: "Câu ước loại 1 (Tương lai)",
    subtitle: "Định nghĩa, công thức, ví dụ về câu ước loại 1"
  },
  {
    route: "Header2",
    text: "Câu ước loại 2 (Hiện tại)",
    subtitle: "Định nghĩa, công thức, ví dụ về câu ước loại 1"
  },
  {
    route: "Header2",
    text: "Câu ước loại 3 (Quá khứ)",
    subtitle: "Định nghĩa, công thức, ví dụ về câu ước loại 3"
  }
];

class Wish extends Component {

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
            <Text>Câu ước</Text>
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

export default Wish;

