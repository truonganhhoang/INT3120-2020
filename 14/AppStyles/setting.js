import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 250,
    maxHeight: 800,
  },
  button:{
    borderRadius: 10,
    marginTop: 20,
    width: 60
  },
  textContainer:{
    width: 250,
    maxHeight: 32,
    backgroundColor: "#3385d6",
    justifyContent: 'center', 
    alignItems: 'center'
  },
  flatList:{
    width: 250,
    maxHeight: 350
  }
});

export default styles;