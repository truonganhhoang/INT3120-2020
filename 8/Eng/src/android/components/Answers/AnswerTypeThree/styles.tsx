import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize:18
  },
  btn: {
    flexDirection: 'row',
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding:20,
    marginBottom:5,
    bottom:HEIGHT*0.0001
  }
});

export default styles; 