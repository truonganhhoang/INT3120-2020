import React from "react";
import { Text, Image, View, StyleSheet, ActivityIndicator } from "react-native";

export default function Spinner(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}> Loading .... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
 
  },
  text: {
    fontSize: 20,
  },
});
