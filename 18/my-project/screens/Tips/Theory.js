import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { List, Checkbox } from 'react-native-paper';
var dataTheory = [
    {
        key: "1",
        name: "Khái niệm và quy tắc",
        content: "1. Câu khái niệm \"Phương tiện giao thông cơ giới đường bộ\" chọn \"Kể cả xe máy điện\".\n2. Câu khái niệm \"Phương tiện giao thông thô sơ đường độ\" chọn \"Kể cả xe đạp máy\".\n3. Câu khái niệm \"Người điều khiến giao thông\" là \"Cảnh sát giao thông\".\n4. Câu khái niệm \"Phần đường xe chạy\" chọn câu không có chữ \"An toàn giao thông\".\n5. Câu khái niệm \"Làn đường\" chọn câu có chữ \"An toàn giao thông\".\n6. Các câu \"Đổ xe: không có giới hạn về thời gian và Dừng xe có giới hạn thời gian\" chọn câu số 2.\n7. Vẽ nồng độ cồn, trong máu = 50, trong khí thở = 0, 25 hoặc không có gì cả trong máu và khí thở.\n8. Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.\n9. Giữ khoảng cách 5 mét với đường sắt.\n10. Sử dụng giấy phép lái xe giả cấm 05 năm.\n11. Chọn \"Cơ quan quản lý giao thông\" đối với các trường hợp Xe quá tải, xe quá khổ và xe vận chuyển hàng nguy hiểm.\n12. Chọn \"UBND cấp tỉnh\" đối với trường hợp cấm đi, cấm đổ, cấm dừng, đường ngược chiều.\n13. Loại giấy tờ mang theo: Giấy phép lái xe phù hợp với Loại xe.\n14. Độ tuổi lấy băng theo hạng (mồi hạng cách nhau 3 tuổi): 16: Xe dưới 50cm3; 18: Hạng A, B; 21: Hạng C; 24: Hạng D, FC; 27: Hạng E.\n15. Độ tuổi tối đa người lái xe ô tô hạng E: Nam 55 tuổi và nữ 50 tuổi.\n16. Không lái xe liên tục quá 4 giờ.\n17. Gặp câu hỏi về hạng FE thì chọn Câu 1, hạng FC thì chọn Câu 2.\n18. Tốc độ giới hạn của xe: Bên ngoài khu dân cư 80km/h < 3,5 tấn, 70km/h > 3.5 tấn.\n19. Tốc độ của xe ô tô trên đường cao tốc, bạn lẩy tốc độ (lớn nhất) trong câu hỏi rồi trừ cho 30 thì sẽ ra đáp án đúng. "
    },
    {
        key: "2",
        name: "Nghiệp vụ vận tải",
        content: "1. Hàng siêu trường, siêu trọng không thể tháo rời.\n2. Xe quá tải trọng có tải trọng trục xe vượt quả năng lực chịu tải của mặt đường.\n3. Hàng nguy hiểm: an ninh quốc gia và vận chuyển phải có giấy phép.\n4. Xe quá khổ, quá tải: xin phép cơ quan quản lý giao thông.\n5. Vận chuyển động vật sống: bảo vệ môi trường và chăm sóc.\n6. Xe vệ sinh môi trường: che phủ kín và thời gian phù hợp. "
    },
    {
        key: "3",
        name: "Kỹ thuật lái xe",
        content: "1. Lùi xe có số tự động: Đạp phanh chân hết hành trình.\n2. Quay đầu xe: Chọn đầu nguy hiểm đuôi an toàn.\n3. Xuống dốc muốn dừng xe: về số 1. "
    },
    {
        key: "4",
        name: "Cấu tạo Và sửa chữa",
        content: "1. Niên hạn sử dụng xe ô tô tải = 25 năm, xe ô tô trên 9 chỗ = 20 năm.\n2. Còi của xe ô tô, không lớn hơn 115dB.\n3. Điều khiến xe tảng số câu 1, điều khiến xe giảm số câu 2 (tăng 1 giảm 2).\n4. Yêu cầu của kính chắn gió, chọn \"Loại kính an toàn\".\n5. Mục đích của bảo dưỡng xe để giữ hình thức bên ngoài.\n6. Xảng không vào được buồng phao của bộ chế hòa khí do tắc bầu lọc xăng.\n7. Khảo phục giclơ bảng không khí nén.\n8. Động cơ diezen không nổ không có tia lửa điện (chọn câu không có đoạn \"không có tia lửa điện\").\n9. Điều chỉnh đánh lửa \"sớm sang muộn\" chọn \"cùng chiều\" [đáp án 1], \"muộn sang sớm\" chọn \"ngược chiều\" [đáp án 2] (sớm 1 muộn 2 hoặc sớm cùng muộn ngược).\n10. Thứ phanh xe ôtô ôm.\n11. Động cơ 2 kì thực hiện 2 hành trình, 4 kỳ thực hiện 4 hành trình.\n12. Động cơ đốt trong có thứ tự hút, nén, nổ, xả.\n13. Hộp số đảm bảo cho ô tô chuyển động lùi.\n14. Hệ thống lái dùng để thay đổi hướng chuyển động.\n15. Công dụng của hệ thống lái: chọn câu nào không có chữ mô men.\n16. Công dụng hệ thống truyền lực: truyền mômen.\n17. Công dụng của ly hợp: truyền hoặc ngắt truyền động.\n18. Hệ thống phanh giữ cho ô tô đứng yên trên dốc. "
    },
    {
        key: "5",
        name: "Hệ thống biển báo",
        content: "1. Đối với các câu có biển báo hiệu lệnh được đặt trước ngã ba, ngã tư. Chọn câu 1 nếu câu hỏi 1 dòng, câu 3 nếu câu hỏi có 2 dòng.\n2. Biển báo cấm máy kéo thì không cấm ô tô tải và ngược lại.\n3. Biển báo cấm rẽ trái thì cấm quay đầu và biến cấm quay đầu thì không cấm rẽ trái. "
    },
    {
        key: "6",
        name: "Sa hình",
        content: "1. Đối với câu hỏi liên quan đến việc điều khiển của CSGT, CSGT giơ tay thẳng lên  thì các loại xe phải đứng lại, đưa 1 hoặc 2 tay giang ngang thì xe trước và đảng sau phải đứng lại.\n2. Đường giao nhau có vòng xuyến nhường bên trái. không có vòng xuyến nhường bên phải.\n3. Thấy xuất hiện \"Công an\" thì chọn câu số 3.\n4. Xe nào đã vào ngã tư thì xe đó có quyền ưu tiên đi trước cao nhất.\n5. Tiếp đó đến các xe ưu tiên. Trong các xe ưu tiên thì xe cứu hoá có ưu tiên xe quân sự, xe công an, xe cứu thương.\n6. Tiếp đó nếu cùng là xe ưu tiên hoặc cùng là xe không ưu tiên thì xét đến đường ưu tiên, tức là xe nào nằm trên đường ưu tiên thì có quyền đi trước (Xem biến báo hoặc tín hiệu đèn).\n7. Xe nào không vướng xe khác ở bên phải có quyền đi trước.\n8. Thứ tự ưu tiên tiếp theo: xe rẽ phải -> xe đi thắng -> xe rẽ trái. "
    }
]
export default class Theory extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <List.Section>
                    <FlatList
                        data={dataTheory}
                        renderItem={({ item }) =>
                            <List.Accordion style={{ backgroundColor: '#66bb6a', marginHorizontal: 10, marginVertical: 5, padding: 5 }}
                                titleStyle={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}
                                title={item.name}
                            // left={props => <List.Icon {...props} icon="folder" />}
                            >
                                <List.Item style={{ backgroundColor: '#fff', marginHorizontal: 10 }} title={item.content} titleStyle={{ fontSize: 14 }} titleNumberOfLines={10000} />
                            </List.Accordion>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </List.Section>
            </SafeAreaView>
        )
    }

}
