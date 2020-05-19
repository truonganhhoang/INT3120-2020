import { StyleSheet } from "react-native";

const GLOBAL = require("../../utils/Globals");

const StyleHeader = StyleSheet.create({
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textAds: {
    backgroundColor: "white",
    paddingVertical: 1,
    paddingHorizontal: 5,
    color: GLOBAL.COLOR.ORANGE,
    fontWeight: "bold",
    marginTop: 5,
    borderRadius: 10,
  },
});

export default StyleHeader;