import { StyleSheet } from 'react-native'; 
import layout  from '../../constants/layout'; 

console.log((layout.window.height - 60)/5)

const styles = StyleSheet.create({
  left: {
    width: (layout.window.width - 20)*0.41, 
    height: (layout.window.height - 60)/5, 
    backgroundColor: 'white', 
    position: "absolute", 
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5, 
    paddingLeft: 20, 
    paddingTop: 20
  }, 
  right: {
    marginLeft: (layout.window.width - 20)*0.41, 
    width: (layout.window.width - 20)*0.59, 
    height: (layout.window.height - 60)/5, 
    backgroundColor: 'white', 
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5
  }, 
  btn: {
    marginLeft: 10, 
    width: layout.window.width-20, 
    height: 160, 
  }, 
  card: {
    marginLeft: 10, 
    width: layout.window.width-20, 
    height: 160, 
    borderRadius: 10
  }, 
  img: {
    borderWidth: 0,
    width: 150,
    height: 110,
  }, 
  star_icon: {
    position: "absolute",
    top: 10, 
    right:10,
    fontSize: 35,
    zIndex:2
  }, 
  en_text: {
    top: 20, 
    textAlign: "center",
    color: "#ff5e00", 
    fontSize: 25, 
    fontWeight: "bold"
  }, 
  spelling_text: {
    textAlign: "center",
    fontSize: 18, 
    paddingTop: 20, 
    fontWeight: "bold"
  }, 
  voice_icon: {
    textAlign: "center", 
  }, 
  vn_text: {
    textAlign: "center", 
    color: "blue", 
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default styles; 