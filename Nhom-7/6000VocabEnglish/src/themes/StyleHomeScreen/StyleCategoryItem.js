import { StyleSheet } from "react-native";

const StyleCategoryItem = StyleSheet.create({
  container: {
    elevation: 10,
    flexDirection: "row",
    backgroundColor: "gray",
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backgroundImage: {
    borderRadius: 10,
    backgroundColor: "black",
    opacity: 0.4
  },
  icon: {
    margin: 15,
    width: 64,
    height: 64
  },
  textRight: {
    width: "50%",
    alignItems: "center"
  },
  textRightStyle: {
    fontWeight: "700",
    color: "white"
  },
  title: {
    fontSize: 24
  },
  description: {
    fontSize: 20
  },
  horizontalLine: {
    marginTop: 5,
    width: "40%",
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 50,
    opacity: 0.5
  },
  touchable: {
    borderRadius: 10
  }
});

export default StyleCategoryItem;
