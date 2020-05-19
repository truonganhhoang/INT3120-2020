import 'ChatItemModel.dart';

class ChatHelper {

  static var chatList = [
    ChatItemModel("Đường cấm", "Báo đường cấm tất cả các loại phương tiện( cơ giới và thô sơ) đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định"),
    ChatItemModel("Cấm đi ngược chiều", "Báo đường cấm tất cả các loại xe(cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các loại xe được ưu tiên theo quy định",),
    ChatItemModel("Cấm ô tô", "Báo đường cấm tất cả các loại xe cơ giới, kể cả mô tô 3 bánh có thùng đi qua, trừ mô tô hai bánh, xe gắn máy và các xe được ưu tiên theo quy định",),
    ChatItemModel("Cấm ô tô rẽ phải", "Báo đường cấm tất cả các loại xe cơ giới, kể cả mô tô 3 bánh có thùng rẽ phải, trừ mô tô hai bánh, xe gắn máy và các xe được ưu tiên theo quy định"),
    ChatItemModel("Cấm ô tô rẽ trái", "Báo đường cấm tất cả các loại xe cơ giới, kể cả mô tô 3 bánh có thùng rẽ trái, trừ mô tô hai bánh, xe gắn máy và các xe được ưu tiên theo quy định")
  ];

  static ChatItemModel getChatItem(int position) {
    return chatList[position];
  }

  static var itemCount = chatList.length;

}