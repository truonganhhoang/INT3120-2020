
import 'StatusItemModel.dart';

class StatusHelper {

  static var statusList = [
    StatusItemModel("Chỗ ngoặt nguy hiểm vòng bên trái", "Báo trước chỗ ngoặt nguy hiểm phía bên trái"),
    StatusItemModel("Chỗ ngoặt nguy hiểm vòng bên phải", "Báo trước chỗ ngoặt nguy hiểm phía bên phải"),
    StatusItemModel("Nhiều chỗ ngoặt nguy hiểm liên tiếp", "Báo trước chỗ ngoặt nguy hiểm liên tiếp trong đó có chỗ ngoặt đầu tiên hướng vòng bên trái"),
    StatusItemModel("Nhiều chỗ ngoặt nguy hiểm liên tiếp", "Báo trước chỗ ngoặt nguy hiểm liên tiếp trong đó có chỗ ngoặt đầu tiên hướng vòng bên phải"),
    StatusItemModel("Đường bị hẹp cả hai bên", "Báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên"),
    StatusItemModel("Đường bị hẹp về bên trái", "Báo trước sắp đến một đoạn đường bị hẹp đột ngột bên trái"),
    StatusItemModel("Đường bị hẹp về bên phải", "Báo trước sắp đến một đoạn đường bị hẹp đột ngột bên phải"),
    StatusItemModel("Đường hai chiều", "Báo trước sắp đến đoạn đường do sửa chữa hoặc có trở ngại ở một phía đường mà phải tổ chức đi lại cho phương tiện cả hai chiều trên phía đường còn lại  hoặc để báo trước đoạn đường đôi tạm thời hoặc đoạn đường có chiều xe đi và về chung"),
  ];

  static StatusItemModel getStatusItem(int position) {
    return statusList[position];
  }

  static var itemCount = statusList.length;

}