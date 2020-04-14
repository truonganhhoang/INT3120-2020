import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, FlatList } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { List, Checkbox } from 'react-native-paper';


var dataPractive = [
    {
        key: "1",
        name: "Giới thiệu",
        content: "(Hệ thống cảm biến điện tử trên sản sát hạch tại Trung tâm sát hạch sẽ thực hiện châm biếm, nêu không bị lồi thì điểm tối đa là 100 điếm Điếm đậu là từ 80 điểm trở lên).\n\nTổng thời gian toàn bộ bài thi là 15 phút, thời gian mỗi bài thi sẽ được tính từ khi vào bài thi (vạch màu trang trên đường) đến khi ra khỏi bài thi "
    },
    {
        key: "2",
        name: "Bài 1: Bài thi xuất phát",
        content: "Các yêu cầu bài thi:\n\n1.Thắt dây an toàn trước khi xuất phát ( nếu không thắt dây an toàn sẽ bị trừ 5 điểm ).\n2. Khởi hành nhẹ nhàng, xe không bị run giật trong khoảng thời gian 20 giây.\n3. Bật đèn xi nhan trái trước khi xuất phát ( nếu không bật xi nhan trái bị trừ 5 điểm ).\n4. Tắt xi nhan trái sau vạch xuất phát 5 mét ( không tắt xi nhan trái bị trừ 5 điểm ).\n5. Giữ động cơ hoạt động liên tục (trừ 5 điểm cho mỗi lần xe bị chết máy ).\n6. Giữ tốc độ động cơ ( vòng tua ) không quá 4000.\n7. Giữ tốc độ xe chạy không quá 24 km/h đối với hạng B và D. Tốc độ không quá 20 km/h đôi với hạng C và E.\n8. Lái xe an toàn theo quy tắc giao thông.\n\nHướng dẫn cách thi:\n\n\t Trước lúc xuất phát, khi mới lên xe, bạn cần kiểm tra lại ghế ngồi xem có phù hợp với người không, nếu cần thiết thì chỉnh xa vành tay lái hoặc gần lại để đạp hết được côn, phanh, ga. Kiểm tra hai gương sao cho nhìn thấy được điếm bánh xe sau tiếp xúc với mặt đường.\n\t Khi có lệnh xuất phát, bạn vào số 1, nhả côn từ từ để xe đi. Khi đèn xanh trên xe tải hoặc khi qua vạch xuất phát rồi thì tắt xi-nhan. Khi xe đã đi, bạn có thế nhà hết côn ra cho xe tự bò, không cần đặt chân vào bàn đạp ga. Nhưng theo tôi, bạn không nên nhà hết mà cứ đỡ côn ở mức một nửa để xe đi chậm, chuẩn bị vào bài 2. "
    },
    {
        key: "3",
        name: "Bài 2: Bài thi dừng xe và nhường đường cho người đi bộ",
        content: "Các yêu cầu bài thi:\n\n1.Thi sinh dừng xe cách vạch dừng theo đúng quy định không quá 500mm.\n2. Giữ cho động cơ xe hoạt động liên tục không được chết máy.\n3. Giữ cho tốc độ động cơ ( vòng tua máy ) không vượt quá 4000 vòng/phút.\n4. Giữ tốc độ xe không quá 24 km/h.\n5. Lái xe an toàn theo quy tắc giao thông.\n\nHướng dẫn cách thi:\n\n\t Các sân thi thường “giúp\" học viên bằng cách đánh dấu sắn bảng vạch đó trên vỉa ba-toa hoặc ngay trên mặt đường. Vạch đỏ trèn vỉa ba-toa để chí khi vai người lái xe đến ngang vạch đó thì phải dừng. Còn với vạch đỏ trên mặt đường thì phải nhìn qua gương thấy bánh xe sau cách vạch đó chừng hơn gang tay là dừng. Hoặc người lái cũng có thể lấy cột biển báo hiệu người đi bộ trồng bên phải đường để làm cột mốc dừng cho mình.\n\t Sau khi xuất phát, bạn để xe đi chậm. Càng vào đến bài thi càng chậm, để khi bạn thấy đúng vị trí thì chỉ cần ấn nhẹ phanh là xe đã dừng ngay và dừng nhẹ nhàng (không giật nẩy lên). Dừng xe xong, bạn lại nhà côn cho xe đi tiếp luôn. Dừng lâu quá 30 giây sẽ bị trừ điểm."
    },
    {
        key: "4",
        name: "Bài 3: Bài thì dùng xe và khởi hành lên dốc",
        content: "Các yêu cầu bài thi:\n\n1.Dừng xe cách vạch dừng quy định không quá 500mm.\n2. Khởi hành xe êm dịu, không bị tụt dốc quá 500mm.\n3. Xe qua vị trí dừng trong khoảng thời gian 30 giây.\n4. Giữ động cơ hoạt động liên tục.\n5. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n6. Lái xe theo quy tăc giao thông đường bộ.\n7. Tốc độ xe chạy không quá 24 km/h.\n\nHướng dẫn cách thi:\n\n\t Sau khi qua bài 2, bạn nhả hết côn, phanh cho xe tự bò lên dốc. Về bản chất, bài này giống bài 2 ở chỗ dừng xe rồi lại đi tiếp. Nhưng vì xe đang ở trên dốc nên bạn không thế đỡ còn cho xe đi chậm lại vì nếu đỡ côn thì xe sẽ bị trôi ngược về chân dốc. Vì thế, chỉ có thể nhăm đúng vị trí cần đồ (qua vạch đó trên ta-luy hoặc mặt đường) để đạp côn, phanh đúng lúc.\nNếu như ở bài 2, sau khi dừng xe, để đi tiếp bạn chỉ việc bỏ chân phanh ra rồi mới từ từ nhà côn. Nhưng ở bài 3 thì không thể làm như vậy vì xe đang trên dốc, bó phanh chân ra thì xe sẽ trôi. Do vậy cách xử lý Ở bài 3 khác bài 2. Có hai cách:\n - Cách 1: Là cách dạy chính thống trong trường. Sau khi xe đã dừng trên dốc, bạn kéo phanh tay với mục đích là thay phanh chân giữ xe tại điểm dừng. Khi đó, bạn có thể bỏ chân phanh ra và đặt vào chân ga mớm lèn. Đồng thời chân trái nhả côn từ từ, đến khi thấy tay lái hoặc cần số rung lên (báo hiệu các là côn đã bắt vào nhau) thì nhà nhẹ phanh tay, nghe ngóng nẻu thấy xe không trượt thì thà nốt phanh tay, xe sẽ tự bò lên.\n - Cách 2: Là cách các lái giả thường làm trong thực tế, không dùng đến phanh tay. Sau khi xe dừng, bạn nhả côn từ từ, đến khi thấy tay lái hoặc cần số rung lên thì nhà nhẹ phanh chân, nghe ngóng. Nếu cảm thấy xe trôi thì đạp phanh vào, làm lại. Nếu thấy xe không trượt thì thả cho hết phanh chân, xe sẽ tự bò lên. Nếu nhà hết phanh chân mà xe vẫn đứng yên thì tiếp vào chân ga một chút, đồng thời hơi nhả côn ra thèm. Khi xe đã đi thì giữ nguyên vị trí chân côn và ga cho đến khi xe qua khói đỉnh dốc. Nhiều người mới học lại thấy cách làm này dễ hơn cách 1, vì không cần dùng đến phanh tay mà chỉ tập trung vào hai chân điều chỉnh côn, phanh (thực tế khi hạ phanh tay, những người chưa quen có thế bị choạng tay Iải hoặc ấn mạnh vào bàn đạp ga làm rú ga). "
    },
    {
        key: "5",
        name: "Bài 4. Bài thi qua vệt bánh xe và đường vuông góc ",
        content: "Các yêu cầu bài thi:\n\n1.Lái xe đi đúng hình quy định của hạng xe sát hạch.\n2. Bánh xe trước và bánh xe sau bên lái phụ qua vùng giới hạn của hình vệt bánh xe.\n3. Bánh xe không đẻ vào cạch giới hạn hình sát hạch.\n4. Hoàn thành bài sát hạch trong thời gian 2 phút.\n5. Luôn giữ cho động cơ hoạt động liên tục.\n6. Giữ tốc độ động cơ ( vòng tua ) không quá 4000 vòng/phút.\n7. Tốc độ xe chạy không quá 24 km/h.\n\nHướng dẫn cách thi:\n\n\t Sau khi đi qua hàng đinh, bạn thấy người ngang với vỉa ba-toa vuông góc bên trái thì đánh hết lái sang trái. Đi từ từ và trả lái, đến khi người ngang với vía ba-toa vuông góc bên phải thì lại đánh hết lái sang phải. Qua khói điểm vuông góc thứ hai, nhớ trả lái cho xe thắng."
    },
    {
        key: "6",
        name: "Bài 5. Qua ngã tư có tín hiệu đèn giao thông",
        content: "Các yêu cầu bài thi:\n\n1.Chấp hành theo tín hiệu đèn điều khiển giao thông.\n2. Dừng xe cách vạch dừng quy định không quá 500mm.\n3. Bật đèn xi nhan trái khi rẽ trái.\n4. Bật đèn xi nhan phải khi rẽ phải.\n5. Xe qua ngã tư trong thời gian 20 giây.\n6. Lái xe qua ngã tư không vi phạm quy tảo giao thông.\n7. Giữ động cơ hoạt động liên tục.\n8. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n9. Tốc độ xe chạy không quá 24 km/h.\n\nHướng dẫn cách thi:\n\n\t Bài này tương đối đơn giản, bạn chỉ giữ chân ga cho xe chạy chậm chậm và để ý tín hiệu giao thông, khi thấy đèn giao thông bậc lên màu đó thì bạn rà chân phân cho xe chạy chậm lại và canh khoảng cách đầu xe và vạch dừng xe 500mm thì bạn đạp phạm nhé !\n\tKhi tín hiệu đèn giao thông chuyển sang màu xanh thì bạn nhả chân phanh ra và rà vào chân ga từ từ cho xe chuyển động qua vạch là hoàn thành bài thi này."
    },
    {
        key: "7",
        name: "Bài 6. Qua đường vòng quanh co",
        content: "Các yêu cầu bài thi.\n\n1.Đi đúng hình quy định của hạng xe sát hạch.\n2. Bánh xe không đẻ vào vạch giới hạn hình sát hạch.\n3. Hoàn thành bài sát hạch trong thời gian 2 phút.\n4. Giữ động cơ hoạt động liên tục.\n5. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n6. Tốc độ xe chạy không quá 24 km/h.\n\nHướng dẫn cách thi:\n\n\t Bài thi này là hình chữ S là đường cong liên tục nên bạn phải điều chỉnh tay lái theo đường cong. Các lái xe có câu “Tiến bám lưng, lùi bám bụng\", có nghĩa là khi xe vào đường cua (ôm cua) nên căn theo phía đường cong dài hơn. Như vậy, khi vào đường chữ 8, bạn cho xe bám sát về bên phải, đánh lái sang trái cho xe đi nửa vòng cua đầu tiên, sau đó lại bám sang lề đường bên trái, trả lái và đánh lái sang phải cho xe qua nốt nửa vòng cua còn lại."
    },
    {
        key: "8",
        name: "Bài 7. Ghép xe dọc vào nơi đỗ",
        content: "Các yêu cầu bài thi:\n\n1.Đi đúng hình quy định của hạng xe sát hạch.\n2. Bánh xe không đè vào vạch giới hạn hình sát hạch.\n3. Giữ động cơ hoạt động liên tục.\n4. Hoàn thành bài sát hạch trong thời gian 2 phút.\n5. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n6. Tốc độ xe chạy không quá 24km/h.\n\nHướng dẫn cách thi:\n\n\t Nhiều người sợ bài này vì không biết lúc nào nên đánh lái sang trái để xe vào đúng cửa chuồng. Do vậy, bạn phải chỉnh gương sao cho nhìn được chỗ bánh sau bên trái xe tiếp xúc với mặt đất. Lùi thắng xe cho đến khi thấy chõ bánh sau này cắt ngang đường vạch trắng bên trong chuồng kéo dài ra thì đánh hết lái sang trái, nhiều khả năng xe sẽ vào đúng cửa chuồng.\n\t Còn nếu không, ngay từ khi xe bắt đầu lùi, bạn đã đánh lái sang trái một chút. Khi xe lùi một đoạn, vào gần cửa chuồng hơn thì nhìn qua gương, bạn có thể hình dung vị trí tương đối của xe so với cửa chuồng, từ đó quyết định lùi thắng tiếp, đánh thêm lái sang trái hoặc sang phải.\n\t Khi xe đã vào đến cửa chuồng và thân xe song song với hai bên chuồng, trả lái sang phải cho bánh. Nhiều người sợ bài này vì không biết lúc nào nên đánh lái sang trái để xe vào đúng cửa chuồng. Do vậy, bạn phải chỉnh gương sao cho nhìn được chỗ bánh sau bên trái xe tiếp xúc với mặt đất. Lùi thắng xe cho đến khi thấy chỗ bánh sau này cắt ngang đường vạch trắng bên trong chuồng kéo dài ra thì đánh hết lái sang trái, nhiều khả năng xe sẽ vào đúng cửa chuồng.\n\t Lưu ý khi tiến ra, người phải ra khói cửa chuồng hoặc hơn một chút nữa bạn hãy đánh lái rẽ sang phải để tránh trường hợp bánh sau chưa ra khói cứa chuồng mà đã rẻ sẽ bị chèn vạch, trừ điểm. "
    },
    {
        key: "9",
        name: "Bài 8. Ghép xe ngang vào nơi đỗ",
        content: "Các yêu cầu bài thi:\n\n1.Đi đúng hình quy định của hạng xe sát hạch.\n2. Bánh xe không đẻ vào vạch giới hạn hình sát hạch.\n3. Giữ động cơ hoạt động liên tục.\n4. Hoàn thành bài sát hạch trong thời gian 2 phút.\n5. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n6. Tốc độ xe chạy không quá 24km/h."
    },
    {
        key: "10",
        name: "Bài 9. Tạm dừng ở chỗ có đường sắt chạy qua",
        content: "Các yêu cầu bài thi:\n\n1.Dừng xe cách vạch dừng quy định không quá 500mm.\n2. Giữ động cơ hoạt động liên tục.\n3. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n4. Lái xe theo quy tăc giao thông đường bộ.\n5. Tốc độ xe chạy không quá 24 km/h."
    },
    {
        key: "11",
        name: "Bài 10. Thay đổi số trên đường thắng",
        content: "Các yêu cầu bài thi:\n\n1.Trên quãng đường 25m kế từ khi bắt đầu vào bài sát hạch phải thay đổi số và tốc độ như sau :\na) Đối với xe hạng B : từ số 1 lên số 2 và trên 24 km/h.\nb) Đối với xe hạng D : từ số 1 lên số 2 và trên 24 km/h.\nc) Đối với xe hạng C,E : từ số 2 lên số 3 và trên 20 km/h.\n2. Trên quãng đường 25m còn lại của bài sát hạch phải thay đổi số và tốc độ ngược lại.\n3. Hoàn thành bài sát hạch trong thời gian 2 phút.\n4. Lái xe theo quy tắc giao thông đường bộ.\n5. Giữ động cơ hoạt động liên tục.\n6. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n\nHướng dẫn cách thi:\n\n\t Sau khi qua nơi giao nhau với đường sắt, bạn rẽ sang đường chuẩn bị tăng tốc. Chỉnh lái cho xe thắng, giữ chắc tay lái, nhả hết côn, phanh. Nhãn ga để xe tăng tốc. Qua biến \"Tăng số, tăng tốc\", bàn đạp côn, vào số 2. Xong nhả côn ra, lại nhân ga tiếp. Qua biến 20 màu xanh, đạp cả côn và phanh cho xe đi chậm lại, thậm chỉ dừng hắn, về số 1.Nhà phanh, rồi nhà công tử từ để xe đi qua biến 20 màu trảng.\n\t Chú ý là bạn không thể cắt côn để xe trôi từ từ qua biến 20 màu trắng, vì yêu cầu ở đây là bạn phải đi qua biển này khi xe có gài số. Vì thế nếu bạn cất côn làm bánh răng số không quay thì sẽ bị trừ 5 điểm. "
    },
    {
        key: "12",
        name: "Bài 11. Kết thúc của 11 bài thực hành sa hình",
        content: "Các yêu cầu bài thi:\n\n1.Bật đèn xi nhan phải khi xe qua vạch kết thúc.\n2. Lái xe qua vạch kết thúc.\n3. Giữ tốc độ động cơ không quá 4000 vòng/phút.\n4. Giữ động cơ hoạt động liên tục.\n5. Tốc độ xe chạy không quá 24 km/h đối với hạng B,D . Tốc độ xe chạy không quá 20 km/h đối với hạng C,E."
    }
]



export default class Practive extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <List.Section>
                    <FlatList
                        data={dataPractive}
                        renderItem={({ item }) =>
                            <List.Accordion style={{ backgroundColor: '#66bb6a', marginHorizontal: 10, marginVertical: 5, padding: 5 }}
                                titleStyle={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}
                                title={item.name}
                                un
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
