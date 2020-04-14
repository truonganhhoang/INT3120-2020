import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { arrCommand } from '../firebase/config';
import { ListItem } from 'react-native-elements';

var command = [ {
  "content" : "Các xe chỉ được đi thẳng (trừ xe được quyền ưu tiên theo quy định)",
  "image" : require("../../assets/signs/command/301a.jpg"),
  "name" : "Hướng đi phải theo"
}, {
  "content" : "các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau nơi đường giao nhau.",
  "image" : require("../../assets/signs/command/301b.jpg"),
  "name" : "Hướng đi phải theo"
}, {
  "content" : "Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở sau nơi đường giao nhau.",
  "image" : require("../../assets/signs/command/301c.jpg"),
  "name" : "Hướng đi phải theo"
}, {
  "content" : "Các xe chỉ được rẽ phải (trừ xe được quyền ưu tiên theo quy định). Biển này được đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.",
  "image" : require("../../assets/signs/command/301d.jpg"),
  "name" : "Hướng đi phải theo"
}, {
  "content" : "Các xe chỉ được rẽ trái (trừ xe được quyền ưu tiên theo quy định).  Biển này được đặt ở trước nơi đường giao nhau, có tác dụng tại nơi giao nhau đằng sau mặt biển.",
  "image" : require("../../assets/signs/command/301e.jpg"),
  "name" : "Hướng đi phải theo"
}, {
  "content" : "Các xe chỉ được đi thẳng và rẽ phải (trừ xe được quyền ưu tiên theo quy định).",
  "image" : require("../../assets/signs/command/301f.jpg"),
  "name" : "Hướng đi phải theo"
} ]

var { width } = Dimensions.get('window')

// const animalRef = rootRef.child('command');

export default class Command extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     animals: [],
  //     loading: false,
  //   })
  // }
  // componentDidMount() {//lấy dữ liệu trong firebase
  //   arrCommand.on('value', (childSnapshot) => {
  //     const animals = [];
  //     childSnapshot.forEach((doc) => {
  //       animals.push({
  //         key: doc.key,
  //         name1: doc.toJSON().name,
  //         content1: doc.toJSON().content,
  //         imageout: doc.toJSON().image,
  //       });
  //       console.log('timeout database2')
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
      //     command.map((item, index) => (
      //       <ListItem
      //         key={index}
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
          data={command}
          renderItem={({ item }) =>
            <View style={styles.dong}>
              <View style={styles.trai}>
                <Image style={styles.hinh}
                  source={item.image}
                />
              </View>
              <View style={styles.phai}>
                <Text style={styles.ten}>{item.name}</Text>
                <Text>{item.content}</Text>
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