import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { arrInstruction } from '../firebase/config';


var instruction = [{
  "content": "Để biểu thị ưu tiên cho các phương tiện trên đường có đặt biển này được đi trước. Biển đặt tại vị trí thích hợp trước khi đường nhánh sắp nhập vào trục đường chính, yêu cầu phương tiện từ đường nhánh ra phải dừng lại nhường cho phương tiện trên đường chính đi trước.",
  "image": require("../../assets/signs/instruction/401.jpg"),
  "name": "Bắt đầu đường ưu tiên."
}, {
  "content": " Báo hiệu hết đoạn đường được ưu tiên",
  "image": require("../../assets/signs/instruction/402.jpg"),
  "name": "Hết đoạn đường ưu tiên."
}, {
  "content": "Để chỉ dẫn bắt đầu đường dành cho các loại ôtô đi lại, các loại phương tiện giao thông khác không được phép đi vào đoạn đường có dặt biển này.",
  "image": require("../../assets/signs/instruction/403a.jpg"),
  "name": "Đường dành cho  ôtô."
}, {
  "content": "Để chỉ dẫn bắt đầu đường dành cho các loại ôtô, xe máy (kể cả xe gắn máy) đi lại, các loại phương tiện giao thông khác không được phép đi vào đoạn đường có dặt biển này.",
  "image": require("../../assets/signs/instruction/403b.jpg"),
  "name": "Đường dành cho ô tô, xe máy."
}, {
  "content": "Để chỉ dẫn hết đoạn đường dành cho ôtô đi lại.",
  "image": require("../../assets/signs/instruction/404a.jpg"),
  "name": "Hết đường dành cho  ô tô."
}, {
  "content": "Để chỉ dẫn hết đoạn đường dành cho ôtô, xe máy đi lại. ",
  "image": require("../../assets/signs/instruction/404b.jpg"),
  "name": "Hết đường dành cho  ô tô, xe máy."
}]

var { width } = Dimensions.get('window')
// const animalRef = rootRef.child('instruction');

export default class Instruction extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     animals: [],
  //     loading: false,
  //   })
  // }
  // componentDidMount() {//lấy dữ liệu trong firebase
  //   arrInstruction.on('value', (childSnapshot) => {
  //     const animals = [];
  //     childSnapshot.forEach((doc) => {
  //       animals.push({
  //         key: doc.key,
  //         name1: doc.toJSON().name,
  //         content1: doc.toJSON().content,
  //         image1: doc.toJSON().image,
  //       });
  //       console.log('timeout database4')
  //       this.setState({
  //         animals: animals,
  //         loading: false,
  //       })
  //     })
  //   })
  // }

  render() {
    return (
      // <ScrollView>
      //   {
      //     instruction.map((item, index) => (
      //       <ListItem
      //         key={index}
      //         // leftAvatar={{ source: { uri: item.imageout }, size:80}}
      //         leftAvatar={{ source: item.image, size:80}}
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
          data={instruction}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View style={styles.dong}>
              <View style={styles.trai}>
                <Image style={styles.hinh}
                  source={{ uri: item.image1 } && item.image}
                />
              </View>
              <View style={styles.phai}>
                <Text style={styles.ten}>{item.name1 || item.name}</Text>
                <Text>{item.content1 || item.content}</Text>
              </View>
            </View>
          }
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  dong: { borderBottomWidth: 1, paddingVertical: 15, flexDirection: 'row', backgroundColor: '#FAFCFB' },
  trai: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  phai: { flex: 6 },
  ten: { fontSize: 18, fontWeight: 'bold' },
  hinh: { width: (width) / 3, height: (width) / 3 }
})