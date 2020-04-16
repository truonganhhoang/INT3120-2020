import { NativeModules } from "react-native";
var chidan=[
    {
        'key':'b1',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/447c-bien-bao-cau-vuot-lien-thong.jpg",
        'Name':"Biển báo cầu vượt liên thông",
        "Noidung":"Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến. Tuỳ theo nút giao mà bố trí biển số 447a, 447b, 445c, 447d cho phù hợp",
    },
    {
        'key':'b2',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/447d-bien-bao-cau-vuot-lien-thong.jpg",
        'Name':"Biển báo cầu vượt liên thông",
        "Noidung":"Biển đặt tại vị trí trước khi vào cầu vượt có tổ chức giao thông liên thông giữa các tuyến. Tuỳ theo nút giao mà bố trí biển số 447a, 447b, 445c, 447d cho phù hợp.",
    },
    {
        'key':'b3',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/446-noi-do-xe-danh-cho-nguoi-tan-tat.jpg",
        'Name':"Nơi đỗ xe dành cho người tàn tật",
        "Noidung":"Để báo hiệu nơi đỗ xe dành cho người tàn tật phải đặt biển số 446 Nơi đỗ xe dành cho người tàn tật. Biển đặt tại vị trí thích hợp có thể sử dụng kết hợp với biển 131a “Cấm đỗ xe” và biển số 408 “Nơi đỗ xe”.",
    },
    {
        'key':'b4',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445h-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo mô tả tình trạng đường",
        "Noidung":"Biển báo đường xuống dốc liên tục (biển số 445h) đặt biển ở nơi thích hợp khi sắp vào đoạn đường xuống dốc liên tục, nhằm nhắc nhở lái xe phải đi chậm, đi sát bên phải.",
    },
    {
        'key':'b5',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445f-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo ,ô tả tình trạng đường",
        "Noidung":"Biển báo chú ý khu vực có gió ngang mạnh (biển số 445f) biển đặt biển ở vị trí trước khi đi vào cầu lớn, cầu vượt qua vịnh hoặc cửa núi đoạn đường thường có gió ngang cường độ mạnh.",
    },
    {
        'key':'b6',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445d-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo mô tả tình trạng đường",
        "Noidung":"Biển báo đoạn đường có nền đường yếu (biển số 445d) biển đặt ở vị trí thích hợp trước đoạn đường mà nền đường có hiện tượng sụt lún, không bằng phẳng, nhắc nhở lái xe đi chậm và cẩn thận.",
    },
    {
        'key':'b7',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445g-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo mô tả tình trạng đường",
        "Noidung":"Biển báo đoạn đường nguy hiểm hay xẩy ra tai nạn (biển số 445g) đặt biển ở nơi thích hợp trước khi vào đoạn đường hay xẩy ra tai nạn.",
    },
    {
        'key':'b8',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/444m-bien-bao-chi-dan-dia-diem.jpg",
        'Name':"Biển báo chỉ dẫn địa điểm ",
        "Noidung":"Biển báo trạm sửa chữa xe (biển số 444m) đặt biển ở trước nơi đường giao nhau với đường vào trạm sửa chữa xe trong khu dịch vụ.",
    },
    {
        'key':'b9',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445e-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo mô tả tình trạng đường",
        "Noidung":"Biển báo xe lớn hoặc quá khổ đi sát về bên phải (biển số 445e) biển đặt ở nơi thích hợp trước khi đi vào đoạn đường có từ hai làn xe trở lên, hướng dẫn cho lái xe lớn hoặc quá khổ phải đi tốc độ thấp không được chiếm làn đường của các loại xe khác.",
    },
    {
        'key':'b10',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/445b-bien-bao-mo-ta-tinh-trang-duong.jpg",
        'Name':"Biển báo mô tả tình trạng đường",
        "Noidung":"Biển báo đường dốc phải đi chậm, lái xe phải cẩn thận (biển số 445b) biển đặt ở vị trí thích hợp trước đoạn đường có độ dốc lớn và tầm nhìn hạn chế.",
    },
    {
        'key':'b11',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/444k-bien-bao-chi-dan-dia-diem.jpg",
        'Name':"Biển chỉ dẫn địa điểm",
        "Noidung":"Biển báo ga tàu điện ngầm (biển số 444k) đặt biển ở nơi đường giao nhau với đường vào ga tàu điện ngầm.",
    },
    {
        'key':'b12',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/444j-bien-bao-chi-dan-dia-diem.jpg",
        'Name':"Biển báo chỉ dẫn địa điểm ",
        "Noidung":"Biển chỉ dẫn bến phà (biển số 444j) đặt biển ở trước nơi đường giao nhau với đường ra bến phà.",
    },
    {
        'key':'b13',
        'Img':"https://i.xeoto.com.vn/bien-bao-giao-thong/bien-bao-chi-dan/444h-bien-bao-chi-dan-dia-diem.jpg",
        'Name':"Biển báo chỉ dẫn địa điểm ",
        "Noidung":"Biển chỉ dẫn trạm xăng (biển số 444h) đặt biển ở trước nơi đường giao nhau với đường vào trạm bán xăng dầu.",
    },
    
    
];
module.exports = chidan;