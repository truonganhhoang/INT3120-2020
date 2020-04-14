import 'lythuyetmodel.dart';

class ChatHelper {

  static var chatList = [
    ChatItemModel("Mẹo số 01", "Vạch-Phố-Dải-Phần( Chọn đáp án là 1)\nƯu-Phương-Làn(Chọn đáp án là 2)\nBộ(Chọn đáp án là 1 và 2)\nNếu có cả từ PHƯƠNG và BỘ trong câu khái niệm thì tuân theo Phương chọn đáp án là 2"),
    ChatItemModel("Mẹo số 02", "Phương tiện giao thông đường bộ gồm cơ giới và thô sơ thì chọn 1. Phương tiện tham gia giao thông đường bộ gồm cơ giới, thô sơ, xe máy chuyên dùng thì chọn cả 1 và 2\nCó 4 nguyên tắc nhường đường: (1) Không có vòng xuyến nhường phải; (2) Có vòng xuyến nhường trái; (3) Nhường đường cho xe ưu tiên, đường chính; (4) Nhường đường cho người đi bộ",),
    ChatItemModel("Mẹo số 03", "Bài nồng độ cồn\nXe mô tô chọn đáp án có hai số là 50 và 0.25. Đối với xe ô tô thì tuyệt đối không được uống rượu bia khi tham gia giao thông"),
    ChatItemModel("Mẹo số 04", "Cảnh sát giang hai tay chọn 1, giơ tay không quên chọn ý 2; Giang-1 giơ-2\nBài đường cao tốc: Ra chọn 1- vào chọn đáp án 1+3 - bảo trì đường cao tốc chọn 3."),
    ChatItemModel("Mẹo số 05", "Khi điều khiển xe chạy trên đường người lái xe phải mang theo giấy tờ gì, chọn đáp án dài nhất bao gồm tất cả các loại giấy tờ cần mang đi\nXe gắn máy trong khu vực đông dân cư đi 40km/h, ngoài đông dân cư đi 50km/h")
  ];

  static ChatItemModel getChatItem(int position) {
    return chatList[position];
  }

  static var itemCount = chatList.length;

}