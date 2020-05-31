import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RowTrick } from '../components/RowTrick';
import TabBarOptions from '../style/TabBarOptions';


var dataLiThuyet = [
    {
        id: "1",
        name: "Khái niệm và quy tắc",
        text: '1. Câu khái niệm "Phương tiện giao thông cơ giới đường bộ" chọn "Kể cả xe máy điện".\n' +
            '2. Câu khái niệm "Phương tiện giao thông thô sơ đường bộ" chọn "Kể cả xe đạp máy".\n' +
            '3. Câu khái niệm "Người điều khiển giao thông" là "Cảnh sát giao thông".\n' +
            '4. Câu khái niệm "Phần đường xe chạy" chọn câu không có chữ "An toàn giao thông".\n' +
            '5. Câu khái niệm "Làn đường" chọn câu có chữ "An toàn giao thông".\n' +
            '6. Các câu "Đổ xe: không có giới hạn về thời gian và Dừng xe có giới hạn thời gian" chọn câu số 2.'
    },
    {
        id: "2",
        name: "Nghiệp vụ vận tải",
        text: "1. Hàng siêu trường, siêu trọng không thể tháo rời.\n" +
            "2. Xe quá tải trọng có tải trọng trục xe vượt quá năng lực chịu tải của mặt đường.\n" +
            "3. Hàng nguy hiểm: an ninh quốc gia và vận chuyển phải có giấy phép.\n" +
            "4. Xe quá khổ, quá tải: xin phép cơ quan quản lí giao thông.\n" +
            "5. Vận chuyển động vật sống: bảo vệ môi trường và chăm sóc.\n" +
            "6. Xe vệ sinh môi trường: che phủ kín và thời gian phù hợp."
    },
    {
        id: "3",
        name: "Kỹ thuật lái xe",
        text: '1. Lùi xe có số tự động: Đạp phanh chân đến hết hành trình.\n' +
            '2. Quay đầu xe: Chọn đầu nguy hiểm đuôi an toàn.\n' +
            '3. Xuống dốc muốn dừng xe: về số 1.'
    },
    {
        id: "4",
        name: "Cấu tạo và sửa chữa",
        text: "Cấu tạo và sửa chữa nè."
    },
    {
        id: "5",
        name: "Hệ thống biển báo",
        text: '1. Đối với các câu có biển báo hiệu lệnh được đặt trước ngã ba, ngã tư. Chọn câu 1 nếu câu hỏi 1 dòng, câu 3 nếu câu hỏi có 2 dòng.\n' +
            '2. Biển báo cấm máy kéo thì không cấm ô tô tải và ngược lại.\n' +
            '3. Biển báo cấm rẽ trái thì cấm quay đầu và biển cấm quay đầu thì không cấm rẽ trái.'
    },
    {
        id: "6",
        name: "Sa hình",
        text: '1. Đối với câu hỏi liên quan đến việc điều khiển của CSGT giơ tay thẳng lên thì các loại xe phải đứng lại, đưa 1 tay hoặc 2 tay sang ngang thì xe trước và đằng sau phải dừng lại.\n' +
            '2. Đường giao nhau có vòng xuyến nhường bên trái, không có vòng xuyến nhường bên phải.\n' +
            '3. Thấy xuất hiện "công an" thì chọn câu số 3.\n' +
            '4. Xe nào đã vào ngã tư thì xe đó có quyền ưu tiên đi trước cao nhất.\n' +
            '5. Tiếp đó đến các xe ưu tiên. Trong các xe ưu tiên thì xe cứu hỏa có ưu tiên xe quân sự, xe công an, xe cứu thương.\n' +
            '6. Tiếp đó nếu cùng là xe ưu tiên hoặc cùng là xe không ưu tiên thì xét đến đường ưu tiên, tức là xe nào nằm trên đường ưu tiên thì có quyền đi trước.\n' +
            '7. Xe nào không vướng các xe khác ở bên phải có quyền đi trước.\n' +
            '8. Thứ tự ưu tiên tiếp theo: xe rẽ phải -> xe đi thẳng -> xe rẽ trái.'
    }
]

var dataThucHanh = [
    {
        id: '1',
        name: 'Giới thiệu',
        text: '(Hệ thống cảm biến điện tử trên sân sát hạch tại Trung tâm sát hạch sẽ thực hiện chấm điểm, nếu không bị lỗi thì điểm tối đa là 100. Điểm đậu là từ 80 trở lên)\n\n' +
            'Tổng thời gian toàn bộ bài thi là 15 phút, thời gian mỗi bài thi sẽ được tính từ khi vào bài thi (vạch màu trắng trên đường) đến khi ra khỏi bài thi.'
    },
    {
        id: '2',
        name: 'Bài 1: Bài thi xuất phát',
        text: ''
    },
    {
        id: '3',
        name: 'Bài 2: Dừng xe và nhường đường cho người đi bộ',
        text: ''
    },
    {
        id: '4',
        name: 'Bài 3: Dừng xe và khởi hành lên dốc',
        text: ''
    },
    {
        id: '5',
        name: 'Bài 4: Qua vệt bánh xe và đường vuông góc',
        text: ''
    },
    {
        id: '6',
        name: 'Bài 5: Qua ngã tư có đèn giao thông',
        text: ''
    },
    {
        id: '7',
        name: 'Bài 6: Qua đường vòng quanh co',
        text: ''
    },
    {
        id: '8',
        name: 'Bài 7: Ghép xe dọc vào nơi đỗ',
        text: ''
    },
    {
        id: '9',
        name: 'Bài 8: Ghép xe ngang vào nơi đỗ',
        text: ''
    },

    {
        id: '10',
        name: 'Bài 9: Tạm dừng ở nơi có đường sắt chạy qua',
        text: ''
    },
    {
        id: '11',
        name: 'Bài 10: Thay đổi số trên đường thẳng',
        text: ''
    },
    {
        id: '12',
        name: 'Bài 11: Kết thúc',
        text: ''
    },
]

const Tab = createMaterialTopTabNavigator();

export default function Meo_thi() {
    return (
        <Tab.Navigator
            tabBarOptions={TabBarOptions}
        >

            <Tab.Screen name='MẸO LÍ THUYẾT' component={Li_thuyet} />
            <Tab.Screen name='MẸO THỰC HÀNH' component={Thuc_hanh} />
        </Tab.Navigator>
    )
}

export function Li_thuyet() {
    return (
        <FlatList
            data={dataLiThuyet}
            renderItem={({ item }) => {
                return (
                    <RowTrick element={item} />
                )
            }}
        >
        </FlatList>
    )
}

export function Thuc_hanh() {
    return (
        <FlatList
            data={dataThucHanh}
            renderItem={({ item }) => {
                return (
                    <RowTrick element={item} />
                )
            }}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({

})