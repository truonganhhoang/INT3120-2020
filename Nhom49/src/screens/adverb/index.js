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
  Card
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Header1",
    text: "Vị trí trạng từ",
    subtitle: "Cách hình thành trạng từ, vị trí trạng từ"
  },
  {
    route: "Header2",
    text: "Các loại trạng từ",
    subtitle: "Bảng thống kê các loại trạng từ, ví dụ"
  },
  {
    route: "Header3",
    text: "Phân loại trạng từ",
    subtitle: "Trạng từ chỉ cách thức, thời gian,..."
  },
  {
    route: "Header4",
    text: "Các trạng từ thường gặp",
    subtitle: "Bảng thống kê các trạng từ thường gặp"
  }
];

class Adverb extends Component {

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
            <Text>Trạng từ</Text>
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

export default Adverb;

