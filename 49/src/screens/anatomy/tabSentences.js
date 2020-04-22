import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, List, Right, Icon, Button} from "native-base";

const datas = [
  {
    route: "Simple",
    title: "1.Các thì trong tiếng Anh",
    subtitle: "Hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn,..."
  },
  {
    route: "Passive",
    title: "2.Câu bị động",
    subtitle: "Cấu trúc ngữ pháp, trường hợp đặc biệt,..."
  },
  {
    route: "Wish",
    title: "3.Câu ước",
    subtitle: "Câu ước với Wish loại 1, loại 2, loại 3"
  },
  {
    route: "Wish",
    title: "4.Câu gián tiếp",
    subtitle: "Câu trực tiếp, câu gián tiếp và cách chuyển đổi..."
  },
  {
    route: "Conditional",
    title: "5.Câu điều kiện",
    subtitle: "Câu điều kiện loại 1, loại 2, loại 3,..."
  },
  {
    route: "Compare",
    title: "6.Câu so sánh",
    subtitle: "So sánh bằng, so sánh hơn, so sánh ..."
  },
  {
    route: "RelativeClause",
    title: "7.Mệnh đề quan hệ",
    subtitle: "Đại từ quan hệ, trạng từ quan hệ,..."
  },
  {
    route: "RelativeClause",
    title: "8.Câu cảm thán",
    subtitle: "Câu cản thán với What, How, So, Such,..."
  },
  {
    route: "TagQuestion",
    title: "9.Câu hỏi đuôi",
    subtitle: "Công thức và các dạng đặc biệt của ..."
  },
  {
    route: "HeaderNoShadow",
    title: "10.Câu đảo ngữ",
    subtitle: "Đảo ngữ với No, Not, Never,..."
  },
  {
    route: "HeaderNoLeft",
    title: "11.Câu mệnh lệnh",
    subtitle: "Mệnh lệnh trực tiếp, mệnh lệnh gián tiếp,..."
  },
  {
    route: "HeaderTransparent",
    title: "12.Câu nhấn mạnh (câu chẻ)",
    subtitle: "Câu nhấn mạnh chủ ngữ, tân ngữ, trạng ngữ,.."
  },
  {
     route: "Rewrite",
     title: "13.Công thức viết lại câu",
     subtitle: "Tổng hợp công thức viết lại câu"
  },
  {
     route: "Rewrite",
     title: "14.Thành ngữ, tục ngữ",
     subtitle: "Thành ngữ, tục ngữ và ca dao"
  },
  {
     route: "Rewrite",
     title: "15.Câu đồng tình",
     subtitle: "Câu đồng tình với too, so, either, neither"
  }
];

class TabSentences extends Component {
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
            <CardItem button transparent
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

export default TabSentences;
