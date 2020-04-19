import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  text_banner:{
    fontSize: 25,
    fontFamily: 'Times New Roman',
    color:'#ffffff',
    flexDirection: "row",
  },
  text:{
    fontFamily: 'Times New Roman',
    fontSize: 20,
    padding:15,
    color:'#ffffff',
  },
  text_button:{
    fontFamily: 'Times New Roman',
    fontSize: 20,
    padding:5,
    color:'#ffffff',
  },
  
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f7f7f7',
    height:'100%',
  },
  paragraph: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#65a844',
  },
  
  button:{
    backgroundColor:'#0cbb66',
    width:'100%',
    height:50,
    marginTop:10,
    flexDirection:'row',
    alignItems: 'center',
    color:'#ffffff',
  },
  icon_back:{
    marginLeft:10,
    height:20,
    width:20,
    paddingBottom:7,
    flexDirection: "row",
  },
  icon:{
    marginLeft:10,
    height:50,
    width:50,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    margin:10,
    marginTop:20,
    backgroundColor:'#ffffff',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  paragraph2: {
    marginHorizontal:24,
    paddingBottom: 50,
    fontSize: 16,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  logo2: {
    height: 200,
    width: 200,
    
    marginBottom:10,
    marginTop:10,
  }, 
   button2:{
    backgroundColor:'#65a844',
    alignItems: 'center',
    justifyContent:'center',
    margin:-40,
  },
});
export default styles;