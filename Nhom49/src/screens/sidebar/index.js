import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Ngữ pháp Tiếng Anh",
    route: "Anatomy",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Tra từ, dịch văn bản",
    route: "Header",
    icon: "arrow-up",
    bg: "#477EEA",
    //types: "11"
  },
  {
    name: "Góp ý, ủng hộ 5*",
    route: "Footer",
    icon: "arrow-down",
    bg: "#DA4437",
    //types: "4"
  },
  {
    name: "Ứng dụng khác",
    route: "NHAccordion",
    icon: "repeat",
    bg: "#C5F442",
    //types: "5"
  },
  {
    name: "Học tiếng anh giao tiếp",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
