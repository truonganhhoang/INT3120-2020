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
    text: "Vị trí tính từ"
  },
  {
    route: "Header2",
    text: "Tính từ tận cùng bằng 'ing' và 'ed'"
  },
  {
    route: "Header3",
    text: "Tính từ kép/ghép"
  },
  {
    route: "Header4",
    text: "Cấu trúc trật từ tính từ"
  },
  {
    route: "Header5",
    text: "Các tính từ thường gặp"
  }
];

class Adjactive extends Component {

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
            <Text>Tính từ</Text>
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

export default Adjactive;

