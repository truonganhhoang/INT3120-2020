import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class Tutorial extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 15, marginTop: 60, alignContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: 20 }}>Đây là ứng dụng giúp bạn học lý thuyết để chuẩn bị cho kỳ thi sát hạch lý thuyết lái xe chỉ trong 3 ngày. Vui lòng thực hiện các bước dưới đây để đạt kết quả thi tốt nhất và rút ngắn nhất thời gian ôn luyện !</Text>
                <Text style={{ paddingBottom: 20 }}>1. Ngày đầu tiên bạn nên dành 8 tiếng để học hết tất cả các loại biển báo hay gặp.Tập trung vào các loại biển báo cấm, biển báo hiệu lệnh, biển bảo chỉ dẫn, biển báo nguy hiểm..</Text>
                <Text style={{ paddingBottom: 20 }}>2. Ngày thứ 2 bạn hãy vào phần học 450 câu lý thuyết, học đi học lại các câu lý thuyết này và các mẹo làm của từng câu, nhớ các định nghĩa cơ bản như nồng độ cồn, tốc độ cho phép..và học mẹo làm bài các câu hỏi sa hình..</Text>
                <Text style={{ paddingBottom: 20 }}>3. Ngày thứ 3 bạn hãy vào làm hết các bộ đề thi của từng hạng bằng lái xe. Sau khi làm xong tất cả các đề mặc định (đều đạt > 28 câu trở lên). Bạn hãy trọn 1 đề xáo trộn và làm đến khi nào điểm thi của bạn đều đạt thì chúc mừng bạn đã hoàn thành quá trình ôn luyện</Text>
                <Text style={{ paddingBottom: 20 }}>4. Nếu bạn đã hoàn thành 3 bước trên, thì bạn chỉ cần giữ tự tin và bình tĩnh khi thi, chắc chắn bạn sẽ đạt kết quả cao.Chúc bạn thi đỗ với số điểm tối đa</Text>
                <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.submitText}>Bắt đầu sử dụng</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    submit: {
        
        marginHorizontal:80,
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:'green',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff'
      },
    submitText: {
        fontSize: 18,
        color:'#fff',
        textAlign:'center',
    }
})
