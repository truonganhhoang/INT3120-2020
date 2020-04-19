import { StyleSheet } from "react-native";
const GLOBAL = require("../../utils/Globals");

const StyleMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  listItems: {
    paddingTop: 120,
    paddingBottom: 20,
    justifyContent: "space-around",
    paddingLeft: 16,
    paddingRight: 16,
  },
  separator: {
    height: 10,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default StyleMain;
