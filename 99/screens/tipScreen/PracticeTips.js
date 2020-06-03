import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  View,
  DrawerLayoutAndroidComponent,
  ScrollView,
} from "react-native";
import Accordian from "../tipScreen/Accordian";
import { Colors } from "../tipScreen/Colors";

export default class PracticeTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Giới thiệu",
          data:
            "Hiện nay, trong việc thi bằng lái xe máy thì phần thi thực hành chấm điểm tự động bằng chip. Do máy tự động chấm điểm nên việc thi thực hành tỷ lệ trượt nhiều hơn so với trước. Qua quá trình tổ chức thì sát hạch qua rất nhiều học viên đúc kết ra một số mẹo cần chuẩn bị trước để thi đảm bảo đỗ 100%.\n" +
            "1.	Tập trước vòng số 8 ở nhà.\n" +
            "Phần thi thực hành trượt nhiều nhất là ở phần thi vòng số 8. Do đó, việc bạn đã biết đi xe máy thành thạo nhưng chưa tập qua vòng số 8 thì cũng rất dễ bị trượt. Bạn nên tập qua vòng số 8 càng nhiều lần càng tốt. Ít nhất là lúc đi xe vào vòng số 8 không còn cảm thấy loạng choạng.\n" +
            "2.	Hôm thi lên sân thi thật sớm.\n" +
            "Tại sao chúng tôi lại khuyên bạn như vậy? Bởi vì xe của bạn thì bạn quen với nó, bạn đi rất ngon lành. Nhưng xe của sân thi thì khác hơn nhiều, nếu bạn không đến sớm làm quen với nó thì cũng rất dễ trượt. Hơn nữa, buổi thi thường sẽ có rất đông người. Nếu bạn đến sớm thì không phải chờ lâu mới được tập xe. Còn nếu đến muộn thì khả năng xếp hàng dài dài mới đến lượt mình.\n" +
            "3.	Cách đi để không bị chạm vạch.\n" +
            "Đi xe vào từ mép ngoài bên trái, bở vì như thế thì bánh sau mới không bị đè lên vạch. Nếu bạn đi vào từ mép ngoài bên phải thì nhìn bánh trước vào rất ngon lành nhưng bánh sau sẽ bị đè lên vạch ngay. Tương tự lúc ra khỏi vòng số 8 cũng như vậy. Bạn phải cho xe từ mép ngoài bên trái, nếu không bánh sau của xe cũng sẽ đè lên vạch.\n" +
            "Lưu ý: Lúc thi thực hành bạn nên để xe ở số 3 mà đi. Bởi vì số 4 thì có thể sẽ hơi yếu, nhưng số 2 thì sẽ bị giật mạnh. Phần đường gồ ghề bạn nên để số 3 đi và nên đi chậm chậm vừa phải nếu không muốn bay luôn cả người và xe ra ngoài.\n",
        },
        {
          title: "Chạy theo vòng só 8",
          data: "demo text",
        },
        {
          title: "Đi vào đường hẹp",
          data: "demo text",
        },
        {
          title: "Chạy đường quanh co",
          data:
            "demo tdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textext",
        },
        {
          title: "Chạy đường quanh co",
          data: "demo text",
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>{this.renderAccordians()}</ScrollView>
      </View>
    );
  }

  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(<Accordian title={item.title} data={item.data} />);
    }
    return items;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#1abc9c",
  },
});
