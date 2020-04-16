import 'CallItemModel.dart';

class CallHelper {

  static var callList = [
    CallItemModel("Hướng đi phải theo", "Các xe được chỉ định đi thẳng( trừ xe được quyền ưu tiên theo quy định"),
    CallItemModel("Hướng đi phải theo", "Các xe được rẽ phải( trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau đường giao nhau")];

  static CallItemModel getCallItem(int position) {
    return callList[position];
  }

  static var itemCount = callList.length;

}