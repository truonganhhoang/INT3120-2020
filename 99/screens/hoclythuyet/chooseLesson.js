import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import appIcons from "../../constants/appIcons";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => navigation.navigate("studying")}
      >
        <View style={styles.imgCon}>
          <Image
            style={styles.img}
            source={appIcons.checklist}
            resizeMode="center"
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            KHÁI NIỆM VÀ QUY TẮC
          </Text>
          <Text style={styles.socau}>75 câu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <View style={styles.imgCon}>
          <Image
            style={styles.img}
            source={appIcons.signage}
            resizeMode="center"
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            HỆ THỐNG BIỂN BÁO ĐƯỜNG BỘ
          </Text>
          <Text style={styles.socau}>36 câu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <View style={styles.imgCon}>
          <Image
            style={styles.img}
            source={appIcons.motor}
            resizeMode="center"
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            SA HÌNH
          </Text>
          <Text style={styles.socau}>34 câu</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <View style={styles.imgCon}>
          <Image
            style={styles.img}
            source={appIcons.partner}
            resizeMode="center"
          />
        </View>
        <View style={styles.textCon}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            VĂN HÓA VÀ ĐẠO ĐỨC LÁI XE
          </Text>
          <Text style={styles.socau}>5 câu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  row: {
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 0,
    borderRadius: 5,
    height: "16.67%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  imgCon: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  img: {
    width: "80%",
    height: "80%",
  },
  textCon: {
    flex: 4,
    paddingLeft: 10,
  },
  socau: {
    color: "#808080",
    paddingLeft: 5,
  },
  name: {},
});
