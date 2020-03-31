import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:"#BDBDBD"}}>
               <View style={styles.Lythuyet}> 
                    <View style={{alignItems:"center",marginTop:20,marginBottom:20}}>
                        <Text style={{fontSize:20}}>
                            Luật
                        </Text >
                        <Text style={{fontSize:20}}>Giao thông đường bộ</Text>
                    </View>
                    <Text style={{flex:1,paddingLeft:10,paddingTop:10,paddingBottom:5,fontSize:17,color:"#0101DF"}}> Điều 9. Quy tắc chung

1. Người tham gia giao thông phải đi bên phải theo chiều đi của mình, đi đúng làn đường, phần đường quy định và phải chấp hành hệ thống báo hiệu đường bộ.

2. Xe ô tô có trang bị dây an toàn thì người lái xe và người ngồi hàng ghế phía trước trong xe ô tô phải thắt dây an toàn.

Điều 10. Hệ thống báo hiệu đường bộ

1. Hệ thống báo hiệu đường bộ gồm hiệu lệnh của người điều khiển giao thông; tín hiệu đèn giao thông, biển báo hiệu, vạch kẻ đường, cọc tiêu hoặc tường bảo vệ, rào chắn.

2. Hiệu lệnh của người điều khiển giao thông quy định như sau:

a) Tay giơ thẳng đứng để báo hiệu cho người tham gia giao thông ở các hướng dừng lại;

b) Hai tay hoặc một tay dang ngang để báo hiệu cho người tham gia giao thông ở phía trước và ở phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái của người điều khiển giao thông được đi;

c) Tay phải giơ về phía trước để báo hiệu cho người tham gia giao thông ở phía sau và bên phải người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía trước người điều khiển giao thông được rẽ phải; người tham gia giao thông ở phía bên trái người điểu khiển giao thông được đi tất cả các hướng; người đi bộ qua đường phải đi sau lưng người điều khiển giao thông.

3. Tín hiệu đèn giao thông có ba mầu, quy định như sau:

a) Tín hiệu xanh là được đi;

b) Tín hiệu đỏ là cấm đi;

c) Tín hiệu vàng là phải dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp; trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường.

4. Biển báo hiệu đường bộ gồm năm nhóm, quy định như sau:

a) Biển báo cấm để biểu thị các điều cấm;

b) Biển báo nguy hiểm để cảnh báo các tình huống nguy hiểm có thể xảy ra;

c) Biển hiệu lệnh để báo các hiệu lệnh phải thi hành;

d) Biển chỉ dẫn để chỉ dẫn hướng đi hoặc các điều cần biết;

đ) Biển phụ để thuyết minh bổ sung các loại biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển chỉ dẫn.

5. Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.

6. Cọc tiêu hoặc tường bảo vệ được đặt ở mép các đoạn đường nguy hiểm để hướng dẫn cho người tham gia giao thông biết phạm vi an toàn của nền đường và hướng đi của đường.

7. Rào chắn được đặt ở nơi đường bị thắt hẹp, đầu cầu, đầu cống, đầu đoạn đường cấm, đường cụt không cho xe, người qua lại hoặc đặt ở những nơi cần điều khiển, kiểm soát sự đi lại.

8. Bộ trưởng Bộ Giao thông vận tải quy định cụ thể về báo hiệu đường bộ.

Điều 11. Chấp hành báo hiệu đường bộ

1. Người tham gia giao thông phải chấp hành hiệu lệnh và chỉ dẫn của hệ thống báo hiệu đường bộ.

2. Khi có người điều khiển giao thông thì người tham gia giao thông phải chấp hành hiệu lệnh của người điều khiển giao thông.

3. Tại nơi có biển báo hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phải chấp hành hiệu lệnh của báo hiệu tạm thời.

4. Tại nơi có vạch kẻ đường dành cho người đi bộ, người điều khiển phương tiện phải quan sát, giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường.

Những nơi không có vạch kẻ đường cho người đi bộ, người điều khiển phương tiện phải quan sát, nếu thấy người đi bộ, xe lăn của người khuyết tật đang qua đường thì phải giảm tốc độ, nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường bảo đảm an toàn.

Điều 12. Tốc độ xe và khoảng cách giữa các xe

1. Người lái xe, người điều khiển xe máy chuyên dùng phải tuân thủ quy định về tốc độ xe chạy trên đường và phải giữ một khoảng cách an toàn đối với xe chạy liền trước xe của mình; ở nơi có biển báo "Cự ly tối thiểu giữa hai xe" phải giữ khoảng cách không nhỏ hơn số ghi trên biển báo.

2. Bộ trưởng Bộ Giao thông vận tải quy định về tốc độ xe và việc đặt biển báo tốc độ; tổ chức thực hiện đặt biển báo tốc độ trên các tuyến quốc lộ.

3. Chủ tịch Uỷ ban nhân dân cấp tỉnh tổ chức thực hiện việc đặt biển báo tốc độ trên các tuyến đường do địa phương quản lý.

Điều 13. Sử dụng làn đường

1. Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn đường phải có tín hiệu báo trước và phải bảo đảm an toàn.

2. Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.

3. Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi về bên phải.

Điều 14. Vượt xe

1. Xe xin vượt phải có báo hiệu bằng đèn hoặc còi; trong đô thị và khu đông dân cư từ 22 giờ đến 5 giờ chỉ được báo hiệu xin vượt bằng đèn.

2. Xe xin vượt chỉ được vượt khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải.

3. Khi có xe xin vượt, nếu đủ điều kiện an toàn, người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại đối với xe xin vượt.

4. Khi vượt, các xe phải vượt về bên trái, trừ các trường hợp sau đây thì được phép vượt bên phải:

a) Khi xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái;

b) Khi xe điện đang chạy giữa đường;

c) Khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái được.

5. Không được vượt xe khi có một trong các trường hợp sau đây:

a) Không bảo đảm các điều kiện quy định tại khoản 2 Điều này;

b) Trên cầu hẹp có một làn xe;

c) Đường vòng, đầu dốc và các vị trí có tầm nhìn hạn chế;

d) Nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt;

đ) Khi điều kiện thời tiết hoặc đường không bảo đảm an toàn cho việc vượt;

e) Xe được quyền ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ.

Điều 15. Chuyển hướng xe

1. Khi muốn chuyển hướng, người điều khiển phương tiện phải giảm tốc độ và có tín hiệu báo hướng rẽ.

2. Trong khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải nhường quyền đi trước cho người đi bộ, người đi xe đạp đang đi trên phần đường dành riêng cho họ, nhường đường cho các xe đi ngược chiều và chỉ cho xe chuyển hướng khi quan sát thấy không gây trở ngại hoặc nguy hiểm cho người và phương tiện khác.

3. Trong khu dân cư, người lái xe, người điều khiển xe máy chuyên dùng chỉ được quay đầu xe ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.

4. Không được quay đầu xe ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm, trong hầm đường bộ, đường cao tốc, tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất.

Điều 16. Lùi xe

1. Khi lùi xe, người điều khiển phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi.

2. Không được lùi xe ở khu vực cấm dừng, trên phần đường dành cho người đi bộ qua đường, nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.

Điều 17. Tránh xe đi ngược chiều

1. Trên đường không phân chia thành hai chiều xe chạy riêng biệt, hai xe đi ngược chiều tránh nhau, người điều khiển phải giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.

2. Các trường hợp nhường đường khi tránh nhau quy định như sau:

a) Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi;

b) Xe xuống dốc phải nhường đường cho xe đang lên dốc;

c) Xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước.

3. Xe cơ giới đi ngược chiều gặp nhau không được dùng đèn chiếu xa.

Điều 18. Dừng xe, đỗ xe trên đường bộ

1. Dừng xe là trạng thái đứng yên tạm thời của phương tiện giao thông trong một khoảng thời gian cần thiết đủ để cho người lên, xuống phương tiện, xếp dỡ hàng hóa hoặc thực hiện công việc khác.

2. Đỗ xe là trạng thái đứng yên của phương tiện giao thông không giới hạn thời gian.

3. Người điều khiển phương tiện khi dừng xe, đỗ xe trên đường bộ phải thực hiện quy định sau đây:

a) Có tín hiệu báo cho người điều khiển phương tiện khác biết;

b) Cho xe dừng, đỗ ở nơi có lề đường rộng hoặc khu đất ở bên ngoài phần đường xe chạy; trường hợp lề đường hẹp hoặc không có lề đường thì phải cho xe dừng, đỗ sát mép đường phía bên phải theo chiều đi của mình;

c) Trường hợp trên đường đã xây dựng nơi dừng xe, đỗ xe hoặc quy định các điểm dừng xe, đỗ xe thì phải dừng, đỗ xe tại các vị trí đó;

d) Sau khi đỗ xe, chỉ được rời khỏi xe khi đã thực hiện các biện pháp an toàn; nếu xe đỗ chiếm một phần đường xe chạy phải đặt ngay biển báo hiệu nguy hiểm ở phía trước và phía sau xe để người điều khiển phương tiện khác biết;

đ) Không mở cửa xe, để cửa xe mở hoặc bước xuống xe khi chưa bảo đảm điều kiện an toàn;

e) Khi dừng xe, không được tắt máy và không được rời khỏi vị trí lái;

g) Xe đỗ trên đoạn đường dốc phải được chèn bánh.

4. Người điều khiển phương tiện không được dừng xe, đỗ xe tại các vị trí sau đây:

a) Bên trái đường một chiều;

b) Trên các đoạn đường cong và gần đầu dốc tầm nhìn bị che khuất;

c) Trên cầu, gầm cầu vượt;

d) Song song với một xe khác đang dừng, đỗ;

đ) Trên phần đường dành cho người đi bộ qua đường;

e) Nơi đường giao nhau và trong phạm vi 5 mét tính từ mép đường giao nhau;

g) Nơi dừng của xe buýt;

h) Trước cổng và trong phạm vi 5 mét hai bên cổng trụ sở cơ quan, tổ chức;

i) Tại nơi phần đường có bề rộng chỉ đủ cho một làn xe;

k) Trong phạm vi an toàn của đường sắt;

l) Che khuất biển báo hiệu đường bộ.

Điều 19. Dừng xe, đỗ xe trên đường phố

Người điều khiển phương tiện khi dừng xe, đỗ xe trên đường phố phải tuân theo quy định tại Điều 18 của Luật này và các quy định sau đây:

1. Phải cho xe dừng, đỗ sát theo lề đường, hè phố phía bên phải theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, hè phố quá 0,25 mét và không gây cản trở, nguy hiểm cho giao thông. Trường hợp đường phố hẹp, phải dừng xe, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường tối thiểu 20 mét.

2. Không được dừng xe, đỗ xe trên đường xe điện, trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước. Không được để phương tiện giao thông ở lòng đường, hè phố trái quy định.

Điều 20. Xếp hàng hóa trên phương tiện giao thông đường bộ

1. Hàng hóa xếp trên xe phải gọn gàng, chằng buộc chắc chắn, không để rơi vãi dọc đường, không kéo lê hàng hóa trên mặt đường và không cản trở việc điều khiển xe.

2. Khi xếp hàng hóa vượt phía trước và phía sau xe thì ban ngày phải có cờ báo hiệu màu đỏ, ban đêm hoặc khi trời tối phải có đèn đỏ báo hiệu.

3. Bộ trưởng Bộ Giao thông vận tải quy định cụ thể việc xếp hàng hóa trên phương tiện giao thông đường bộ.

Điều 21. Trường hợp chở người trên xe ô tô chở hàng

1. Chỉ được chở người trên xe ô tô chở hàng trong các trường hợp sau đây:

a) Chở người đi làm nhiệm vụ phòng, chống thiên tai hoặc thực hiện nhiệm vụ khẩn cấp; chở cán bộ, chiến sĩ của lực lượng vũ trang nhân dân đi làm nhiệm vụ; chở người bị nạn đi cấp cứu;

b) Chở công nhân duy tu, bảo dưỡng đường bộ; chở người đi thực hành lái xe trên xe tập lái; chở người diễu hành theo đoàn;

c) Giải tỏa người ra khỏi khu vực nguy hiểm hoặc trong trường hợp khẩn cấp khác theo quy định của pháp luật.

2. Xe ô tô chở người trong các trường hợp quy định tại khoản 1 Điều này phải có thùng cố định, bảo đảm an toàn khi tham gia giao thông.

Điều 22. Quyền ưu tiên của một số loại xe

1. Những xe sau đây được quyền ưu tiên đi trước xe khác khi qua đường giao nhau từ bất kỳ hướng nào tới theo thứ tự:

a) Xe chữa cháy đi làm nhiệm vụ;

b) Xe quân sự, xe công an đi làm nhiệm vụ khẩn cấp, đoàn xe có xe cảnh sát dẫn đường;

c) Xe cứu thương đang thực hiện nhiệm vụ cấp cứu;

d) Xe hộ đê, xe đi làm nhiệm vụ khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật;

đ) Đoàn xe tang.

2. Xe quy định tại các điểm a, b, c và d khoản 1 Điều này khi đi làm nhiệm vụ phải có tín hiệu còi, cờ, đèn theo quy định; không bị hạn chế tốc độ; được phép đi vào đường ngược chiều, các đường khác có thể đi được, kể cả khi có tín hiệu đèn đỏ và chỉ phải tuân theo chỉ dẫn của người điều khiển giao thông.

Chính phủ quy định cụ thể tín hiệu của xe được quyền ưu tiên.

3. Khi có tín hiệu của xe được quyền ưu tiên, người tham gia giao thông phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường. Không được gây cản trở xe được quyền ưu tiên.

Điều 23. Qua phà, qua cầu phao

1. Khi đến bến phà, cầu phao, các xe phải xếp hàng trật tự, đúng nơi quy định, không làm cản trở giao thông.

2. Khi xuống phà, đang ở trên phà và khi lên bến, mọi người phải xuống xe, trừ người điều khiển xe cơ giới, xe máy chuyên dùng, người bệnh, người già yếu và người khuyết tật.

3. Xe cơ giới, xe máy chuyên dùng phải xuống phà trước, xe thô sơ, người đi bộ xuống phà sau; khi lên bến, người đi bộ lên trước, các phương tiện giao thông lên sau theo hướng dẫn của người điều khiển giao thông.

4. Thứ tự ưu tiên qua phà, qua cầu phao quy định như sau:

a) Các xe được quyền ưu tiên quy định tại khoản 1 Điều 22 của Luật này;

b) Xe chở thư báo;

c) Xe chở thực phẩm tươi sống;

d) Xe chở khách công cộng.

Trong trường hợp các xe cùng loại ưu tiên đến bến phà, cầu phao thì xe nào đến trước được qua trước.

Điều 24. Nhường đường tại nơi đường giao nhau

Khi đến gần đường giao nhau, người điều khiển phương tiện phải cho xe giảm tốc độ và nhường đường theo quy định sau đây:

1. Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, phải nhường đường cho xe đi đến từ bên phải;

2. Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, phải nhường đường cho xe đi bên trái;

3. Tại nơi đường giao nhau giữa đường không ưu tiên và đường ưu tiên hoặc giữa đường nhánh và đường chính thì xe đi từ đường không ưu tiên hoặc đường nhánh phải nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới.

Điều 25. Đi trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt

1. Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt, phương tiện giao thông đường sắt được quyền ưu tiên đi trước.

2. Tại nơi đường bộ giao nhau cùng mức với đường sắt có đèn tín hiệu, rào chắn và chuông báo hiệu, khi đèn tín hiệu mầu đỏ đã bật sáng, có tiếng chuông báo hiệu, rào chắn đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải dừng lại phía phần đường của mình và cách rào chắn một khoảng cách an toàn; khi đèn tín hiệu đã tắt, rào chắn mở hết, tiếng chuông báo hiệu ngừng mới được đi qua.

3. Tại nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông báo hiệu, khi đèn tín hiệu mầu đỏ đã bật sáng hoặc có tiếng chuông báo hiệu, người tham gia giao thông đường bộ phải dừng ngay lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất; khi đèn tín hiệu đã tắt hoặc tiếng chuông báo hiệu ngừng mới được đi qua.

4. Tại nơi đường bộ giao nhau cùng mức với đường sắt không có đèn tín hiệu, rào chắn và chuông báo hiệu, người tham gia giao thông đường bộ phải quan sát cả hai phía, khi thấy chắc chắn không có phương tiện đường sắt đang đi tới mới được đi qua, nếu thấy có phương tiện đường sắt đang đi tới thì phải dừng lại và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất và chỉ khi phương tiện đường sắt đã đi qua mới được đi.

5. Khi phương tiện tham gia giao thông đường bộ bị hư hỏng tại nơi đường bộ giao nhau cùng mức với đường sắt hoặc trong phạm vi an toàn đường sắt thì người điều khiển phương tiện phải bằng mọi cách nhanh nhất đặt báo hiệu trên đường sắt cách tối thiểu 500 mét về hai phía để báo cho người điều khiển phương tiện đường sắt và tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất, đồng thời phải bằng mọi biện pháp nhanh chóng đưa phương tiện ra khỏi phạm vi an toàn đường sắt.

6. Những người có mặt tại nơi phương tiện tham gia giao thông đường bộ bị hư hỏng trên đoạn đường bộ giao nhau cùng mức với đường sắt có trách nhiệm giúp đỡ người điều khiển phương tiện đưa phương tiện ra khỏi phạm vi an toàn đường sắt.

Điều 26. Giao thông trên đường cao tốc

1. Người lái xe, người điều khiển xe máy chuyên dùng trên đường cao tốc ngoài việc tuân thủ các quy tắc giao thông quy định tại Luật này còn phải thực hiện các quy định sau đây:

a) Khi vào đường cao tốc phải có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường, khi thấy an toàn mới cho xe nhập vào dòng xe ở làn đường sát mép ngoài, nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi vào làn đường của đường cao tốc;

b) Khi ra khỏi đường cao tốc phải thực hiện chuyển dần sang làn đường phía bên phải, nếu có làn đường giảm tốc thì phải cho xe chạy trên làn đường đó trước khi rời khỏi đường cao tốc;

c) Không được cho xe chạy ở làn dừng xe khẩn cấp và phần lề đường;

d) Không được cho xe chạy quá tốc độ tối đa và dưới tốc độ tối thiểu ghi trên biển báo hiệu, sơn kẻ trên mặt đường.

2. Người lái xe, người điều khiển xe máy chuyên dùng phải cho xe chạy cách nhau một khoảng cách an toàn ghi trên biển báo hiệu.

3. Chỉ được dừng xe, đỗ xe ở nơi quy định; trường hợp buộc phải dừng xe, đỗ xe không đúng nơi quy định thì người lái xe phải đưa xe ra khỏi phần đường xe chạy, nếu không thể được thì phải báo hiệu để người lái xe khác biết.

4. Người đi bộ, xe thô sơ, xe gắn máy, xe mô tô và máy kéo; xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn 70 km/h không được đi vào đường cao tốc, trừ người, phương tiện, thiết bị phục vụ việc quản lý, bảo trì đường cao tốc.

Điều 27. Giao thông trong hầm đường bộ

Người điều khiển phương tiện trong hầm đường bộ ngoài việc tuân thủ các quy tắc giao thông quy định tại Luật này còn phải thực hiện các quy định sau đây:

1. Xe cơ giới, xe máy chuyên dùng phải bật đèn; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu;

2. Chỉ được dừng xe, đỗ xe ở nơi quy định.

Điều 28. Tải trọng và khổ giới hạn của đường bộ

1. Người điều khiển phương tiện phải tuân thủ các quy định về tải trọng, khổ giới hạn của đường bộ và chịu sự kiểm tra của cơ quan có thẩm quyền.

2. Trường hợp đặc biệt, xe quá tải trọng, quá khổ giới hạn của đường bộ, xe bánh xích gây hư hại mặt đường có thể được lưu hành trên đường nhưng phải được cơ quan quản lý đường bộ có thẩm quyền cấp giấy phép và phải thực hiện các biện pháp bắt buộc để bảo vệ đường bộ, bảo đảm an toàn giao thông.

3. Bộ trưởng Bộ Giao thông vận tải quy định về tải trọng, khổ giới hạn của đường bộ và công bố về tải trọng, khổ giới hạn của quốc lộ; quy định việc cấp giấy phép lưu hành cho xe quá tải trọng, quá khổ giới hạn của đường bộ, xe bánh xích gây hư hại mặt đường.

4. Chủ tịch Uỷ ban nhân dân cấp tỉnh công bố về tải trọng, khổ giới hạn của đường bộ do địa phương quản lý.

Điều 29. Xe kéo xe và xe kéo rơ moóc

1. Một xe ô tô chỉ được kéo theo một xe ô tô hoặc xe máy chuyên dùng khác khi xe này không tự chạy được và phải bảo đảm các quy định sau đây:

a) Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực;

b) Việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng;

c) Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu.

2. Xe kéo rơ moóc phải có tổng trọng lượng lớn hơn tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.

3. Không được thực hiện các hành vi sau đây:

a) Xe kéo rơ moóc, xe kéo sơ mi rơ moóc kéo thêm rơ moóc hoặc xe khác;

b) Chở người trên xe được kéo;

c) Kéo theo xe thô sơ, xe gắn máy, xe mô tô.

Điều 30. Người điều khiển, người ngồi trên xe mô tô, xe gắn máy

1. Người điều khiển xe mô tô hai bánh, xe gắn máy chỉ được chở một người, trừ những trường hợp sau thì được chở tối đa hai người:

a) Chở người bệnh đi cấp cứu;

b) Áp giải người có hành vi vi phạm pháp luật;

c) Trẻ em dưới 14 tuổi.

2. Người điều khiển, người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải đội mũ bảo hiểm có cài quai đúng quy cách.

3. Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi sau đây:

a) Đi xe dàn hàng ngang;

b) Đi xe vào phần đường dành cho người đi bộ và phương tiện khác;

c) Sử dụng ô, điện thoại di động, thiết bị âm thanh, trừ thiết bị trợ thính;

d) Sử dụng xe để kéo, đẩy xe khác, vật khác, mang, vác và chở vật cồng kềnh;

đ) Buông cả hai tay hoặc đi xe bằng một bánh đối với xe hai bánh, bằng hai bánh đối với xe ba bánh;

e) Hành vi khác gây mất trật tự, an toàn giao thông.

4. Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện các hành vi sau đây:

a) Mang, vác vật cồng kềnh;

b) Sử dụng ô;

c) Bám, kéo hoặc đẩy các phương tiện khác;

d) Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái;

đ) Hành vi khác gây mất trật tự, an toàn giao thông.

Điều 31. Người điều khiển, người ngồi trên xe đạp, người điều khiển xe thô sơ khác

1. Người điều khiển xe đạp chỉ được chở một người, trừ trường hợp chở thêm một trẻ em dưới 7 tuổi thì được chở tối đa hai người.

Người điều khiển xe đạp phải thực hiện quy định tại khoản 3 Điều 30 của Luật này; người ngồi trên xe đạp khi tham gia giao thông phải thực hiện quy định tại khoản 4 Điều 30 của Luật này.

2. Người điều khiển, người ngồi trên xe đạp máy phải đội mũ bảo hiểm có cài quai đúng quy cách.

3. Người điều khiển xe thô sơ khác phải cho xe đi hàng một, nơi có phần đường dành cho xe thô sơ thì phải đi đúng phần đường quy định; khi đi ban đêm phải có báo hiệu ở phía trước và phía sau xe. Người điều khiển xe súc vật kéo phải có biện pháp bảo đảm vệ sinh trên đường.

4. Hàng hóa xếp trên xe thô sơ phải bảo đảm an toàn, không gây cản trở giao thông và che khuất tầm nhìn của người điều khiển.

Điều 32. Người đi bộ

1. Người đi bộ phải đi trên hè phố, lề đường; trường hợp đường không có hè phố, lề đường thì người đi bộ phải đi sát mép đường.

2. Người đi bộ chỉ được qua đường ở những nơi có đèn tín hiệu, có vạch kẻ đường hoặc có cầu vượt, hầm dành cho người đi bộ và phải tuân thủ tín hiệu chỉ dẫn.

3. Trường hợp không có đèn tín hiệu, không có vạch kẻ đường, cầu vượt, hầm dành cho người đi bộ thì người đi bộ phải quan sát các xe đang đi tới, chỉ qua đường khi bảo đảm an toàn và chịu trách nhiệm bảo đảm an toàn khi qua đường.

4. Người đi bộ không được vượt qua dải phân cách, không đu bám vào phương tiện giao thông đang chạy; khi mang vác vật cồng kềnh phải bảo đảm an toàn và không gây trở ngại cho người và phương tiện tham gia giao thông đường bộ.

5. Trẻ em dưới 7 tuổi khi đi qua đường đô thị, đường thường xuyên có xe cơ giới qua lại phải có người lớn dắt; mọi người có trách nhiệm giúp đỡ trẻ em dưới 7 tuổi khi đi qua đường.

Điều 33. Người khuyết tật, người già yếu tham gia giao thông

1. Người khuyết tật sử dụng xe lăn không có động cơ được đi trên hè phố và nơi có vạch kẻ đường dành cho người đi bộ.

2. Người khiếm thị khi đi trên đường bộ phải có người dắt hoặc có công cụ để báo hiệu cho người khác nhận biết đó là người khiếm thị.

3. Mọi người có trách nhiệm giúp đỡ người khuyết tật, người già yếu khi đi qua đường.

Điều 34. Người dẫn dắt súc vật đi trên đường bộ

1. Người dẫn dắt súc vật đi trên đường bộ phải cho súc vật đi sát mép đường và bảo đảm vệ sinh trên đường; trường hợp cần cho súc vật đi ngang qua đường thì phải quan sát và chỉ được đi qua đường khi có đủ điều kiện an toàn.

2. Không được dẫn dắt súc vật đi vào phần đường dành cho xe cơ giới.

Điều 35. Các hoạt động khác trên đường bộ

1. Tổ chức hoạt động văn hóa, thể thao, diễu hành, lễ hội trên đường bộ thực hiện theo quy định sau đây:

a) Cơ quan, tổ chức có nhu cầu sử dụng đường bộ để tiến hành hoạt động văn hóa, thể thao, diễu hành, lễ hội phải được cơ quan quản lý đường bộ có thẩm quyền thống nhất bằng văn bản về phương án bảo đảm giao thông trước khi xin phép tổ chức các hoạt động trên theo quy định của pháp luật;

b) Trường hợp cần hạn chế giao thông hoặc cấm đường thì cơ quan quản lý đường bộ phải ra thông báo phương án phân luồng giao thông; cơ quan, tổ chức có nhu cầu sử dụng đường bộ quy định tại điểm a khoản 1 Điều này phải thực hiện việc đăng tải thông báo trên các phương tiện thông tin đại chúng và thực hiện các biện pháp bảo đảm trật tự, an toàn cho người và phương tiện tham gia giao thông đường bộ;

c) Ủy ban nhân dân nơi tổ chức hoạt động văn hóa, thể thao, diễu hành, lễ hội có trách nhiệm chỉ đạo cơ quan chức năng của địa phương tổ chức việc phân luồng, bảo đảm giao thông tại khu vực diễn ra hoạt động văn hóa, thể thao, diễu hành, lễ hội.

2. Không được thực hiện các hành vi sau đây:

a) Họp chợ, mua, bán hàng hóa trên đường bộ;

b) Tụ tập đông người trái phép trên đường bộ;

c) Thả rông súc vật trên đường bộ;

d) Phơi thóc, lúa, rơm rạ, nông sản hoặc để vật khác trên đường bộ;

đ) Đặt biển quảng cáo trên đất của đường bộ;

e) Lắp đặt biển hiệu, biển quảng cáo hoặc thiết bị khác làm giảm sự chú ý, gây nhầm lẫn nội dung biển báo hiệu hoặc gây cản trở người tham gia giao thông;

g) Che khuất biển báo hiệu, đèn tín hiệu giao thông;

h) Sử dụng bàn trượt, pa-tanh, các thiết bị tương tự trên phần đường xe chạy;

i) Hành vi khác gây cản trở giao thông.

Điều 36. Sử dụng đường phố và các hoạt động khác trên đường phố

1. Lòng đường và hè phố chỉ được sử dụng cho mục đích giao thông.

2. Các hoạt động khác trên đường phố phải thực hiện theo quy định tại khoản 1 Điều 35 của Luật này, trường hợp đặc biệt, việc sử dụng tạm thời một phần lòng đường, hè phố vào mục đích khác do Ủy ban nhân dân cấp tỉnh quy định nhưng không được làm ảnh hưởng đến trật tự, an toàn giao thông.

3. Không được thực hiện các hành vi sau đây:

a) Các hành vi quy định tại khoản 2 Điều 35 của Luật này;

b) Đổ rác hoặc phế thải không đúng nơi quy định;

c) Xây, đặt bục, bệ trái phép trên đường.

Điều 37. Tổ chức giao thông và điều khiển giao thông

1. Tổ chức giao thông gồm các nội dung sau đây:

a) Phân làn, phân luồng, phân tuyến và quy định thời gian đi lại cho người và phương tiện tham gia giao thông đường bộ;

b) Quy định các đoạn đường cấm đi, đường đi một chiều, nơi cấm dừng, cấm đỗ, cấm quay đầu xe; lắp đặt báo hiệu đường bộ;

c) Thông báo khi có sự thay đổi về việc phân luồng, phân tuyến, thời gian đi lại tạm thời hoặc lâu dài; thực hiện các biện pháp ứng cứu khi có sự cố xảy ra và các biện pháp khác về đi lại trên đường bộ để bảo đảm giao thông thông suốt, an toàn.

2. Trách nhiệm tổ chức giao thông quy định như sau:

a) Bộ trưởng Bộ Giao thông vận tải chịu trách nhiệm tổ chức giao thông trên hệ thống quốc lộ;

b) Chủ tịch Ủy ban nhân dân cấp tỉnh chịu trách nhiệm tổ chức giao thông trên các hệ thống đường bộ thuộc phạm vi quản lý.

3. Trách nhiệm điều khiển giao thông của cảnh sát giao thông như sau:

a) Chỉ huy, điều khiển giao thông trên đường; hướng dẫn, bắt buộc người tham gia giao thông chấp hành quy tắc giao thông;

b) Khi có tình huống gây ách tắc giao thông hoặc có yêu cầu cần thiết khác về bảo đảm an ninh, trật tự được tạm thời đình chỉ đi lại ở một số đoạn đường nhất định, phân lại luồng, phân lại tuyến và nơi tạm dừng xe, đỗ xe.

Điều 38. Trách nhiệm của cá nhân, cơ quan, tổ chức khi xảy ra tai nạn giao thông.

1. Người điều khiển phương tiện và những người liên quan trực tiếp đến vụ tai nạn có trách nhiệm sau đây:

a) Dừng ngay phương tiện; giữ nguyên hiện trường; cấp cứu người bị nạn và phải có mặt khi cơ quan có thẩm quyền yêu cầu;

b) Ở lại nơi xảy ra tai nạn cho đến khi người của cơ quan công an đến, trừ trường hợp người điều khiển phương tiện cũng bị thương phải đưa đi cấp cứu hoặc phải đưa người bị nạn đi cấp cứu hoặc vì lý do bị đe dọa đến tính mạng, nhưng phải đến trình báo ngay với cơ quan công an nơi gần nhất;

c) Cung cấp thông tin xác thực về vụ tai nạn cho cơ quan có thẩm quyền.

2. Những người có mặt tại nơi xảy ra vụ tai nạn có trách nhiệm sau đây:

a) Bảo vệ hiện trường;

b) Giúp đỡ, cứu chữa kịp thời người bị nạn;

c) Báo tin ngay cho cơ quan công an, y tế hoặc Ủy ban nhân dân nơi gần nhất;

d) Bảo vệ tài sản của người bị nạn;

đ) Cung cấp thông tin xác thực về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.

3. Người điều khiển phương tiện khác khi đi qua nơi xảy ra vụ tai nạn có trách nhiệm chở người bị nạn đi cấp cứu. Các xe được quyền ưu tiên, xe chở người được hưởng quyền ưu đãi, miễn trừ ngoại giao, lãnh sự không bắt buộc thực hiện quy định tại khoản này.

4. Cơ quan công an khi nhận được tin về vụ tai nạn có trách nhiệm cử người tới ngay hiện trường để điều tra vụ tai nạn, phối hợp với cơ quan quản lý đường bộ và Ủy ban nhân dân địa phương bảo đảm giao thông thông suốt, an toàn.

5. Ủy ban nhân dân cấp xã nơi xảy ra tai nạn có trách nhiệm kịp thời thông báo cho cơ quan công an, y tế đến để xử lý, giải quyết vụ tai nạn; tổ chức cứu chữa, giúp đỡ người bị nạn, bảo vệ hiện trường, bảo vệ tài sản của người bị nạn; trường hợp có người chết mà không rõ tung tích, không có thân nhân hoặc thân nhân không có khả năng chôn cất thì sau khi cơ quan nhà nước có thẩm quyền đã hoàn tất các công việc theo quy định của pháp luật và đồng ý cho chôn cất, Ủy ban nhân dân cấp xã có trách nhiệm tổ chức chôn cất.

Trường hợp vụ tai nạn vượt quá khả năng giải quyết, Uỷ ban nhân dân cấp xã phải kịp thời báo cáo Uỷ ban nhân dân cấp trên.

6. Bộ Công an có trách nhiệm thống kê, tổng hợp, xây dựng cơ sở dữ liệu thông tin về tai nạn giao thông đường bộ, cung cấp cho cơ quan, tổ chức, cá nhân theo quy định của pháp luật.

</Text>
                   
                </View>
            </ScrollView>
        );
    }
    
   }
   const styles =StyleSheet.create({
       Lythuyet: {
        borderRadius:4,
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        
        backgroundColor:"#FFFFFF",
       },
   })