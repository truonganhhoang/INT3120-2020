import { NativeModules } from "react-native";
var nguyhiem=[
    {
        "Key": "a1",
        "Name":"Đường cao tốc phía trước",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/238-duong-cao-toc-phia-truoc.jpg",
        "Noidung": "Biển số 238 được đặt trên đường nhánh nhập vào đường cao tốc để báo cho các phương tiện đi trên đường này biết có Đường cao tốc phía trước.",
    },
    {
        "Key": "a2",
        "Name":"cầu vồng",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/237-cau-vong.jpg",
        "Noidung": "Dùng để nhắc nhở lái xe lái cho cẩn thận. Biển đặt ở trên đoạn đường sắp đến công trình có độ vồng lớn ảnh hưởng tới tầm nhìn.",
    },
    {
        "Key": "a3",
        "Name":"Hết đường dôi",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/236-het-duong-doi.jpg",
        "Noidung": "Để báo trước sắp kết thúc đoạn đường có chiều đi và chiều về phân biệt bằng giải phân cách cứng phải đặt biển số 236 Hết đường đôi. Đường đôi chỉ được chia bằng vạch sơn không phải đặt biển này.",
    },
    {
        "Key": "a4",
        "Name":"Gió ngang",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/232-gio-ngang.jpg",
        "Noidung": "biển báo trước gần tới đoạn đường thường có gió ngang thổi mạnh gây nguy hiểm phải đặt biển số 232 Gió ngang. Người lái xe cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió thổi mạnh gây lật xe.",
    },
    {
        "Key": "a5",
        "Name":"Nguy hiểm khác",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/233-nguy-hiem-khac.jpg",
        "Noidung": "Nếu trên đường có những nguy hiểm mà không thể vận dụng được các kiểu biển từ biển số 201a đến biển số 232 theo quy định từ phần C.1 đến phần C.32 Phụ lục của QUY CHUẨN KỸ THUẬT QUỐC GIA VỀ BÁO HIỆU ĐƯỜNG BỘ thì phải đặt biển số 233 Nguy hiểm khác",
    },
    {
        "Key": "a6",
        "Name":"Thú rừng vượt qua",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/231-thu-rung-vuot-qua-duong.jpg",
        "Noidung": "Để báo trước gần tới đoạn đường thường có thú rừng qua đường như đường đi qua rừng hay khu vực bảo tồn thiên nhiên cấm săn bắn, phải đặt biển số 231 Thú rừng vượt qua đường. Chiều dài của đoạn đường này được chỉ dẫn bằng biển số 501 Phạm vi tác dụng của biển đặt bên dưới biển chính, người lái xe phải đi chậm, chú ý quan sát hai bên đường và thận trọng đề phòng tai nạn.",
    },
    {
        "Key": "a7",
        "Name":"Gia súc",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/230-gia-suc.jpg",
        "Noidung": "Để báo trước gần tới đoạn đường thường có gia súc thả rông hoặc lùa qua ngang đường, đường ở vùng đồng cỏ của nông trường chăn nuôi, vùng thảo nguyên..., phải đặt biển số 230 Gia súc. Người lái xe có trách nhiệm đi chậm, quan sát và dừng lại bảo đảm cho gia súc có thể qua đường không bị nguy hiểm.",
    },
    {
        "Key": "a8",
        "Name":"Giải máy bay lên xuống",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/229-giai-may-bay-len-xuong.jpg",
        "Noidung": "Để báo trước đoạn đường ở vùng sát đường băng sân bay và cắt ngang qua hướng máy bay lên xuống ở độ cao không lớn, phải đặt biển số 229 Giải máy bay lên xuống. Nếu cần thiết, tại những vị trí này phải điều khiển giao thông bằng tín hiệu cờ và đèn đỏ hoặc hiệu lệnh bằng tay của người chỉ huy giao thông.",
    },
    {
        "Key": "a9",
        "Name":"Sỏi đá bắn lên",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/228c-soi-da-ban-len.jpg",
        "Noidung": "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
    },
    {
        "Key": "a10",
        "Name":"Đá lở",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/228b-da-lo.jpg",
        "Noidung": "ể báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường, đặc biệt là ở những đoạn đường miền núi, phải đặt biển số 228(a,b) Đá lở . Chiều dài của đoạn nguy hiểm, sử dụng biển số 501 Phạm vi tác dung của biển đặt dưới biển chính. Khi sử dụng biển này phải căn cứ thực tế mà đặt biển số 228a hoặc 228b cho phù hợp. Gặp biển này, người lái xe phải chú ý; đặc biệt khi thời tiết xấu, hạn chế tầm nhìn, không dừng hay đỗ xe trong khu vực đá lở sau những trận mưa lớn.",
    },
    {
        "Key": "a11",
        "Name":"Công trường",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/227-cong-truong.jpg",
        "Noidung": "Để báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa, cải tạo, nâng cấp có người và máy móc đang làm việc trên mặt đường, phải đặt biển số 227 báo hiệu Công trường, khi gặp biển báo này tốc độ xe chạy phải giảm cho thích hợp, không gây nguy hiểm cho người và máy móc trên đoạn đường đó.",
    },
    {
        "Key": "a12",
        "Name":"Đương người đi xe đạp cắt ngang",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/226-duong-nguoi-di-xe-dap-cat-ngang.jpg",
        "Noidung": "Để báo trước là gần tới vị trí thường có người đi xe đạp từ những đường nhỏ cắt ngang qua hoặc từ đường dành cho xe đạp đi nhập vào đường ôtô.",
    },
    {
        "Key": "a13",
        "Name":"tre em",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/225-tre-em.jpg",
        "Noidung": "Để báo trước là gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường như ở vườn trẻ, trường học, câu lạc bộ.",
    },
    {
        "Key": "a14",
        "Name":"đường người đi bộ cắt ngang",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/224-duong-nguoi-di-bo-cat-ngang.jpg",
        "Noidung": "Để báo trước sắp tới phần đường dành cho người đi bộ sang qua đường, phải đặt biển số 224 Đường người đi bộ cắt ngang. Gặp biển này các xe phải giảm tốc độ, nhường ưu tiên cho người đi bộ và chỉ được chạy xe khi không gây nguy hiểm cho người đi bộ.",
    },
    {
        "Key": "a15",
        "Name":"Lề đường nguy hiểm ",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/222b-le-duong-nguy-hiem.jpg",
        "Noidung": "Để báo những nơi lề đường không ổn định, khi xe đi vào dễ gây văng đất đá hoặc bánh xe quay tại chỗ.",
    },
    {
        "Key": "a16",
        "Name":"Đường trơn",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/222a-duong-tron.jpg",
        "Noidung": "Để báo trước sắp tới đoạn đường có thể xảy ra trơn trượt đặc biệt là khi thời tiết xấu, mưa phùn (hệ số bám của lốp với mặt đường  < 0,3) cần tránh hãm phanh, tăng ga, sang số đột ngột hoặc xe chạy với tốc độ cao sẽ bị nguy hiểm phải đặt biển số 222a báo hiệu Đường trơn. Khi gặp biển này, tốc độ xe chạy phải giảm phù hợp và người lái xe phải thận trọng.",
    },
    {
        "Key": "a17",
        "Name":"Đường không bằng phẳng",
        "Img": "https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-nguy-hiem/221a-duong-khong-bang-phang.jpg",
        "Noidung": "Để báo trước sắp tới đoạn đường có mặt đường không bằng phẳng, lồi lõm, v.v... xe chạy với tốc độ cao sẽ nguy hiểm, phải đặt biển số 221 (a,b). Biển số 221a Đường có ổ gà, lồi lõm đặt trong trường hợp đường đang tốt, xe chạy nhanh, chuyển sang những đoạn lồi lõm, gập ghềnh, ổ gà, lượn sóng.",
    },
   
];
module.exports = nguyhiem;