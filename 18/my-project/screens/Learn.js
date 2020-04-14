import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


var instruction = [{
  "content": "145 câu",
  "image": require("../assets/icon/0.webp"),
  "name": "KHÁI NIỆM VÀ QUY TẮC",
}, {
  "content": "145 câu",
  "image": require("../assets/icon/1.webp"),
  "name": "HỆ THỐNG BIỂN BÁO ĐƯỜNG BỘ",
}, {
  "content": "145 câu",
  "image": require("../assets/icon/2.webp"),
  "name": "SA HÌNH",
}, {
  "content": "145 câu",
  "image": require("../assets/icon/3.webp"),
  "name": "NGHIỆP VỤ VẬN TẢI",
},{
  "content": "145 câu",
  "image": require("../assets/icon/4.webp"),
  "name": "KỸ THUẬT LÁI XE",
}]

var { width } = Dimensions.get('window')

export default class Instruction extends Component {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={instruction}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.dong}>
              <View style={styles.trai}>
                <Image style={styles.hinh}
                  source={{ uri: item.image1 } && item.image}
                />
              </View>
              <View style={styles.phai}>
                <Text style={styles.ten}>{item.name1 || item.name}</Text>
                <Text style={styles.note}>{item.content1 || item.content}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  dong: { margin:5, flexDirection: 'row', backgroundColor: '#FAFCFB', padding: 10, borderRadius:5},
  trai: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  phai: { flex: 6, justifyContent:'center' },
  ten: { fontSize: 15 },
  note: { color:'gray' },
  hinh: { tintColor:'#66bb6a', width: (width) / 6, height: (width) / 6 }
})