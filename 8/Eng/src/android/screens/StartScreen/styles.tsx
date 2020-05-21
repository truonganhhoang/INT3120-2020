import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 500,
    height: 1920,
    resizeMode: 'stretch'
  },
  setting: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 10,
    paddingTop: 10
  },
  favorite: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10,
    paddingTop: 10,
  },
  logo: {
    alignItems: 'center',
    flex: 1,
  },
  headerBar: {
    flexDirection: 'row',
    paddingTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  container: {
    // backgroundColor: '#f8a136', 
    // flex: 1,
    // backgroundColor: "#ff5e00",
    // alignItems: "stretch",
    // justifyContent: "flex-start",

    flex: 1,
    // backgroundColor: "#ff5e00",
    flexDirection: "column",
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "transparent",
  },
  listItems: {
    paddingTop: 70,
    paddingBottom: 20,
    justifyContent: "space-around",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  loadingBackgroundStyle: {

  }
})

export default styles; 