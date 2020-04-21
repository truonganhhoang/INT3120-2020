import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Item from '../../components/Video/VideoItem';

const data = [
    {
        id: 1,
        title: "Yêu cầu chung thi sa hình ô tô",
        vid: "https://www.youtube.com/watch?v=guqQP1wOOBs",
        content: "Yêu cầu chung của 12 bài thi sát hạch ô tô hạng B2",
        color: "crimson",
        name: "YCC"
    },
    {
        id: 2,
        title: "Bài sát hạch 1: Xuất phát",
        vid: "https://www.youtube.com/watch?v=guqQP1wOOBs",
        content: "Các bước thực hiện: Thắt dây an toàn. Xe nổ máy ở vị trí trước vạch xuất phát",
        color: "lightseagreen",
        name: "BSH1"
    },
    {
        id: 3,
        title: "Bài sát hạch 2: Dừng xe nhường đường cho ngừi đi bộ",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Dừng xe cách vạch dừng quy định cách không quá 500m, giữ tốc độ cơ không quá 4000 vòng/phút",
        color: "tomato",
        name: "BSH2"
    },
    {
        id: 4,
        title: "Bài sát hạch 3: Dừng và khởi hành xe ngang dốc",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Dừng xe cách vạch dừng quy định cách không quá 500m, khởi hành êm dịu, không bị tụt dốc quá 500mm",
        color: "green",
        name: "BSH3"
    },
    {
        id: 5,
        title: "Bài sát hạch 4: Qua vệt bánh xe và đường vòng vuông góc",
        vid: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        content: "Đi đúng hình quy định của hạng xe thi, bánh xe trước và bánh xe bên lái phụ qua vệt bánh xe",
        color: "red",
        name: "BSH4"
    },
    {
        id: 6,
        title: "Bài sát hạch 5: Qua ngã tư có tín hiệu điều khiển giao thông",
        vid: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        content: "Chấp hành theo tín hiệu đèn điều khiển giao thông; Dừng xe cách vạch dừng quy định không quá 500m",
        color: "orange",
        name: "BSH5"
    },
    {
        id: 7,
        title: "Bài sát hạch 6: Qua đường vòng quanh co",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Lái xe qua đường vòng quanh co trong vùng giưới hạn của hình thi trong thời gian 2 phút",
        color: "mediumspringgreen",
        name: "BSH6"
    },
    {
        id: 8,
        title: "Bài sát hạch 7: Ghép xe vào nơi đỗ (ghép dọc)",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Đi đúng hình quy định của hạng xe thi; Bánh xe không đè vào đường giói hạn ống khí",
        color: "dodgerblue",
        name: "BSH7"
    },
    {
        id: 9,
        title: "Bài sát hạch 8: Tạm dừng ở chỗ cso đường sắt chạy qua",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Dừng xe cách vạch dừng quy định cách không quá 500m, giữ tốc độ cơ không quá 4000 vòng/phút",
        color: "goldenrod",
        name: "BSH8"
    },
    {
        id: 10,
        title: "Bài sát hạch 9: Thay đổi số trên đường bằng",
        vid: "https://www.youtube.com/watch?v=RlBkvjVss-s",
        content: "Trên quãng đường dài 25m kể từ khi bắt đầu vào bài thi, phải thay đổi số và tốc độ",
        color: "indianred",
        name: "BSH9"
    },
];

export default function VideoListScreen(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item title={item.title} content={item.content} color={item.color} name={item.name} vid={item.vid} navigation={navigation} />
                )}

                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: 10, }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

