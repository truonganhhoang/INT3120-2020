import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Text from "../../sharedComponents/Text";
import appIcons from "../../constants/appIcons";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("lawScreen")}
      >
        <Image
          source={appIcons.icon_law}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>TRA CỨU LUẬT</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_test}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>THI SÁT HẠCH</Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("hoclythuyet")}
      >
        <Image
          source={appIcons.icon_book}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>HỌC LÝ THUYẾT</Text>
      </TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_bienbao}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>BIỂN BÁO ĐƯỜNG BỘ</Text>
      </View>

      {/* <View style={styles.item}>
        <Image
          source={appIcons.icon_tips}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>MẸO THI</Text>
      </View> */}

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("tipScreen")}
      >
        <Image
          source={appIcons.icon_tips}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>MẸO THI KQ CAO</Text>
      </TouchableOpacity>

      <View style={styles.item}>
        <Image
          source={appIcons.icon_wrong}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>CÁC CÂU HAY SAI</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: "gray",
  },
  item: {
    width: "33.33%",
    height: SCREEN_HEIGHT / 5,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderRightColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: "60%",
    height: "50%",
  },
});
