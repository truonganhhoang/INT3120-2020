import { StyleSheet } from 'react-native'; 
import layout  from '../../constants/layout'; 

const styles = StyleSheet.create({
  header: {
    paddingTop: 0, 
    height: 60, 
    backgroundColor: 'white'
  }, 
  centerComponent: {
    color: '#ff5e00', 
    fontWeight: '700', 
    fontSize: 20,  
  }, 
  list: {
    paddingTop: 5,
    justifyContent: "space-around",
  }, 
  container: {
    flex: 1,
    backgroundColor: "#DAD8D8",
    alignItems: "stretch",
    justifyContent: "flex-start",
  }
}); 

export default styles; 