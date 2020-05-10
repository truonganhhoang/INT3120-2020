import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { render } from "react-dom";
import appIcons from "../../constants/appIcons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("LawDetail")}
      >
        <Image style={{ width: 64, height: 64 }} source={appIcons.hieulenh} />
        <Text style={styles.text}>Hiệu lệnh, chỉ dẫn</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Image
          style={{ width: 64, height: 64 }}
          source={appIcons.chuyenhuong}
        />
        <Text style={styles.text}>Chuyển hướng, nhường đường</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.dungxe} />
        <Text style={styles.text}>Dừng xe, đỗ xe</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.uutien} />
        <Text style={styles.text}>Thiết bị ưu tiên, còi</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.tocdo} />
        <Text style={styles.text}>Tốc độ, khoảng cách an toàn</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.vanchuyen} />
        <Text style={styles.text}>Vận chuyển người, hàng hóa</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.ttb} />
        <Text style={styles.text}>Trang thiết bị phương tiện</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.duongcam} />
        <Text style={styles.text}>Đường cấm, đường 1 chiều</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.nongdocon} />
        <Text style={styles.text}>Nồng độ cồn, chất kích thích</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.giaytoxe} />
        <Text style={styles.text}>Giấy tờ xe</Text>
      </View>
      <View style={styles.item}>
        <Image style={{ width: 64, height: 64 }} source={appIcons.khac} />
        <Text style={styles.text}>Khác</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
  },
  item: {
    width: "33.33%",
    height: SCREEN_HEIGHT / 5,
    alignItems: "center",
  },
  text: {
    padding: 5,
    textAlign: "center",
  },
});
