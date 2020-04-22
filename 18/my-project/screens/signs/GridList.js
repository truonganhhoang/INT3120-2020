import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

var { width } = Dimensions.get('window')
class DataBan extends Component {
  render() {
    return (
      <View style={styles.dong}>
        <View style={styles.trai}>
          <Image style={styles.hinh}
            // source={{ uri: this.props.item.image1 } && this.props.item.image}
            source={{ uri: this.props.item.image1 }}
          />
        </View>
        <View style={styles.phai}>
          <Text style={styles.ten}>{this.props.item.name1 || this.props.item.name}</Text>
          <Text>{this.props.item.content1 || this.props.item.content}</Text>
        </View>
      </View>
    )
  }
}
const GridList = (props) => {
    return (
      <SafeAreaView>
        <FlatList
          data={props.item}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <DataBan item={item}></DataBan>
          }
        />
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  dong: { borderBottomWidth: 1, paddingVertical: 15, flexDirection: 'row', backgroundColor: '#FAFCFB' },
  trai: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  phai: { flex: 6 },
  ten: { fontSize: 18, fontWeight: 'bold' },
  hinh: { width: (width) / 3, height: (width) / 3 }
})
export default GridList;