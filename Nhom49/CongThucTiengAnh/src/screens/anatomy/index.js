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
  List,
  Card,
  CardItem,
  Title,
} from "native-base";
import styles from "./styles";
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const datasSentences = [
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

const datasWords = [
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

//firestore().collection('dataSentences').doc('IdqyHE4GqJ2Wc9BIHoTL');
const datasSentences_ = [];



class Anatomy extends Component {
  //getData(){}; // ham khai bao trong class muon goi ra thi phai co them this.function(). trong function component thi moi goi truc tiep duoc
  constructor(props) {
    super(props);
    this.state = {
      seg: 1,
      dataFirebase: null
    };
  }
  componentWillMount(){
    this.getData()
  }
  getData = async () => {
   const ref = firebase.database().ref('dataSentences')
                           const snapshot = await ref.once('value')
                           const data = snapshot.val()
                           this.setState({dataFirebase:data})
                           alert(JSON.stringify(data))
  // se co data neu config key dung theo project
  }

  render() {
  if(!this.state.dataFirebase) return null
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
                  dataArray={datasSentences_}
                  renderRow={data =>
                  <Card>
                    <CardItem button
                        onPress={() => this.props.navigation.navigate(data.route)}
                    >
                    <Body>
                      <Text style={{fontWeight: "bold"}}>{data.title}</Text>
                      <Text >{data.subtitle}</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" style={{ color: "#999" }} />
                    </Right>
                    </CardItem>
                  </Card>}
              />
          }
          {this.state.seg === 2 &&
            <List
              dataArray={datasWords}
              renderRow={data =>
              <Card style={styles.mb}>
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
          }
        </Content>
      </Container>
    );
  }
}

export default Anatomy;

