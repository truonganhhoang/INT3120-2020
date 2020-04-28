import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import StyleCommon from "../themes/StyleCommon";
import Spinner from "react-native-loading-spinner-overlay";

//Import Components
import SettingScreen from "./SettingScreen";
import SettingItem from "../components/SettingItem";

import StyleHomeScreen from "../themes/StyleHomeScreen";

const GLOBAL = require("../utils/Globals");

export default class SettingOptionScreen extends React.Component {
  static navigationOptions = {
    title: "Tuỳ chỉnh",
    headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
    headerTitleAlign: "center",
    headerTintColor: GLOBAL.COLOR.ORANGE
  };

  constructor(props) {
    super(props);

    this.state = {
      settingList: [
        {id: 1, title: "Ngôn ngữ", icon: "vietnam" },
        {id: 2, title: "Các ứng dụng khác \ncủa PORO" },
        {id: 3, title: "Chúng tôi có thể cải \nthiện ứng dụng này như \nthế nào?" },
        {id: 4, title: "Chia sẻ ứng dụng" },
        {id: 5, text: "Thành thật xin lỗi nếu có những lỗi chính tả hoặc bản dịch sai xuất hiện trong ứng dụng này. Chúng tôi chỉ là một nhóm nhỏ nên dù đã và đang cố gắng hết sức để cải thiện dần ứng dụng nhưng vẫn không thể tránh khỏi sai sót. Nếu bạn phát hiện ra lỗi sai, xin hãy liên hệ với chúng tôi qua email: nhombay.appdev@gmail.com! \n\nSự ủng hộ của các bạn là động lực rất lớn đối với chúng tôi! Xin cảm ơn!", button: "Gửi phản hồi qua email" },
        {id: 6, title: "Tải âm thanh để sử dụng khi ngoại tuyến" }
      ]
    };
  }

  static navigationOptions = {
    title: "Tuỳ chỉnh",
    headerTitleStyle: StyleCommon.StyleHeaderCommon.headerTitle,
    headerTitleAlign: "center",
    headerTintColor: GLOBAL.COLOR.ORANGE
  };

  
  render() {
    const { navigation } = this.props;
    const { settingList } = this.state;
    return (
      <View>
        <Spinner
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <FlatList
          data={settingList}
          renderItem={({ item }) => 
            <SettingItem 
              setting={item} 
              onPress={() => navigation.navigate('SettingScreen')}/>
          }
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.container}
        ></FlatList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 16,
    paddingRight: 16
  }
});