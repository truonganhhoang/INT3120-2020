import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: "black"
  },
  btn: {
    flexDirection: 'row',
    marginBottom: 50
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
  }
});

export default styles; 