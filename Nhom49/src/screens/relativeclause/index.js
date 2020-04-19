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
    text: "Đại từ quan hệ, trạng từ quan hệ",
    subtitle: "Đại từ quan hệ Who, Which, Whose,..."
  },
  {
    route: "Header2",
    text: "Rút gọn mệnh đề, lược bỏ đại từ",
    subtitle: "Các cách rút gọn mệnh đề, loại bỏ đại từ,..."
  }
];

class RelativeClause extends Component {

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
            <Text>Mệnh đề quan hệ</Text>
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

export default RelativeClause;

