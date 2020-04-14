import * as React from 'react';
import {StyleSheet,TextInput,View,Alert,Button,ScrollView,Text,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/css/css';

class Tutorial extends React.Component {
  render() {
    return (
    <ScrollView style={styles.container}>
    <View style={styles.banner}>
      <Text style={[styles.text_banner,{ flex: 1, flexDirection: 'column' }]} onPress={this._Done}>
      <Image style={styles.icon_back} source={require('../assets/icon/back.png')}/>
      Hướng dẫn học hiệu quả</Text>
      <Text style={{ flex: 1, flexDirection: 'column' }}></Text>
    </View>
    <View style={styles.container2}>
      <Text style={styles1.text1}>3000 từ vựng Tiếng Anh thông dụng</Text>
      <Text>Chỉ với 3000 từ, chúng  ta hoàn toàn có thể hiểu và giao tiếp tiếng anh một cách thành thạo. Nếu đây là lần đầu tiên sử dụng ứng dụng, mong bạn đọc kỹ hướng dẫn sử dụng dưới đây!</Text>
      <Text style={styles1.text1}>Phương pháp sử dụng phần mềm hiệu quả</Text>
      <Text>Để có thể sử dụng phần mềm một cách hợp lý và hiệu quả cao nhất, các bạn vui lòng đọc kỹ phần hướng dẫn sử dụng dưới đây. Ứng dụng hỗ trợ 2 phương pháp học chính là học chủ động và học thụ động. Phần học chủ động là người dùng chủ động bỏ thời gian, công sức vào việc học từng từ mới và thực hiện các bài luyện tập, bài kiểm tra. việc này sẽ giúp bạn chủ động ghi nhớ từ vựng một cách có hệ thống và nhanh chóng chính xác.</Text>
  </View>
    </ScrollView>
  );
  }
  _Done= async () => {
    this.props.navigation.navigate('Menu');
    }
}

const styles1= StyleSheet.create({
  text1:{
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: '#33CCFF',

  },
});

export default Tutorial;
