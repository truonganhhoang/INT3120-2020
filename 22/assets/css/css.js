import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  TextInput: {
    width: '100%',
    height: 40,
    paddingLeft: 5,
    borderWidth: 1,
    marginTop: 15,
    borderColor: '#606070',
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f7f7f7',
    height:'100%',
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner:{
    paddingTop: Constants.statusBarHeight,
    height:50,
    backgroundColor:'#0cbb66',
  },
  
  button:{
    backgroundColor:'#0cbb66',
    width:'100%',
    height:50,
    marginTop:10,
    flexDirection:'row',
    borderRadius:5,
    alignItems: 'center',
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
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'dashed',
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
    borderRadius:10,
    marginBottom:10,
    marginTop:10,
  }, 
   button2:{
    backgroundColor:'#36d2da',
    borderRadius:'50%',
    justifyContent:'center',
    margin:-40,
  },
});
export default styles;