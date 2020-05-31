import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

var dataCar = [
  {
    id: '1',
    name: 'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường',
    value: 'Phạt tiền từ 200.000 đồng đến 400.000 đồng',
  },
  {
    id: '2',
    name:
      'Điều khiển xe lạng lách, đánh võng không chấp hành hiệu lệnh dừng xe của người thi hành hiệu lệnh dùng xe của người thi hành công vụ hoặc gây tai nạn giao thông',
    value: 'Phạt tiền từ 18.000.000 đồng đến 20.000.000 đồng',
  },
  {
    id: '3',
    name: 'Không chấp hành hiệu lệnh của đèn tín hiệu giao thông',
    value: 'Phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng',
  },
  {
    id: '4',
    name:
      'Không chấp hành hiệu lệnh, hướng dẫn của người điều khiển giao thông hoặc người kiểm soát giao thông',
    value: 'Phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng',
  },
  {
    id: '5',
    name:
      'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường khi đi qua đường ngang, cầu chung',
    value: 'Phạt tiền từ 800.000 đồng đến 1.000.000 đồng',
  },
  {
    id: '6',
    name: 'Vượt đường ngang, cầu chung khi đèn đỏ đã bật sáng',
    value: 'Phạt tiền từ 3.000.000 đồng đến 5.000.000 đồng',
  },
  {
    id: '7',
    name:
      'Chuyển hướng không nhường quyền đi trước cho người đi bộ, xe lăn của người khuyết tật qua đường tại nơi có vạch kẻ đường dành cho người đi bộ',
    value: 'Phạt tiền từ 200.000 đồng đến 400.000 đồng',
  },
  {
    id: '8',
    name:
      'Chuyển hướng không nhường quyền đi trước cho xe thô sơ đang đi trên phần đường dành cho xe thô sơ',
    value: 'Phạt tiền từ 200.000 đồng đến 400.000 đồng',
  },
  {
    id: '9',
    name: 'Chuyển hướng không nhường đường cho các xe đi ngược chiều',
    value: 'Phạt tiền từ 200.000 đồng đến 400.000 đồng',
  },
  {
    id: '10',
    name:
      'Dừng xe, đỗ xe không sát mép đường phía bên phải theo chiều đi ở nơi đường có lề đường hẹp hoặc không có lề đường',
    value: 'Phạt tiền từ 400.000 đồng đến 600.000 đồng',
  },
  {
    id: '11',
    name:
      'Không giữ khoảng cách an toàn để xảy ra va chạm với xe chạy liền trước hoặc không giữ khoảng cách theo quy định của biển báo hiệu "Cự ly tối thiểu giữa hai xe"',
    value: 'Phạt tiền từ 800.000 đồng đến 1.000.000 đồng',
  },
];

class DataList extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <View style={styles.typesRank}>
          <Text style={styles.headerName}>{this.props.item.name}</Text>
          <Text style={styles.content}>{this.props.item.value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class Car extends Component {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={dataCar}
          renderItem={({ item }) => <DataList item={item}></DataList>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    justifyContent: 'center',
  },
  typesRank: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  headerName: {
    fontSize: 17,
  },
  content: {
    color: 'red',
  },
});
