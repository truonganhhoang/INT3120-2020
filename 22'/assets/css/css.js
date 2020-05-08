import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  TextInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
    borderColor: '#33CCFF',
  },
  text_banner:{
    fontSize: 25,
    color:'#ffffff',
    flexDirection: "row",
  },
  text:{
    fontSize: 20,
    padding:15,
  },
  text_button:{
    fontSize: 20,
    padding:5,
    color:'#ffffff',
  },
  
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f8fff9',
    height:'100%',
  },
  paragraph: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  banner:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#42b309',
    width:'100%',
    textAlign:'center',
    paddingVertical:20,
  },

  button:{
    backgroundColor:'#ffffff',
    width:'95%',
    height:60,
    marginTop:10,
    flexDirection:'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dfeae1',
    borderRadius:5,
    
  },
  icon_back:{
    marginLeft:10,
    height:36,
    width:36,
    marginHorizontal:20,
  },
  icon:{
    marginLeft:10,
    height:50,
    width:50,
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    marginTop:10,
    backgroundColor:'#f8fff9',
    
  },
  paragraph2: {
    marginHorizontal:24,
    paddingBottom: 50,
    fontSize: 16,
    textAlign: 'center',
  },
  logo2: {
    height: 200,
    width: 200,
    marginVertical:10,
  }, 
   button2:{
    backgroundColor:'#33CCFF',
    alignItems: 'center',
    justifyContent:'center',
    margin:-40,
  },
});
export default styles;