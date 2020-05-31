import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Carousel from "./carouselComponent";
import ListChooseComponent from "./listChooseComponent";
import appIcons from "../../constants/appIcons";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={appIcons.menu} style={{ width: 18, height: 18 }} />
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ListChooseComponent navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselWrapper: {
    height: SCREEN_HEIGHT / 3,
  },
});
