import React from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Text from "../../sharedComponents/Text";
import appIcons from "../../constants/appIcons";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_test}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>THI SÁT HẠCH</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_book}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>HỌC LÝ THUYẾT</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_bienbao}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>BIỂN BÁO ĐƯỜNG BỘ</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_tips}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>MẸO THI</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={appIcons.icon_law}
          style={styles.iconStyle}
          resizeMode="stretch"
        />
        <Text style={{ paddingTop: 5 }}>TRA CỨU LUẬT</Text>
      </View>
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
    borderColor: "gray"
  },
  item: {
    width: "33.33%",
    height: SCREEN_HEIGHT / 5,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderRightColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: "60%",
    height: "50%"
  }
});
