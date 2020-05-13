
import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Header, Body, Left, Button, Icon, Title, Content, Container } from 'native-base';
import { WebView } from 'react-native-webview';
export default class Tips extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => this.props.navigation.pop()}>
                            <Icon name='menu' ></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Mẹo nên nhớ</Title>
                    </Body>
                </Header>
                <Content>
                    <Text style={styles.heading1}>A. KHÁI NIỆM</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1:</Text>
                    <Text style={styles.heading3}>-Khái niệm “Khổ giới hạn đường bộ”</Text>
                    <Text style={styles.heading3}>-Khái niệm “dãi phân cách”</Text>
                    <Text style={styles.heading3}>-Khái niệm “đuờng phố”</Text>
                    <Text style={styles.heading3}>-Khái niệm "Xe quá tải trọng đường bộ”</Text>
                    <Text style={styles.heading3}>-Khái niệm “phần đường xe chạy”</Text>
                    <Text style={styles.heading3}>-Khái niệm “đường chính”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Phương tiện giao thông thô sơ đường bộ”, “vạch kẻ đường”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Đường cao tốc”</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1:</Text>
                    <Text style={styles.heading3}>-Khái niệm “Dừng xe”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Đỗ xe”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Làn xe”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Phương tiện giao thông cơ giới đường bộ”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Hàng nguy hiểm”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Đường ưu tiên” “Vận tải đa phương thức” “Hoạt động vận tải đường bộ”</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1 và 2:</Text>
                    <Text style={styles.heading3}>-Khái niệm “Đường bộ”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Văn hóa giao thông”</Text>
                    <Text style={styles.heading3}>-Khái niệm “Công trình đường bộ”</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 3:</Text>
                    <Text style={styles.heading3}>-Khái niệm “Hàng siêu trường, siêu trọng”</Text>
                    <Text style={styles.heading1}>B. CẤU TẠO VÀ SỬA CHỮA</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1:</Text>
                    <Text style={styles.heading3}>-Nguyên nhân động cơ diesel không nổ. Động cơ 2 kỳ.</ Text>
                    <Text style={styles.heading3}>-Công dụng của hệ thống truyền lực của ô tô.</ Text>
                    <Text style={styles.heading3}>-Công dụng của hệ thống phanh.</ Text>
                    <Text style={styles.heading3}>-Công dụng của động cơ ô tô.</ Text>
                    <Text style={styles.heading3}>-Yêu cầu của kính chắn gió.</ Text>
                    <Text style={styles.heading3}>-Yêu cầu an toàn kỹ thuật đối với dây đai an toàn. Âm lượng còi.</ Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1 và 2:</Text>
                    <Text style={styles.heading3}>-Mục đích của bảo dưỡng thường xuyên</ Text>
                    <Text style={styles.heading3}>-Xe ô tô tham gia giao thông phải đảm bảo các qui định về chất lượng, atkt…</ Text>
                    <Text style={styles.heading3}>-Xe ô tô tham gia giao thông phải có đủ các loại đèn gì</ Text>
                    <Text style={styles.heading3}>-An toàn kỹ thuật bánh xe lắp cho ô tô</ Text>
                    <Text style={styles.heading3}>-An toàn kỹ thuật đối với gạt nước</ Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 2:</Text>
                    <Text style={styles.heading3}>-Động cơ 4 kỳ</Text>
                    <Text style={styles.heading3}>-Công dụng của ly hợp</Text>
                    <Text style={styles.heading3}>-Niên hạn sử dụng ô tô chở người trên 9 chỗ</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 3:</Text>
                    <Text style={styles.heading3}>-Công dụng của hộp số ô tô</Text>
                    <Text style={styles.heading3}>-Công dụng của hệ thống lái</Text>
                    <Text style={styles.heading3}>-Niên hạn sử dụng của ô tô tải</Text>
                    <Text style={styles.heading1}>C. KỸ THUẬT LÁI XE</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1:</Text>
                    <Text style={styles.heading3}>-Khi quay đầu</Text>
                    <Text style={styles.heading3}>-Điều khiển tăng số</Text>
                    <Text style={styles.heading3}>-Đk ô tô tới gần xe chạy ngược chiều vào ban đêm</Text>
                    <Text style={styles.heading3}>-Người lái xe mô tô xử lý ntn cho xe phía sau vượt</Text>
                    <Text style={styles.heading3}>-Điều khiển ô tô rẽ trái</Text>
                    <Text style={styles.heading3}>-Thao tác mở cửa khi ô tô đã dỗ sát vào lề đương bên phải</Text>
                    <Text style={styles.heading3}>-Lái xe ô tô qua đường sắt không rào chắn…</Text>
                    <Text style={styles.heading3}>-Khi đèn pha của xe ô tô chạy ngược chiều gây chói mắt…</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 2:</Text>
                    <Text style={styles.heading3}>-Khi nhả phanh tay</Text>
                    <Text style={styles.heading3}>-Khi khởi hành ô tô trên đường bằng</Text>
                    <Text style={styles.heading3}>-Khi vừa có xe đi ngược chiều tới gần và vừa có xe phía sau cố tinh muốn vượt, người lái xe xử lý ntn</Text>
                    <Text style={styles.heading3}>-Tầm nhìn bị hạn chế bởi sương mù</Text>
                    <Text style={styles.heading3}>-Đk ô tô rẽ phải ở đường giao nhau</Text>
                    <Text style={styles.heading3}>-Đk ô tô giảm số</Text>
                    <Text style={styles.heading3}>-Đk ô tô trên đường trơn</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 3:</Text>
                    <Text style={styles.heading3}>-Đk xe vượt qua rãnh lớn cắt ngang mặt đường</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1 và 2:</Text>
                    <Text style={styles.heading3}>-Khi tránh nhau trên đường hẹp</Text>
                    <Text style={styles.heading3}>-Thao tác điều khiển xe qua đường sắt</Text>
                    <Text style={styles.heading3}>-Điều khiển xe vào lúc trời mưa to hoặc có sương mù</Text>
                    <Text style={styles.heading3}>-Đk xe vượt qua rãnh lớn cắt ngang mặt đường</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1 và 3:</Text>
                    <Text style={styles.heading3}>-Điều khiển ô tô tự đỗ</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 3 và 4:</Text>
                    <Text style={styles.heading3}>-Để đạt hiệu quả phanh cao nhất,người lái xe mô tô thực hiện thao tác …</Text>
                    <Text style={styles.heading1}>D. QUY TẮC VÀ QUY ĐỊNH</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1:</Text>
                    <Text style={styles.heading3}>-Hiệu lệnh người đk gt trái với tín hiệu đèn hoặc biển báo.</Text>
                    <Text style={styles.heading3}>-Những nơi nào cho phép quay đầu xe trong khu dân cư.</Text>
                    <Text style={styles.heading3}>-Tại nơi không có báo hiệu đi theo vòng xuyến.</Text>
                    <Text style={styles.heading3}>-Đk phương tiện tham gia gt trong hầm đương bộ.</Text>
                    <Text style={styles.heading3}>-Xe kéo rơ moóc khi tham gia giao thông.</Text>
                    <Text style={styles.heading3}>-Vận chuyển hàng hóa bằng xe ô tô chấp hành quy định nào.</Text>
                    <Text style={styles.heading3}>-Người thuê vân tải hàng hóa có các quyền hạn gì?</Text>
                    <Text style={styles.heading3}>-Xe vận chuyển hàng nguy hiểm chấp hành quy định nào?</Text>
                    <Text style={styles.heading3}>-Xe quá tải trọng, quá khổ giới hạn thgia gt tuân thủ qđ nào?</Text>
                    <Text style={styles.heading3}>-Hành khách có các quyền gì khi đi trên xe vận tải hành khách.</Text>
                    <Text style={styles.heading3}>-Người lái xe được phép dừng, đỗ xe trong các trường hợp nào.</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 1 và 2:</Text>
                    <Text style={styles.heading3}>-Người đk xe mô tô đươc phép chở 2 người trong trường hợp nào?</Text>
                    <Text style={styles.heading3}>-Trách nhiệm của người phát hiện công trình đường bộ bị hư hỏng hoặc bị xâm hại.</Text>
                    <Text style={styles.heading3}>-Người vận tải, lái xe phải chấp hành các quy định nào?</Text>
                    <Text style={styles.heading3}>-Người kinh doanh vân tải hàng hóa có nghĩa vụ gì?</Text>
                    <Text style={styles.heading3}>-Người thuê vận tải hàng hóa có nghĩa vụ gì?</Text>
                    <Text style={styles.heading3}>-Biển báo hiệu đường bộ.</Text>
                    <Text style={styles.heading3}>-Người nhận hàng có nghĩa vụ gì?</Text>
                    <Text style={styles.heading3}>-Xe vệ sinh môi trường, xe chở phế thải… khi hoạt động vận tải phải thực hiện các quy định gì?</Text>
                    <Text style={styles.heading3}>-Người lái xe buýt cần thực hiện những nhiệm vụ gì?</Text>
                    <Text style={styles.heading3}>-Người lái xe vân tải hàng hoá cần thực hiện những nhiệm vụ gì?</Text>
                    <Text style={styles.heading3}>-Người lái xe và người phục vụ trên xe vận tải hành khách có trách nhiệm gì?</Text>
                    <Text style={styles.heading3}>-Người lái xe không được vượt xe khác trong trường hợp nào?</Text>
                    <Text style={styles.heading3}>-Người lái xe khi vượt xe khác phải thực hiện như thế nào?</Text>
                    <Text style={styles.heading3}>-Kinh doanh vận tải hành khách bằng xe ô tô gồm những loại hình nào?</Text>
                    <Text style={styles.heading3}>-Người đk pt muốn dừng đỗ trên đường bộ phải thưc hiện ntn?</Text>
                    <Text style={styles.heading3}>-Khi tránh xe đi ngược chiều người lái xe thực hiện ntn là đúng?</Text>
                    <Text style={styles.heading3}>-Xe sau có thể vượt bên phải xe khác trong trường hợp nào?</Text>
                    <Text style={styles.heading3}>-Xe vận tải hàng có thùng cố định được phép chở người trong trường hợp nào?</Text>
                    <Text style={styles.heading3}>-Đảm bảo an toàn qua phà, qua cầu phao.</Text>
                    <Text style={styles.heading3}>-Xe ô tô kéo xe khác ntn là đúng quy tắc giao thông?</Text>
                    <Text style={styles.heading3}>-Người lái xe phải giảm tốc độ đến mức không nguy hiểm hoặc có thể dừng lại …</Text>
                    <Text style={styles.heading3}>-Để đảm bảo an toàn giao thông, người lái xe mô tô cần thực hiện ntn?</Text>
                    <Text style={styles.heading3}>-Người nhận hàng hóa có quyền gì?</Text>
                    <Text style={styles.heading3}>-Trong đô thị người lái xe buýt, taxi, tải… cần thực hiện quy định gì?</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 2:</Text>
                    <Text style={styles.heading3}>-Bảo đảm trật tự an toàn gt.</Text>
                    <Text style={styles.heading3}>-Khi điều khiển xe cơ giơi người lái xe phải bật đèn tín hiệu báo rẽ trong trương hợp nào?</Text>
                    <Text style={styles.heading3}>-Trên đường một chiều, trước khi đến vạch người đi bộ qua đường có một xe tải đang dừng trước làn đường bên phải người lái xe phải lam gì nếu xe của mình đang đi làn đường bên trái.</Text>
                    <Text style={styles.heading3}>-Khi lái xe trên đường vắng mà cảm thấy buồn ngủ, người lái xe nên chọn cách xử trí ntn?</Text>
                    <Text style={styles.heading3}>-Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép…(khi cho xe chạy sau vượt )</Text>
                    <Text style={styles.heading3}>-Người tham gia gt phải chấp hành quy tắc nào?</Text>
                    <Text style={styles.heading3}>-Biển báo cố định và biển tạm thời.</Text>
                    <Text style={styles.heading3}>-Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường.</Text>
                    <Text style={styles.heading3}>-Trên đường một chiều có vạch kẻ phân làn đường xe thô sơ và xe cơ giới đi ntn?</Text>
                    <Text style={styles.heading3}>-Khi dừng xe, đổ xe tại nơi được phép trên đường phố, người điều khiển phương tiện tuân theo những quy định nào?</Text>
                    <Text style={styles.heading3}>-Điều khiển xe chạy trên đường biết có xe sau xin vượt.</Text>
                    <Text style={styles.heading3}>-Sử dụng đèn chiếu sáng vào ban đêm khi 2 xe cơ giới đi ngược chiều gặp nhau.</Text>
                    <Text style={styles.heading3}>-Khi chở hàng vượt quá phía trước và phía sau ô tô chở hàng tham gia gt.</Text>
                    <Text style={styles.heading3}>-Cơ quan nào quy định đường cấm đi, đường một chiều….</Text>
                    <Text style={styles.heading3}>-Trường hợp đặc biệt xe quá tải, quá khổ giới hạn tham gia gt xin phép cơ quan nào?</Text>
                    <Text style={styles.heading3}>-Thời gian làm việc của người lái xe.</Text>
                    <Text style={styles.heading3}>-Những xe nào khi làm nhvụ khẩn cấp…</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 2 và 3:</Text>
                    <Text style={styles.heading3}>-Tại ngã 3, ngã 4 không có đảo an toàn, người lái xe phải nhường đương ntn là đúng?</Text>
                    <Text style={styles.heading3}>-Người kinh doanh vận tải hành khách có những quyền hạn gì?</Text>
                    <Text style={styles.heading3}>-Những nơi nào không được lùi xe?</Text>
                    <Text style={styles.heading3}>-Vận chuyển hàng hóa bằng xe ô tô phải chấp hành các quy định nào?</Text>
                    <Text style={styles.heading3}>-Khi muốn chuyển hướng người lái xe phải thực hiện ntn</Text>
                    <Text style={styles.heading2}>Các câu hỏi sau chọn đáp án 3:</Text>
                    <Text style={styles.heading3}>-Đảm bảo an toàn khi lùi xe…</Text>
                    <Text style={styles.heading3}>-Tại nơi giao nhau có báo hiệu đi theo vòng xuyến.</Text>
                    <Text style={styles.heading3}>-Người lái xe trên đường không ưu tiên phải nhường đường ntn?</Text>
                    <Text style={styles.heading3}>-Trên đường không phân chia thành 2 chiều xe chạy riêng biệt, 2 xe đi ngược chiều tránh nhau ntn?</Text>
                    <Text style={styles.heading3}>-Đường bộ giao nhau với đường sắt…</Text>
                    <Text style={styles.heading3}>-Kéo xe trong trường hợp hệ thống hãm không còn hiệu lực…</Text>
                    <Text style={styles.heading3}>-Việc sát hạch cấp GPLX.</Text>
                    <Text style={styles.heading3}>-Thứ tự xe dược quyền ưu tiên đi trước qua nơi giao nhau.</Text>
                    <Text style={styles.heading3}>-Khi có tín hiệu của xe ưu tiên, người tham gia giao thông phải làm gì ?</Text>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    heading1: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 20
    },
    heading2: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10
    },
    heading3: {
        paddingLeft: 20,
        fontSize: 15,
    },
})