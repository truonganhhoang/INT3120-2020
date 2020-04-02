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
    text: "So sánh bằng, so sánh bội số",
    subtitle: "So sánh bằng, so sánh bội số"
  },
  {
    route: "Header2",
    text: "So sánh hơn",
    subtitle: "So sánh hơn kém, so sánh hơn kém không dùng 'than'"
  },
  {
    route: "Header3",
    text: "So sánh hơn nhất",
    subtitle: "Cách dùng, các công thức liên quan"
  },
  {
    route: "Header4",
    text: "So sánh kép",
    subtitle: "Cách dùng, một số lưu ý"
  },
  {
    route: "Header5",
    text: "So sánh hơn gấp nhiều lần",
    subtitle: "So sánh hơn gấp nhiều lần, công thức"
  },
  {
    route: "Header6",
    text: "Bảng so sánh các tính từ, trạng từ, danh từ",
    subtitle: "Bảng so sánh tính từ, trạng từ bất quy tắc,..."
  }
];

class Compare extends Component {

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
            <Text>Câu so sánh</Text>
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

export default Compare;

