import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item:{
    width:'90%',
    height:40,
    backgroundColor: '#a7b2c4',
    paddingLeft:8,
    paddingTop:4,
    paddingBottom:4,
    marginTop:4,
    marginBottom:4,
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:2,
  },
  activeBackground:{
    backgroundColor: '#e9edf5'
  },
  icon:{
    marginRight:10,
    color:'#3385d6'
  }
});
export default styles;