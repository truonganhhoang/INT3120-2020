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
    backgroundColor: '#f7f7f7',
    height:'100%',
  },
  paragraph: {
    color: 'white',
    fontSize: 25,
    paddingLeft:10,
    fontWeight: 'bold',
  },
  banner:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#65a844',
  },

  button:{
    backgroundColor:'#ffffff',
    width:'100%',
    height:60,
    marginTop:10,
    flexDirection:'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dfeae1',
  },
  icon_back:{
    marginLeft:10,
    height:20,
    width:20,
    paddingBottom:7,
    paddingLeft:10,
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
    marginHorizontal:10,
    marginTop:10,
    backgroundColor:'#f7f7f7',
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