
import 'thuchanh_model.dart';

class StatusHelper {

  static var statusList = [
    StatusItemModel("Mẹo số 01", "Điều đầu tiên bạn phải làm là biết đi xe máy\nViệc phần thực hành trượt nhiều một phần nguyên nhân là do các bạn chưa biết đi xe máy. Vậy nếu bạn muốn thi đỗ thì đầu tiên là bạn phải biết đi xe cái đã"),
    StatusItemModel("Mẹo số 02", "Tập trước vòng số 8 ở nhà: Phần thi thực hành trượt nhiều nhất là ở phần thi vòng số 8. Do vậy, việc các bạn đã biết đi xe máy thành thạo nhưng chưa tập qua vòng số 8 thì cúng rất dễ bị trượt. Bạn nên tập qua vòng số 8 càng nhiều lần càng tốt, ít nhất là lúc đi xe vào vòng số 8 không còn cảm thấy loạng choạng"),
    StatusItemModel("Mẹo số 03", "Hôm thi lên thật sớm: Tại sao chúng tối lại khuyên bạn như vậy? Bởi vì xe cuaqr bạn thì bạn quen nó, bạn đi rất ngon lành. Nhưng xe của sân thì khác quá nhiều đấy, nếu bạn không đến sớm để làm quen với nó thì cúng rất dễ trượt. Hơn nữa, buổi thi thường có rất đông người. Nếu bạn đến sớm thì không phải chờ lâu mới đượt tập xe. Còn nếu đến muộn thì khẩ năng phải xếp hàng dài mới đến lượt mình"),

  ];

  static StatusItemModel getStatusItem(int position) {
    return statusList[position];
  }

  static var itemCount = statusList.length;

}