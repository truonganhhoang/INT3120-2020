import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { arrBan } from '../firebase/config';

var ban = [{
  "content": "Biển có hiệu lực buộc các xe cơ giới và thô sơ kể cả các xe được ưu tiên theo luật lệ Nhà nước quy định dừng lại trước biển hoặc trước vạch ngang đường và chỉ được phép đi khi thấy các tín hiệu (do người điều khiển giao thông hoặc đèn, cờ) cho phép đi.",
  "image": require("../../assets/signs/ban/101.jpg"),
  "name": "Dừng lại"
}, {
  "content": "Cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được đi qua.",
  "image": require("../../assets/signs/ban/102.jpg"),
  "name": "Hạn chế chiều cao"
}, {
  "content": "Biển đường cấm thường gặp ở tuyến đường đang thi công hoặc tuyến đường cấm các phương tiện qua lại vì lý do an ninh",
  "image": require("../../assets/signs/ban/103.jpg"),
  "name": "Biển báo cấm"
}, {
  "content": "Cấm các loại xe cơ giới sử dụng còi",
  "image": require("../../assets/signs/ban/104.jpg"),
  "name": "Cấm bóp còi"
}, {
  "content": "Để báo cấm rẽ phải (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ Nhà nước quy định được rẽ phải.",
  "image": require("../../assets/signs/ban/105.jpg"),
  "name": "Cấm đi thẳng và rẽ phải"
}, {
  "content": "Cấm rẽ trái (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ Nhà nước quy định được rẽ trái.",
  "image": require("../../assets/signs/ban/106.jpg"),
  "name": "Cấm đi thẳng và rẽ trái"
}]

// const arrBanef.child('ban');
// console.log(arrBan);
var { width } = Dimensions.get('window')
export default class Ban extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     animals: [],
  //     loading: false,
  //   })
  // }
  // componentDidMount() {//lấy dữ liệu trong firebase
  //   arrBan.on('value', (childSnapshot) => {
  //     const animals = [];
  //     childSnapshot.forEach((doc) => {
  //       animals.push({
  //         key: doc.key,
  //         name1: doc.toJSON().name,
  //         content1: doc.toJSON().content,
  //         image1: doc.toJSON().image,
  //       });

  //       this.setState({
  //         animals: animals,
  //         loading: false,
  //       })
  //     })
  //     console.log(animals);
  //   })
  // }

  render() {
    return (
      // <ScrollView>
      //   {
      //     ban.map((item, index) => (
      //       <ListItem
      //         key={index}
      //         leftAvatar={{ source: item.image , size:80}}
      //         title={item.name}
      //         titleStyle={{ fontWeight: 'bold' }}
      //         subtitle={item.content}
      //         subtitleStyle={{}}
      //         bottomDivider
      //       />
      //     ))
      //   }

      // </ScrollView>

      <SafeAreaView>
        <FlatList
          data={ban}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View style={styles.dong}>
              <View style={styles.trai}>
                <Image style={styles.hinh}
                  source={{uri: item.image1}&&item.image}
                />
              </View>
              <View style={styles.phai}>
                <Text style={styles.ten}>{item.name1||item.name}</Text>
                <Text>{item.content1||item.content}</Text>
              </View>
            </View>
          }
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  dong: { borderBottomWidth: 1,paddingVertical:15, flexDirection: 'row' , backgroundColor:'#FAFCFB'},
  trai: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal:40},
  phai: { flex: 6 },
  ten: {fontSize: 18, fontWeight:'bold'},
  hinh: { width: (width) / 3 ,  height: (width) / 3  }
})