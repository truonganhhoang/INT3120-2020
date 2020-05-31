import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, List, Right, Icon, Button} from "native-base";

const datas = [
  {
    route: "Noun",
    title: "1.Bảng động từ bất quy tắc",
    subtitle: "Tổng hợp các động từ bất quy tắc thường dùng"
  },
  {
    route: "Noun",
    title: "2.Danh từ",
    subtitle: "Các loại danh từ, danh từ đếm được,..."
  },
  {
    route: "Verb",
    title: "3.Động từ",
    subtitle: "Động từ khuyết thiếu, nội động từ và ..."
  },
  {
    route: "Adjactive",
    title: "4.Tính từ",
    subtitle: "Vị trí tính từ, tính từ đuôi 'ed' và ..."
  },
  {
    route: "Adverb",
    title: "5.Trạng từ",
    subtitle: "Vị trí trạng từ, các loại trạng từ, phân loại,..."
  },
  {
    route: "Preposition",
    title: "6.Giới từ",
    subtitle: "Định nghĩa, cách dùng và các loại giới từ,..."
  },
  {
    route: "Preposition",
    title: "7.Quy tắc trọng âm",
    subtitle: "Tổng hợp hơn 10 cách nhận diện trọng âm"
  },
  {
    route: "Preposition",
    title: "8.Cách phát âm 's/es' ",
    subtitle: "Tổng hợp các cách phát âm 's/es'"
  },
  {
    route: "Preposition",
    title: "9.Cách phát âm 'ed'",
    subtitle: "Tổng hợp các cách phát âm 'ed'"
  },
  {
    route: "Preposition",
    title: "10.Vị trí của danh từ, động từ, tính từ",
    subtitle:"Xác định vị trí của danh từ, động từ, tính từ"
  }
];

class TabWords extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Content padder>
        <List
          dataArray={datas}
          renderRow={data =>
          <Card>
            <CardItem button
                onPress={() => this.props.navigation.navigate(data.route)}
            >
            <Body>
              <Text style={{fontWeight: "bold"}}>{data.title}</Text>
              <Text>{data.subtitle}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" style={{ color: "#999" }} />
            </Right>
            </CardItem>
          </Card>}
        />
      </Content>
    );
  }
}

export default TabWords;
