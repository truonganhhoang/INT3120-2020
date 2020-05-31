import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import appImages from "../../constants/appImages";

const DATA = [
  {
    text1:
      "Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường",
    text2: "Phạt tiền từ 100.000 đồng đến 200.000 đồng.",
    image: appImages.vach_ke_duong.image,
  },
  {
    text1: "Không chấp hành hiệu lệnh của đèn tín hiệu giao thông",
    text2: "Phạt tiền từ 600.000 đồng đến 1.000.000 đồng",
    image: appImages.den_giao_thong.image,
  },
  {
    text1: "Không chấp hành hiệu lệnh của người điều khiển giao thông",
    text2: "Phạt tiền từ 600.000 đồng đến 1.000.000 đồng",
    image: appImages.nguoi_dieu_khien.image,
  },
  {
    text1: "Không chấp hành hiệu lệnh của biển báo giao thông",
    text2: "Phạt tiền từ 200.000 đồng đến 300.000 đồng",
    image: appImages.bb.image,
  },
];

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => <Row item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
        )}
      />
    </View>
  );
}

function Row({ item }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: "80%", height: "80%" }}
          source={item.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 3 }}>
        <Text>{item.text1}</Text>
        <Text style={{ color: "red", fontStyle: "italic", fontSize: 14 }}>
          {item.text2}
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue", fontSize: 13, fontStyle: "italic" }}>
            Xem chi tiết
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
});
