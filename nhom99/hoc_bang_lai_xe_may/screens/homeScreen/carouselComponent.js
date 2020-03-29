import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image
} from "react-native";
import Text from "../../sharedComponents/Text";
import Swiper from "react-native-swiper";
import appImages from "../../constants/appImages";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const data = [
  appImages.bien_bao_giao_thong,
  appImages.sa_hinh,
  appImages.lt_a1,
  appImages.de_thi_thu_a1,
  appImages.luat_giao_thong
];

export default function() {
  return (
    <Swiper
      autoplay={true}
      loop={true}
      activeDotColor="rgba(255,255,255,0.5)"
      dotStyle={{ marginBottom: 7 }}
      activeDotStyle={{ marginBottom: 7 }}
      paginationStyle={{
        bottom: 0,
        alignItems: "flex-end"
      }}
    >
      {data.map((item, index, items) => (
        <View style={styles.swiperItem}>
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%" }}
          />
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              height: 50,
              backgroundColor: "rgba(0,0,0,0.5)",
              alignItems: "center"
            }}
          >
            <Text style={styles.swipperTitle}>{item.title}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
}
const styles = StyleSheet.create({
  container: { height: SCREEN_HEIGHT / 3 },
  swiperItem: {
    height: SCREEN_HEIGHT / 3,
    alignItems: "center"
  },
  swipperTitle: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    bottom: 20
  }
});
