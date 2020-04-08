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
    text: "Các loại danh từ",
    subtitle: "Danh từ riêng, danh từ chung,..."
  },
  {
    route: "Header2",
    text: "Danh từ đếm được và danh từ không đếm được",
    subtitle: "Các sử dụng, một số danh từ điển hình"
  },
  {
    route: "Header3",
    text: "Danh từ số ít và danh từ số nhiều",
    subtitle: "Danh từ số ít, số nhiều theo quy tắc và ..."
  },
  {
    route: "Header4",
    text: "Tổng hợp danh từ bất quy tắc",
    subtitle: "500 danh từ bất quy tắc"
  }
];

class Noun extends Component {

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
            <Text>Danh từ</Text>
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

export default Noun;

