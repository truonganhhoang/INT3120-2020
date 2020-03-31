import { StyleSheet } from "react-native";

const GLOBAL = require('../../utils/Globals')

const StyleHeaderCommon = StyleSheet.create({
  headerTitle: {
    color: GLOBAL.COLOR.ORANGE,
    fontWeight: "bold",
    textTransform: "capitalize"
  }
});

export default StyleHeaderCommon;