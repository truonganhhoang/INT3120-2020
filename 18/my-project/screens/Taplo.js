import React, { Component } from 'react';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Alert, SafeAreaView, Dimensions } from 'react-native';

var GridListItems = [
    { id: require("../assets/icon_taplo/1.jpeg"), key: "Đèn cảnh báo phanh tay", content: "Ý nghĩa: Có thể cần phanh tay đang kéo lên trong khi Bạn đạp ga.\nXử lý: Kiểm tra ngay trình trạn phanh tay" },
    { id: require("../assets/icon_taplo/2.jpeg"), key: "Đèn cảnh báo nhiệt độ", content: "Ý nghĩa: Nhiệt độ động cơ cao hơn mức tiêu chuẩn (động cơ nóng quá mức). Có thể do các nguyên nhân:\n- Hết nước làm mát hoặc hệ thống nước làm mát gặp truc trặc.\n- Bộ ổn nhiệt hoặc quạt thông gió có thể bật liên tục, làm cho động cơ ngốn xăng nhiều hơn." },
    { id: require("../assets/icon_taplo/3.jpeg"), key: "Đèn báo áp suất dầu ở mức thấp", content: "- Áp suất dầu trong động cơ có thể quá thấp (thiếu dầu).\n- Bơm dầu có thể bị hỏng hoặc đường vào bị tắc.\n- Dầu nhớt đang sử dụng có thể có độ nhớt sai so với khuyến cáo của hãng xe." },
    { id: require("../assets/icon_taplo/4.jpeg"), key: "Đèn cảnh báo trợ lực lái điện", content: "Ý nghĩa:\n- Cảm biến (sensor) trợ lực có thể bị lỗi hoặc hỏng.\n- Hệ thống trợ lực lái điện ESP có thể bị trục trặc." },
    { id: require("../assets/icon_taplo/5.jpeg"), key: "Đèn cảnh báo túi khí", content: "Ý nghĩa: Hệ thống túi khí bị trục trặc hoặc một hay nhiều túi khi bị vô hiệu hóa băng tay.\nXử lý: Mang xe đi kiểm tra ở một trung tâm dịch vụ có giấy chứng nhận." },
    { id: require("../assets/icon_taplo/6.jpeg"), key: "Cảnh báo lỗi ác quy, máy giao điện", content: "Ý nghĩa: Ảo quy chưa được sạc hoặc sạc không đúng cách. Tín hiệu này thường xuất hiện khi động cơ đang tắt.\nXử lý: Kiểm tra và sạc lại ăc quy đúng cách." },
    { id: require("../assets/icon_taplo/7.jpeg"), key: "Đèn báo khóa vô lăng", content: "Ý nghĩa: Vô lăng bị khóa.\nXử lý: Kiểm tra khóa vô lăng." },
    { id: require("../assets/icon_taplo/8.jpeg"), key: "Đèn báo bật công tắc khóa điện", content: "Ý nghĩa: Khóa điện đang ởtrạng thái \“khóa\".\nXử lý: Mở (bật) công tăc khóa điện." },
    { id: require("../assets/icon_taplo/9.jpeg"), key: "Đèn báo chưa thắt dây an toàn", content: "Ý nghĩa: Một hoặc nhiều dây an toàn (seatbell) chưa được thăt lại.\nXử lý: Kiểm tra và thăt dây an toàn ở các ghế ngồi." },
    { id: require("../assets/icon_taplo/10.jpeg"), key: "Đèn báo cửa xe mở", content: "Ý nghĩa: Một hoặc nhiều cửa xe chưa được đóng kín đúng cách.\nXử lý: Kiểm tra và đóng kín tất cả cửa xe." },
    { id: require("../assets/icon_taplo/11.jpeg"), key: "Đèn báo nắp ca-pô mở", content: "Ý nghĩa: Nắp ca-pô chưa được đóng kín đáo.\nXử lý: Kiểm tra và đóng kín nắp ca-pô." },
    { id: require("../assets/icon_taplo/12.jpeg"), key: "Đèn báo cốp xe mở", content: "Ý nghĩa: Cốp sau xe chưa được đóng kín đúng cách.\nXử lý: Kiểm tra và đóng kín cốp xe." },
    { id: require("../assets/icon_taplo/13.jpeg"), key: "Đèn cảnh báo động cơ khí thải", content: "Ý nghĩa: Động cơ gặp trục trặc khiến lượng khí thải cao hơn mức tiêu chuẩn. Điều này có thế do:\n- Động cơ bị hỏng.\n- Một cảm biến nào đó của động cơ bị lồi hoặc bị hỏng.\nXử lý: Đưa xe đi kiểm tra." },
    { id: require("../assets/icon_taplo/14.jpeg"), key: "Đèn cảnh báo bộ lọc hạt diesel", content: "Ý nghĩa: Bộ lọc hạt diesel hoạt động không tốt khiến lượng khí thải cao hơn tiêu chuẩn.\nXử lý: Đưa xe đi kiểm tra." },
]

var { width } = Dimensions.get('window')

export default class Taplo extends Component {
    GetGridViewItem(item, index) {
        Alert.alert(item, index);
    }
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={GridListItems}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={[{ width: (width) / 4 }, { height: (width) / 3 }]} onPress={this.GetGridViewItem.bind(this, item.key, item.content)}>
                            <Image style={{ flex: 1, width: undefined, height: undefined }} source={item.id} />
                        </TouchableOpacity>}
                    numColumns={4}
                />
            </SafeAreaView>
        )
    }
}