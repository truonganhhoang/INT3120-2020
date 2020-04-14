import { NativeModules } from "react-native";
var hieulenh=[
    {
        'key':'b1',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/308b-tuyen-duong-cau-vuot-cat-qua.jpg",
        'Name':"Tuyến đường cầu vượt cắt qua",
        "Noidung":"Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái (hay rẽ phải) phải đặt biển số 308 (a,b) “Tuyến đường cầu vượt cắt ngang”. Biển đặt tại vị trí thích hợp trước cầu vượt để hướng dẫn xe đi thẳng hoặc rẽ trái (hay rẽ phải).",
    },
    {
        "key":'b2',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/308a-tuyen-duong-cau-vuot-cat-qua.jpg",
        'Name':"Tuyến đường cầu vượt cắt qua",
        "Noidung":"Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái (hay rẽ phải) phải đặt biển số 308 (a,b) “Tuyến đường cầu vượt cắt ngang”. Biển đặt tại vị trí thích hợp trước cầu vượt để hướng dẫn xe đi thẳng hoặc rẽ trái (hay rẽ phải)."
    },
    {
        "key":'b3',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/305-duong-danh-cho-nguoi-di-bo.jpg",
        'Name':"Đường dành cho người đi bộ",
        "Noidung":"Để báo đường dành cho người đi bộ phải đặt biển số 305 . Các loại xe cơ giới và thô sơ kể cả các xe được ưu tiên theo quy định không được phép đi vào đường đã đặt biển này, trừ trường hợp đi cắt ngang qua nhưng phải đảm bảo tuyệt đối an toàn cho người đi bộ."
    },
    {
        "key":'b4',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/307-het-han-che-toc-do-toi-thieu.jpg",
        'Name':"Hết hạn chế Tốc đọ tối thiểu",
        "Noidung":"Đến hết đoạn đường hạn chế tốc độ tối thiểu phải đặt biển số 307 Hết hạn chế tốc độ tối thiểu (hoặc đặt biển số 135 Hết tấ t cả các lệnh cấm nếu đồng thời có nhiều biển cấm khác hết tác dụng)."
    },
    {
        "key":'b5',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/306-toc-do-toi-thieu-cho-phep.jpg",
        'Name':"tốc đọ tối thiểu cho phép",
        "Noidung":"Để báo tốc độ tối thiểu cho phép các xe cơ giới chạy, phải đặt biển số 306 Tốc độ tối thiểu cho phép. Biển có hiệu lực cấm các loại xe cơ giới chạy với tốc độ nhỏ hơn trị số ghi trên biển. Các loại xe có tốc độ tối đa theo quy định của nhà sản xuất không đạt tốc độ tối thiểu đã ghi trên biển không được phép đi vào đường này."
    },
    {
        "key":'b6',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/303-noi-giao-nhau-chay-theo-vong-xuyen.jpg",
        'Name':"Nơi giao nhau chạy theo vòng xuyến",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau phải đặt biển số 303 Nơi giao nhau chạy theo vòng xuyến",
    },
    {
        "key":'b7',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/304-duong-danh-cho-xe-tho-so.jpg",
        'Name':"Đường dành cho xe thô xơ",
        "Noidung":"Biển báo đường dành cho xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải đặt biển số 304 Đường dành cho xe thô sơ."
    },{
        "key":'b8',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/302b-huong-phai-di-vong-chuong-ngai-vat.jpg",
        'Name':"Hướng phải đi vòng chướng ngại vật",
        "Noidung":"Để báo các loại xe (cơ giới và thô sơ) hướng đi để qua một chướng ngại vật phải đặt biển số 302 (a,b) Hướng phải đi vòng chướng ngại vật. Biển được đặt trước chướng ngại vật và tùy theo hướng đi vòng sang phải hay sang trái mà lựa chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi vòng chướng ngại vật theo hướng mũi tên chỉ."
    },
    {
        "key":'b9',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/302a-huong-phai-di-vong-chuong-ngai-vat.jpg",
        'Name':"Hướng phải đi vòng chướng ngại vật",
        "Noidung":"Để báo các loại xe (cơ giới và thô sơ) hướng đi để qua một chướng ngại vật phải đặt biển số 302 (a,b) Hướng phải đi vòng chướng ngại vật. Biển được đặt trước chướng ngại vật và tùy theo hướng đi vòng sang phải hay sang trái mà lựa chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi vòng chướng ngại vật theo hướng mũi tên chỉ."
    },
    {
        "key":'b10',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/308a-tuyen-duong-cau-vuot-cat-qua.jpg",
        'Name':"Tuyến đường cầu vượt cắt qua",
        "Noidung":"Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái (hay rẽ phải) phải đặt biển số 308 (a,b) “Tuyến đường cầu vượt cắt ngang”. Biển đặt tại vị trí thích hợp trước cầu vượt để hướng dẫn xe đi thẳng hoặc rẽ trái (hay rẽ phải)."
    },
    {
        "key":'b11',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/301i-huong-di-phai-theo.jpg",
        'Name':"Hướng đi phải theo",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 301 (a,b,c,d,e,f,h,i) Hướng đi phải theo . Tùy theo hướng đi mà chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi theo hướng mũi tên chỉ (trừ xe được quyền ưu tiên theo quy định). Biển số 301i: các xe chỉ được rẽ trái và rẽ phải."
    },
    {
        "key":'b12',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/308a-tuyen-duong-cau-vuot-cat-qua.jpg",
        'Name':"Tuyến đường cầu vượt cắt qua",
        "Noidung":"Biểu thị phía trước có cầu vượt, xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái (hay rẽ phải) phải đặt biển số 308 (a,b) “Tuyến đường cầu vượt cắt ngang”. Biển đặt tại vị trí thích hợp trước cầu vượt để hướng dẫn xe đi thẳng hoặc rẽ trái (hay rẽ phải)."
    },
    {
        "key":'b13',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/301f-huong-di-phai-theo.jpg",
        'Name':"Hướng đi phải theo",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 301 (a,b,c,d,e,f,h,i)  Hướng đi phải theo . Tùy theo hướng đi mà chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi theo hướng mũi tên chỉ (trừ xe được quyền ưu tiên theo quy định). Biển số 301e: các xe chỉ được rẽ trái. Biển số 301f: các xe chỉ được đi thẳng và rẽ phải."
    },
    {
        "key":'b14',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/301h-huong-di-phai-theo.jpg",
        'Name':"Hướng đi phải theo",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 301 (a,b,c,d,e,f,h,i) Hướng đi phải theo . Tùy theo hướng đi mà chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi theo hướng mũi tên chỉ (trừ xe được quyền ưu tiên theo quy định). Biển số 301h: các xe chỉ được đi thẳng và rẽ trái."
    },
    {
        "key":'b15',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/301e-huong-di-phai-theo.jpg",
        'Name':"Hướng đi phải theo",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 301 (a,b,c,d,e,f,h,i) Hướng đi phải theo . Tùy theo hướng đi mà chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi theo hướng mũi tên chỉ (trừ xe được quyền ưu tiên theo quy định). Biển số 301e: các xe chỉ được rẽ trái."
    },
    {
        "key":'b16',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/301d-huong-di-phai-theo.jpg",
        'Name':"Hướng đi phải theo",
        "Noidung":"Để báo cho các loại xe (thô sơ và cơ giới) phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 301 (a,b,c,d,e,f,h,i) Hướng đi phải theo. Tùy theo hướng đi mà chọn kiểu biển cho phù hợp. Biển có hiệu lực bắt buộc các loại xe phải đi theo hướng mũi tên chỉ (trừ xe được quyền ưu tiên theo quy định). Biển số 301a: các xe chỉ được đi thẳng. Biển số 301d: các xe chỉ được rẽ phải."
    },
    {
        "key":'b17',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/309-an-coi.jpg",
        'Name':"Ấn còi",
        "Noidung":"Biểu thị xe cộ đi đến vị trí cắm biển đó thì phải ấn còi. Đặt biển ở trước khúc đường ngoặt gấp hoặc sắp vào đường đèo dốc dọc lớn hơn 10%, tầm nhìn bị hạn chế."
    },
    {
        "key":'b18',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-hieu-lenh/310b-huong-di-phai-theo-cho-cac-xe-cho-hang-nguy-hiem.jpg",
        'Name':"Hướng đi phải theo cho các xe chở hàng nguy hiểm ",
        "Noidung":"Để báo cho các loại xe chở hàng nguy hiểm phải đi theo hướng quy định, phải đặt một trong những kiểu biển số 310 (a,b,c) Hướng đi phải theo cho các xe chở hàng nguy hiểm. Tùy theo hướng đi mà chọn kiểu biển cho phù hợp."
    },
   
];

module.exports = hieulenh;