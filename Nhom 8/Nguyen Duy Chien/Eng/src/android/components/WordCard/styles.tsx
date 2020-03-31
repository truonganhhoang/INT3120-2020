import { StyleSheet } from 'react-native'; 
import layout  from '../../constants/layout'; 

const styles = StyleSheet.create({
  img: {
    marginTop: 12, 
    width: 100, 
    height: 100, 
    position: "absolute"
  }, 
  btn: {
    width: layout.window.width, 
    height: 148, 
    marginTop: 5, 
    marginBottom: 12
  }, 
  card: {
    marginTop: 10, 
    height: 148, 
    borderRadius: 3
  }, 
  right_card: {
    marginLeft: 110, 
  }, 
  en_text: {
    marginLeft: 120, 
    textAlign: "center", 
    color: "orange", 
    fontSize: 20, 
    fontWeight: "bold"
  }, 
  spelling_text: {
    marginLeft: 120, 
    textAlign: "center", 
    color: "black", 
    fontSize: 15
  }, 
  vn_text: {
    marginLeft: 120, 
    marginTop: 15, 
    textAlign: "center", 
    color: "blue", 
    fontSize: 18,
    fontWeight: "bold"
  }, 
  star_icon: {
    position: "absolute"
  }, 
  voice_icon: {
    marginTop: 5, 
    marginLeft: 120, 
    textAlign: "center", 
  }
})

export default styles; 