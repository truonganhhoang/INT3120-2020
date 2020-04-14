import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { arrDanger } from '../firebase/config';
import { ListItem } from 'react-native-elements';

var danger = [ {
  "content" : "Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên trái.",
  "image" : require("../../assets/signs/danger/201b.jpg"),
  "name" : "Chỗ ngoặt nguy hiểm vòng bên trái"
}, {
  "content" : "Báo trước sắp đến một chỗ ngoặt nguy hiểm vòng bên phải.",
  "image" : require("../../assets/signs/danger/201b.jpg"),
  "name" : "Chỗ ngoặt nguy hiểm vòng bên phải"
}, {
  "content" : "Báo trước sắp đến một chỗ ngoặt nguy hiểm liên tiếp",
  "image" : require("../../assets/signs/danger/202.jpg"),
  "name" : "Chỗ ngoặt nguy hiểm liên tiếp"
}, {
  "content" : "Báo trước sắp đến một đoạn đường bị hẹp đột ngột cả hai bên.",
  "image" : require("../../assets/signs/danger/203a.jpg"),
  "name" : "Đường bị hẹp cả hai bên"
}, {
  "content" : "Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía trái.",
  "image" : require("../../assets/signs/danger/203b.jpg"),
  "name" : "Đường bị hẹp về phía trái"
}, {
  "content" : "Báo trước sắp đến một đoạn đường bị hẹp đột ngột về phía phải.",
  "image" : require("../../assets/signs/danger/203c.jpg"),
  "name" : "Đường bị hẹp về phía phải"
} ]

var { width } = Dimensions.get('window')
// const animalRef = rootRef.child('danger');

export default class Danger extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = ({
  //     animals: [],
  //     loading: false,
  //   })
  // }
  // componentDidMount() {//lấy dữ liệu trong firebase
  //   arrDanger.on('value', (childSnapshot) => {
  //     const animals = [];
  //     childSnapshot.forEach((doc) => {
  //       animals.push({
  //         key: doc.key,
  //         name1: doc.toJSON().name,
  //         content1: doc.toJSON().content,
  //         imageout: doc.toJSON().image,
  //       });
  //       console.log('timeout database3')
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
      //     danger.map((item, index) => (
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
          data={danger}
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