import { StyleSheet } from 'react-native'; 
import layout  from '../../constants/layout'; 

// console.log((layout.window.height - 60)/5)

const leftWidth = (layout.window.width - 20)*0.41; 
const rightWidth = (layout.window.width - 20)*0.59; 
const height = (layout.window.height - 60)/5; 

const styles = StyleSheet.create({
  left: {
    width: leftWidth, 
    height: height, 
    backgroundColor: 'white', 
    position: "absolute", 
    borderTopLeftRadius: 5, 
    borderBottomLeftRadius: 5, 
    paddingTop: 10, 
    paddingLeft: 10
  }, 
  right: {
    marginLeft: leftWidth, 
    width: rightWidth, 
    height: height, 
    backgroundColor: 'white', 
    borderTopRightRadius: 5, 
    borderBottomRightRadius: 5
  }, 
  item: {
    backgroundColor: '#DAD8D8',
    marginVertical: 5,
    marginLeft: 10, 
    marginRight: 10
  }, 
  img: {
    width: leftWidth - 20,
    height: height - 20,
  }, 
  star_icon: {
    position: "absolute",
    top: 10, 
    right:10,
    fontSize: 25,
    zIndex:2
  }, 
  en_text: {
    top: 13, 
    textAlign: "center",
    color: "#ff5e00", 
    fontSize: 25, 
    fontWeight: "bold"
  }, 
  spelling_text: {
    textAlign: "center",
    fontSize: 18, 
    paddingTop: 16, 
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