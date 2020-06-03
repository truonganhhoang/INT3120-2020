import { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Accordian from "./Accordian";
import React from "react";
import Colors from "./Colors";

export default class TheoryTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Khái niệm và quy tắc",
          data:
            "1.	Câu khái niệm “Phương tiện giao thông cơ giới đường bộ” chọn “kể cả xe máy điện”\n" +
            "2.	Câu khái niệm “Phương tiện giao thông thô sơ đường độ” chọn “Kể cả xe đạp máy”.\n" +
            "4.	Câu khái niệm “Phần đường xe chạy” chọn câu không có chữ “An toàn giao thông”.\n" +
            "5.	Câu khái niệm “làn đường” chọn câu có chữ “An toàn giao thông”.\n" +
            "6.	Các câu “Đỗ xe: không có giới hạn về thời gian và dừng xe có giới hạn thời gian” chọn câu số 2.\n" +
            "7.	Về nồng độ cồn, trong máu = 50, trong khí thở = 0.25 hoặc không có gì cả trong máu và khí thở.\n" +
            "8.	Dừng xe, đỗ xe cách lề đường, hè phố không quá 0.25 mét.\n" +
            "9.	Giữ khoảng cách 5m đường sắt.\n" +
            "10.	Sử dụng giấy phép lái xe giả cấm 5 năm.\n" +
            "11.	Chọn “cơ quan quản lí giao thông” đối với các trường hợp xe quá tải, xe quá khổ và xe vận chuyển hàng nguy hiểm.\n" +
            "12.	Chọn “UBND cấp tỉnh” đối với trường hợp cấm đi, cấm đỗ, cấm dừng đường ngược chiều.\n" +
            "13.	Loại giấy tờ mang theo: Giấy phép lái xe phù hợp với loại xe.\n" +
            "14.	Độ tuổi lấy bằng theo hạng (mỗi hạng cách nhau 3 tuổi) 16: 50cm3; 18: Hạng A, B; 21: Hạng C; 24: Hạng D, FC; 27: Hạng E.\n" +
            "15.	Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi.\n" +
            "16.	Không lái xe liên tục quá 4 giờ.\n" +
            "17.	Gặp câu hỏi về hạng FE thì chọn câu 1, hạng FC thì chọn câu 2.\n" +
            "18.	Tốc độ giới hạn của xe: Bên ngoài khu dân cứ 80Km/h < 3.5 tấn, 70km/h > 3.5 tấn.\n" +
            "19.	Tốc độ của xe ô tô trên đường cao tốc, bạn lấy tốc độ (lớn nhất) trong câu hỏi rồi trừ cho 30 thì sẽ ra đáp án đúng.\n",
        },
        {
          title: "Hệ thống biển báo",
          data:
            "1.	Đối với các câu có biển báo hiệu lệnh được đặt trước ngã ba, ngã tư. Chọn câu 1 nếu câu hỏi 1 dòng, câu 3 nếu câu hỏi có 2 dòng.\n" +
            "2.	Biển báo cấm máy kéo thì không cấm ô tô tải và ngược lại.\n" +
            "3.	Biển báo cấm rẽ trái thì cấm quay đầu và biển cấm quay đầu thì không cấm rẽ trái.\n",
        },
        {
          title: "Sa hình",
          data:
            "1.	Đối với câu hỏi liên quan đến việc điều khiển của CSGT, CSGT giơ tay thẳng lên thì các loại xe phải đứng lại, đưa 1 hoặc 2 tay giang ngang thì xe trước và sau phải đứng lại.\n" +
            "2.	Đường giao nhau có vòng xuyến nhường bên trái, không có vòng xuyến nhường bên phải.\n" +
            "3.	Thấy xuất hiện “Công an” thì chọn câu số 3.\n" +
            "4.	Xe nào đã vào ngã tư thì xe đó có quyền ưu tiên đi trước cao nhất.\n" +
            "5.	Tiếp đó đến các xe ưu tiên. Trong các xe ưu tiên thì xe cứu hỏa có ưu tiên xe quân sự, xe công an, xe cứu thương.\n" +
            "6.	Tiếp đó nếu cùng là xe ưu tiên hoặc cùng là xe không ưu tiên thì xét đến đường ưu tiên, tức là xe nào nằm trên đường ưu tiên thì có quyền đi trước (xem biển báo hoặc tín hiệu đèn).\n" +
            "7.	Xe nào không vướng xe khác ở bên phải có quyền đi trước.\n" +
            "8.	Thứ tự ưu tiên tiếp theo: rẽ phải -> xe đi thẳng -> xe rẽ trái.\n",
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
