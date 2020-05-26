import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const dataHelp = {
    Text1: 'Đây là ứng dụng giúp bạn học lí thuyết để chuẩn bị cho kì thi sát hạch lí thuyết lái xe chỉ trong 3 ngày.\n' +
        'Vui lòng thực hiện các bước dưới đây để đạt kết quả thi tốt nhất và rut ngắn thời gian ôn luyện!',

    Text2: '1. Ngày đầu tiên bạn nên dành 8 tiếng để học hết tất cả các loại biển báo hay gặp. Tập trung vào các loại ' +
        'biển báo cấm, biển báo hiệu lệnh, biển báo chỉ dẫn, biển báo nguy hiểm.',

    Text3: '2. Ngày thứ 2 bạn hãy vào phần học tất cả các câu lí thuyết, học đi học lại các câu lí thuyết này và các mẹo làm của ' +
        'từng câu, nhớ các định nghĩa cơ bản như nồng độ cồn, tốc độ cho phép,... và học mẹo làm các câu hỏi sa hình...',

    Text4: '3. Ngày thứ 3 bạn hãy làm hết các bộ đề thi của hạng bằng lái xe mà bạn thi. Sau khi làm xong tất cả các đề, bạn hãy chọn ' +
        'đề xáo trộn và làm đến khi nào điểm của bạn đều đạt thì xin chúc mừng bạn đã hoàn thành quá trình ôn luyện.',

    Text5: '4. Nếu bạn đã hoàn thành 3 bước trên thì bạn chỉ cần giữ sự tự tin và bình tĩnh khi đi thi, chắc chắn bạn sẽ đạt kết quả cao.',

    Text6: 'Chúc bạn thi đỗ với số điểm tối đa!'
}

export default class Help extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>{dataHelp.Text1}</Text>
                <Text style={styles.text2}>{dataHelp.Text2}</Text>
                <Text style={styles.text2}>{dataHelp.Text3}</Text>
                <Text style={styles.text2}>{dataHelp.Text4}</Text>
                <Text style={styles.text2}>{dataHelp.Text5}</Text>
                <Text style={styles.text3}>{dataHelp.Text6}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    text1: {
        fontWeight: "bold",
        fontSize: 15,
        margin: 10,
    },

    text2: {
        margin: 10,
        fontSize: 15,
    },

    text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        margin: 10,
    }
})