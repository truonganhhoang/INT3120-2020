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
    text: "Hiện tại đơn"
  },
  {
    route: "Header2",
    text: "Hiện tại tiếp diễn"
  },
  {
    route: "Header3",
    text: "Hiện tại hoàn thành"
  },
  {
    route: "Header4",
    text: "Hiện tại hoàn thành tiếp diễn"
  },
  {
    route: "Header5",
    text: "Quá khứ đơn"
  },
  {
    route: "Header6",
    text: "Quá khứ tiếp diễn"
  },
  {
    route: "Header7",
    text: "Quá khứ hoàn thành"
  },
  {
    route: "Header8",
    text: "Quá khứ hoàn thành tiếp diễn"
  },
  {
    route: "HeaderSpan",
    text: "Tương lai đơn"
  },
  {
    route: "HeaderNoShadow",
    text: "Tương lai tiếp diễn"
  },
  {
    route: "HeaderNoLeft",
    text: "Tương lai hoàn thành"
  },
  {
    route: "HeaderTransparent",
    text: "Tương lai hoàn thành tiếp diễn"
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
            <Text>Các thì trong tiếng Anh</Text>
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

export default Simple;

