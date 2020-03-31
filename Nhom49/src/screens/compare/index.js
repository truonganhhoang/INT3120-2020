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
    text: "So sánh bằng, so sánh bội số"
  },
  {
    route: "Header2",
    text: "So sánh hơn"
  },
  {
    route: "Header3",
    text: "So sánh hơn nhất"
  },
  {
    route: "Header4",
    text: "So sánh kép"
  },
  {
    route: "Header5",
    text: "So sánh hơn gấp nhiều lần"
  },
  {
    route: "Header6",
    text: "Bảng so sánh các tính từ, trạng từ, danh từ"
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

export default Compare;

