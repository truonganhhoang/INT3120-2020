import { NativeModules } from "react-native";

var settingList = [
  {
    key: "1",
    title: "Ngôn ngữ",
    images: [
      {
        icon: require("../src/assets/icon/peopleIcon.png"),
      }
    ]
  },
  {
    key: "2",
    title: "Các ứng dụng khác của PORO",
    images: [
      {
        icon: require("../src/assets/icon/peopleIcon.png"),
      }
    ]
  },
  {
    key: "3",
    title: "Chúng tôi có thể cải thiện ứng dụng này như thế nào?",
    images: [
      {
        icon: require("../src/assets/icon/peopleIcon.png"),
      }
    ]
  },
  {
    key: "4",
    title: "Chia sẻ ứng dụng",
    images: [
      {
        icon: require("../src/assets/icon/peopleIcon.png"),
      }
    ]
  },
  {
    key: "5",
    text: "Thành thật xin lỗi nếu có những lỗi chính tả hoặc bản dịch sai xuất hiện trong ứng dụng này. Chúng tôi chỉ là một nhóm nhỏ nên dù đã và đang cố gắng hết sức để cải thiện dần ứng dụng nhưng vẫn không thể tránh khỏi sai sót. Nếu bạn phát hiện ra lỗi sai, xin hãy liên hệ với chúng tôi qua email: nhombay.appdev@gmail.com! Sự ủng hộ của các bạn là động lực rất lớn đối với chúng tôi! Xin cảm ơn!",
    button: "Gửi phản hồi qua email"
  },
  {
    key: "6",
    title: "Tải âm thanh để sử dụng khi ngoại tuyến",
  },
  
];

module.exports = settingList;
