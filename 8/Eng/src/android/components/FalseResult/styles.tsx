import { StyleSheet, Dimensions } from 'react-native'; 
const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;
const styles = StyleSheet.create({
  containers:{
    height:HEIGHT*0.4,
    padding:HEIGHT*0.06,
    justifyContent:'center',
  },
  container: {
    alignItems:'center',
    justifyContent:'center',
  }, 
  title: {
    fontSize:22,
    fontWeight:'bold',
    color:'#FFF',
    lineHeight:50,
    marginBottom:10
  }, 
  comment: {
    color:'#FFF',
    fontSize:16,
    marginBottom:10,
    textAlign:'center'
  }, 
  button:{
    width:150,
    marginBottom:5,
    borderRadius:100,
    borderWidth:2,
    backgroundColor:'#FFF',
    borderColor:'#f68383'
  }
})

export default styles