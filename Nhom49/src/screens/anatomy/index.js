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

const datasSentences = [
  {
    route: "Simple",
    text: "1.Các thì trong tiếng Anh"
  },
  {
    route: "Passive",
    text: "2.Câu bị động"
  },
  {
    route: "Wish",
    text: "3.Câu ước"
  },
  {
    route: "Wish",
    text: "4.Câu gián tiếp"
  },
  {
    route: "Conditional",
    text: "5.Câu điều kiện"
  },
  {
    route: "Compare",
    text: "6.Câu so sánh"
  },
  {
    route: "RelativeClause",
    text: "7.Mệnh đề quan hệ"
  },
  {
    route: "RelativeClause",
    text: "8.Câu cảm thán"
  },
  {
    route: "TagQuestion",
    text: "9.Câu hỏi đuôi"
  },
  {
    route: "HeaderNoShadow",
    text: "10.Câu đảo ngữ"
  },
  {
    route: "HeaderNoLeft",
    text: "11.Câu mệnh lệnh"
  },
  {
    route: "HeaderTransparent",
    text: "12.Câu nhấn mạnh (câu chẻ)"
  },
  {
     route: "Rewrite",
     text: "13.Công thức viết lại câu"
  },
  {
     route: "Rewrite",
     text: "14.Thành ngữ, tục ngữ"
  },
  {
     route: "Rewrite",
     text: "15.Câu đồng tình"
  }
];

const datasWords = [
  {
    route: "Noun",
    text: "1.Bảng động từ bất quy tắc"
  },
  {
    route: "Noun",
    text: "2.Danh từ"
  },
  {
    route: "Verb",
    text: "3.Động từ"
  },
  {
    route: "Adjactive",
    text: "4.Tính từ"
  },
  {
    route: "Adverb",
    text: "5.Trạng từ"
  },
  {
    route: "Preposition",
    text: "6.Giới từ"
  },
  {
    route: "Preposition",
    text: "7.Quy tắc trọng âm"
  },
  {
    route: "Preposition",
    text: "8.Cách phát âm 's/es' "
  },
  {
    route: "Preposition",
    text: "9.Cách phát âm 'ed'"
  },
  {
    route: "Preposition",
    text: "10.Vị trí của danh từ, động từ, tính từ"
  }
];

class Anatomy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header hasSegment>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button
                active={this.state.seg === 1 ? true : false}
                first
                onPress={() => this.setState({ seg: 1 })}
              >
                <Text>CÂU</Text>
              </Button>
              <Button
                last
                active={this.state.seg === 2 ? true : false}
                onPress={() => this.setState({ seg: 2 })}
              >
                <Text>TỪ</Text>
              </Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          {this.state.seg === 1 &&
            <List
                dataArray={datasSentences}
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
          }
          {this.state.seg === 2 &&
            <List
                dataArray={datasWords}
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
          }
        </Content>
      </Container>
    );
  }
}

export default Anatomy;

