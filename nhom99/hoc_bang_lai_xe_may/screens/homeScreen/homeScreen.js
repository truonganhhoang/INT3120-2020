import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Carousel from "./carouselComponent";
import ListChooseComponent from "./listChooseComponent";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function() {
  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ListChooseComponent />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  carouselWrapper: {
    height: SCREEN_HEIGHT / 3
  }
});
